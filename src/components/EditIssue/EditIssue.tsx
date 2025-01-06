import React, { useState, useEffect } from "react";
import { useParams, useNavigate  } from "react-router-dom";
import useBoardStore from "../../store/store.tsx";

import "./EditIssue.css";
const EditIssue = () => {
  const { id, defstatus } = useParams();
  const defStatusVal = {
    0: "todo",
    1: "inprogress",
    2: "done"
  }
  const columns = useBoardStore((state) => state.columns);
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [tags, setTags] = useState<string[]>([]);
  const [assignee, setAssignee] = useState<string>("");
  const [status, setStatus] = useState<string>(defStatusVal[defstatus || 0]);
  const addIssue = useBoardStore((state) => state.addIssue);
  const updateIssue = useBoardStore((state) => state.updateIssue);
  const navigate = useNavigate();
  useEffect(() => {
    columns.forEach((val) => {
      val.issues.forEach((v) => {
        if (v.id == id) {
          setTitle(v.title);
          setDescription(v.description);
          setTags(v.label);
          setAssignee(v.assignee);
          setStatus(v.status);
        }
      });
    });
  }, []);

  const handleSubmit = (e, id) => {
    e.preventDefault();
    if (id != "new") {
      updateIssue(id, { title, description, assignee, label: tags, status });
    } else {
      addIssue({ title, description, assignee, label: tags, status });
    }
    alert("successfull")
  };
  
  console.log(tags);
  return (
    <div class="form-container">
      <nav>
        <ul class="breadcrumb">
          <li>
            <a onClick={(e) => navigate(-1)}>Home</a>
          </li>
          <li>{id == "new" ? "Create Issue" : "Update Issue"}</li>
        </ul>
      </nav>
      <h2>{id == "new" ? "Create Issue" : "Update Issue"}</h2>
      <form action="#" method="POST">
        <label for="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <br />

        <label for="description">Description:</label>
        <textarea
          id="description"
          name="description"
          rows="4"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>
        <br />
        <label for="assignee">Assignee:</label>
        <input
          type="text"
          id="assignee"
          name="assignee"
          value={assignee}
          onChange={(e) => setAssignee(e.target.value)}
          required
        />
        <br />
        <label for="tags">Tags:</label>
        <select
          id="tags"
          name="tags[]"
          multiple
          size="5"
          value={tags}
          onChange={(e) => setTags([...tags, e.target.value])}
        >
          <option value="Bug">Bug</option>
          <option value="Low Priority">Low Priority</option>
          <option value="High Priority">High Priority</option>
          <option value="Medium Priority">Medium Priority</option>
          <option value="Feature">Feature</option>
        </select>
        <br />

        <label for="status">Status:</label>
        <select
          id="status"
          name="status"
          required
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          disabled = {id == "new"? true : false }
        >
          <option value="todo">To Do</option>
          <option value="inprogress">In Progress</option>
          <option value="done">Done</option>
        </select>
        <br />

        <button type="submit" onClick={(e) => handleSubmit(e, id)}>
          {id == "new" ? "Submit" : "Update"}
        </button>

        <button type="reset">Reset</button>
      </form>


    </div>
  );
};
export default EditIssue;
