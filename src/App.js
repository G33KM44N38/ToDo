import React, { useState } from "react";
import Active from "./components/Active";
import All from "./components/All";
import Completed from "./components/Completed";
import uniqueid from "./function/getNewId";

function App() {

  const [Tab, setTab] = useState("All")
  const [NewTaskName, setNewTaskName] = useState("")
  const [ToDoList, setToDoList] = useState([
    {id: 1, name: "Shop some coffee", done: false },
    {id: 2, name: "Buy milk", done: true }
  ])

  const addNewTask = (e) => {

    e.preventDefault()

    if (NewTaskName !== '')
    {
      setToDoList([...ToDoList, {id: uniqueid(), name: NewTaskName, done: false}])
      setNewTaskName("")
    }
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
