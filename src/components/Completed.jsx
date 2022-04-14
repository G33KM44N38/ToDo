import React, { useEffect, useState } from 'react'

function Completed({ToDoList, setNewTaskName}) {
  const [filteredTaskDone, setfilteredTaskDone] = useState([]);

  const toChecked = (index) => {
    ToDoList[index].done = !ToDoList[index].done
    setNewTaskName([...ToDoList]);
  }

  useEffect(() => {
    setfilteredTaskDone(ToDoList.filter(task => task.done === true))
  }, [filteredTaskDone])
  
  return (
    <div id="Completed-tab">
        {
            filteredTaskDone.map(({name, done}, index) =>
                <div key={index}>
                    <input 
                    key={index}
                    type="checkbox"
                    value={name}
                    checked={done}
                    onChange={() => toChecked(index)}
                    />{name}
                </div>
            )
        }
    </div>
  )
}

export default Completed