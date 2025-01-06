import React from "react";
import ColumnHeader from "../ColumnHeader/ColumnHeader.tsx";
import Issues from "../Issues/Issues.tsx";
import AddIssue from "../AddIssue/AddIssue.tsx";
type Issue = {
  id?: string;
  title?: string;
  description?: string;
  label?: string[];
  due?: string;
  status?: string;
  assignee?: string;
};

type Column = {
  title: string;
  issues: Issue[];
};
type Props = {
  column: Column;
  ind: number; 
};
const Column = ({column, ind}: Props) => {
  return (
    <div className="column">
      <ColumnHeader title={column.title} />
      <Issues issues={column.issues} index={ind} />
      <AddIssue index={ind} />
    </div>
  );
};

export default Column;
