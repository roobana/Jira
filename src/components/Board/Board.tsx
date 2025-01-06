import React, { useState } from "react";
import Column from "../Column/Column.tsx";
import useBoardStore from "../../store/store.tsx";
import "./Board.css"
// import defaultcolumns from "../../data/data.js";
// import  Column  from './components/Column/Column.tsx';

// import defaultcolumns from './data/data.js';  //default export

type Props = {


}

const Board = (props: Props) => {
  // const [columns, setColumns] = useState(defaultcolumns);
  const columns = useBoardStore((state) => state.columns);
 
  return (
    <>
    <header><h1>jira board</h1></header>
    <div className="board">
      {columns.map((col, index) => {
        return <Column column={col} ind={index} />;
      })}
    </div>
    <footer><p>&copy; All Rights Reserved.</p></footer>
    </>
  )
}

export default Board;

