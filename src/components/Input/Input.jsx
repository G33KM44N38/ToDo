import React from 'react'

function Input({setNewTaskName, NewTaskName, addNewTask}) {
  return (
    <form id="input-type-div">
    <input className="input-new-task" onChange={(e) => setNewTaskName(e.target.value)} placeholder="Add a new task"  value={NewTaskName}></input>
    <button className="add-button" type="submit" onClick={addNewTask}>Add</button>
  </form>
  )
}

export default Input