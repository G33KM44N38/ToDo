import React, { useState } from "react";
import Active from "./components/Active";
import All from "./components/All";
import Completed from "./components/Completed";

function App() {

  const [Tab, setTab] = useState("All")
  const [NewTaskName, setNewTaskName] = useState("")
  const [ToDoList, setToDoList] = useState([
    {name: "Shop some coffee", done: false },
    {name: "Shop some coffee", done: true }
  ])
  const addNewTask = (e) => {
    e.preventDefault()
    setToDoList([...ToDoList, {name: NewTaskName, done: false}])
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
      <form>
        <input className="input-new-task" onChange={(e) => setNewTaskName(e.target.value)} placeholder="Add a new task"></input>
        <button onClick={addNewTask}>Add</button>
      </form>
      <div>
        {Tab === "All" ? <All ToDoList={ToDoList} setNewTaskName={setNewTaskName}/> : null}
        {Tab === "Active" ? <Active/> : null}
        {Tab === "Completed" ? <Completed ToDoList={ToDoList} setNewTaskName={setNewTaskName}/> : null}
      </div>
    </div>
  );
}

export default App;
