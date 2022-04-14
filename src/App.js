import React, { useState } from "react";
import Active from "./components/Active";
import All from "./components/All";
import Completed from "./components/Completed";
import { v4 as uuidv4 } from 'uuid';




function App() {

  const [Tab, setTab] = useState("All")
  const [NewTaskName, setNewTaskName] = useState("")
  const [ToDoList, setToDoList] = useState([
    {id: uuidv4(), name: "Shop some coffee", done: false },
    {id: uuidv4(), name: "Buy milk", done: true }
  ])
  const addNewTask = (e) => {
    e.preventDefault()
    console.log(NewTaskName);
    if (NewTaskName !== '')
    {
      setToDoList([...ToDoList, {id: uuidv4(), name: NewTaskName, done: false}])
      setNewTaskName("")
    }
    console.log(NewTaskName);
  }

  return (
    <div className="App">
      <h1>#todo</h1>
      <div>
        <button onClick={() => setTab("All")}>All</button>
        <button onClick={() => setTab("Active")}>Active</button>
        <button onClick={() => setTab("Completed")}>Completed</button>
      </div>
      <form id="input-type-div">
        <input className="input-new-task" onChange={(e) => setNewTaskName(e.target.value)} placeholder="Add a new task"  value={NewTaskName}></input>
        <button type="submit" onClick={addNewTask}>Add</button>
      </form>
      <div>
        {Tab === "All" ? <All ToDoList={ToDoList} setToDoList={setToDoList}/> : null}
        {Tab === "Active" ? <Active ToDoList={ToDoList} setToDoList={setToDoList}/> : null}
        {Tab === "Completed" ? <Completed ToDoList={ToDoList} setToDoList={setToDoList}/> : null}
      </div>
    </div>
  );
}

export default App;
