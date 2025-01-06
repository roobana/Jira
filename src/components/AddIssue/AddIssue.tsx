import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

type Props = {
  index:number
}

const AddIssue = (props: Props) => {
  return (
    <Link to={`/EditIssue/new/${props.index}`}><div class="add-issue">+ Add an Issue</div></Link>  

  )
}

export default AddIssue