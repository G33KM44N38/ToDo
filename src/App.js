import React, { useState } from "react";
import Active from "./components/Active";
import All from "./components/All";
import Completed from "./components/Completed";

function App() {

  const [Tab, setTab] = useState("All")
  const [NewTaskName, setNewTaskName] = useState("")
  const [ToDoList, setToDoList] = useState([
    {id: 1, name: "Shop some coffee", done: false },
    {id: 2, name: "Buy milk", done: true }
  ])
  const addNewTask = (e) => {
    e.preventDefault()
    setToDoList([...ToDoList, {id: ToDoList.length + 1, name: NewTaskName, done: false}])
    console.log(ToDoList)
  }

  return (
    <div className="App">
      <h1>#todo</h1>
      <div>
        <button onClick={() => setTab("All")}>All</button>
        <button onClick={() => setTab("Active")}>Active</button>
        <button onClick={() => setTab("Completed")}>Completed</button>
      </div>
      <form id="input-type-form">
        <input className="input-new-task" onChange={(e) => setNewTaskName(e.target.value)} placeholder="Add a new task"></input>
        <button onClick={addNewTask}>Add</button>
      </form>
      <div>
        {Tab === "All" ? <All ToDoList={ToDoList} setNewTaskName={setNewTaskName}/> : null}
        {Tab === "Active" ? <Active ToDoList={ToDoList} setNewTaskName={setNewTaskName}/> : null}
        {Tab === "Completed" ? <Completed ToDoList={ToDoList} setNewTaskName={setNewTaskName}/> : null}
      </div>
    </div>
  );
}

export default App;
