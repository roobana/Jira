import { create } from "zustand";
import { persist } from "zustand/middleware";

import columns from "../data/data.js";
const defStatusVal = {
  "todo": 0,
  "inprogress": 1,
  "done": 2
}
type Issue = {
  id?: string;
  title?: string;
  description?: string;
  label?: string[];
  due?: string;
  status: string;
  assignee?: string;
};

type Column = {
  title: string;
  issues: Issue[];
};

type BoardState = {
  columns: Column[];
  addIssue: (issue: Issue) => void;
  updateIssue: (id: string, new_val: Partial<Issue>) => void; // Action to update an issue
  removeIssue: (i: number, j: number) => void; // Action to remove an issue
}

const useBoardStore = create<BoardState>()(
  persist(
  (set) => ({
    columns: columns,
    removeIssue: (colIndex: number, issueIndex: number) => set((state) => {
      const updatedColumns = [...state.columns];
      updatedColumns[colIndex].issues.splice(issueIndex, 1); // Remove the issue from the specified column
      return { columns: updatedColumns };
    }),
    addIssue: (issue: Issue) => set((state) => {
      const updatedColumns = [...state.columns];
      const columnIndex = defStatusVal[issue.status];
      updatedColumns[columnIndex].issues.push(issue); // Add the issue to the correct column
      return { columns: updatedColumns };
    }),
    updateIssue: (id: string, new_val: Partial<Issue>) => set((state)=>{
     let updatedColumns  = [...state.columns];
     let shouldBreak = false;
     updatedColumns .some((col)=>{
      col.issues.some((v, i)=>{
        if (v.id == id && v.status != new_val.status) {
          let removedVal = col.issues.splice(i, 1);
          if (new_val.status) {
            updatedColumns[defStatusVal[new_val.status]].issues.push(removedVal[0]);
          }
          shouldBreak = true; 
          return true;
        }
      })
      return shouldBreak;
    })

     updatedColumns .forEach((col)=>{
      col.issues.forEach((v, i)=>{
        if(v.id == id){
          if (new_val.title !== undefined) v.title = new_val.title;
          if (new_val.description !== undefined) v.description = new_val.description;
          if (new_val.label !== undefined) v.label = new_val.label;
          if (new_val.assignee !== undefined) v.assignee = new_val.assignee;
          if (new_val.status !== undefined) v.status = new_val.status;
        }
      })
     })
     return {columns: updatedColumns }
    })
  }),
  { name: "jira-board" }
));

export default useBoardStore;
