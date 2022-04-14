import React, { useEffect, useState } from 'react'
import toChecked from '../function/toChecked';

function Completed({ToDoList, setToDoList}) {
  const [filteredTaskDone, setfilteredTaskDone] = useState([]);

  useEffect(() => {
    setfilteredTaskDone(ToDoList.filter(task => task.done === true))
  }, [filteredTaskDone])
  
  return (
    <div id="Completed-tab">
        {
            filteredTaskDone.map(({name, done, id}, index) =>
                <div key={index}>
                  <input 
                  key={index}
                  type="checkbox"
                  value={name}
                  checked={done}
                  onChange={() => toChecked(id, setToDoList, ToDoList)}
                  />{name}
                </div>
            )
        }
    </div>
  )
}

export default Completed