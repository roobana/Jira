import React from "react";
import { CiEdit } from "react-icons/ci";
import { MdDeleteForever } from "react-icons/md";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import useBoardStore from "../../store/store.tsx"
import "./Issues.css"

type Issue = {
  id?: string;
  title?: string;
  description?: string;
  label?: string[];
  due?: string;
  status?: string;
  assignee?: string;
};

type Props = {
    issues:Issue[];
    index:number;          
}

const Issues = (props: Props) => {
  const removeIssue = useBoardStore((state) => state.removeIssue);

  return (
    <>
      {props.issues.map((val, ind) => {
        return (
          <div>
            <div class="issue">
              <div class="title">{val.title}</div>
              <div class="description">{val.description}</div>
              <div class="labels">
                {val.label?.map((label) => {
                  return <div class="label">{label}</div>
                })}
              </div>

              <div class="due-date">{val.due}</div>
              <div class="issue-actions">
              <Link to={`EditIssue/${val.id}`}><i class="edit"><CiEdit /></i></Link>  
                <i class="delete" onClick={()=>removeIssue(props.index, ind)}><MdDeleteForever /></i>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};



export default Issues;
