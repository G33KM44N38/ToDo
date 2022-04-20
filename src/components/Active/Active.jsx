import React, { useEffect, useState } from 'react'
import toChecked from '../../function/toChecked'
import Delete from '../../function/Delete'
import Update from '../../function/Update'

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
                    <Delete id={id} ToDoList={ToDoList} setToDoList={setToDoList}/>
                    <Update id={id} ToDoList={ToDoList} setToDoList={setToDoList}/>
                </div>
            )
        }    </div>
  )
}

export default Active