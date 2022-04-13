import React, { useState } from "react";
import Active from "./components/Active";
import All from "./components/All";
import Completed from "./components/Completed";

function App() {

  const [Tab, setTab] = useState("All");

  return (
    <div className="App">
      <h1>#todo</h1>
      <div>
        <button onClick={() => setTab("All")}>All</button>
        <button onClick={() => setTab("Active")}>Active</button>
        <button onClick={() => setTab("Completed")}>Completed</button>
      </div>
      <div>
        {Tab === "All" ? <All/> : null}
        {Tab === "Active" ? <Active/> : null}
        {Tab === "Completed" ? <Completed/> : null}
      </div>
    </div>
  );
}

export default App;
