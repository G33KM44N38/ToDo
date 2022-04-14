import React, { useEffect, useState } from 'react'
import toChecked from '../function/toChecked'

function Active({ToDoList, setToDoList}) {

  const [filteredTaskDone, setfilteredTaskDone] = useState([])

  useEffect(() => {
    setfilteredTaskDone(ToDoList.filter(task => task.done === false))
  }, [filteredTaskDone])

  return (
    <div id='Active-tab'>
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
        }    </div>
  )
}

export default Active