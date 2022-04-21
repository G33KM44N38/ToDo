import React, { useEffect, useState } from 'react'
import toChecked from '../../function/toChecked';
import Delete from '../../function/Delete';
import { ImBin } from 'react-icons/im';
import './Completed.css'

function Completed({ToDoList, setToDoList}) {
  const [filteredTaskDone, setfilteredTaskDone] = useState([]);

  useEffect(() => {
    setfilteredTaskDone(ToDoList.filter(task => task.done === true))
  }, [filteredTaskDone])

  const deleteAllTask = () => {
    var i
    var index

    i = 0;

    while (i < filteredTaskDone.length) {
      var idToDelete = filteredTaskDone[i].id

      index = ToDoList.findIndex(element => element.id === idToDelete) //eslint-disable-line
      ToDoList.splice(index, 1)
      i++;
    }
  }
  
  return (
    <div id="Completed-tab">
        {
            filteredTaskDone.map(({name, done, id}, index) =>
                <div key={index}>
                  <input 
                  className='checkbox'
                  key={index}
                  type="checkbox"
                  value={name}
                  checked={done}
                  onChange={() => toChecked(id, setToDoList, ToDoList)}
                  />{name}
                  <Delete id={id} ToDoList={ToDoList} setToDoList={setToDoList}/>
                </div>
            )
        }
        {filteredTaskDone.length >= 1 ? <button onClick={() => deleteAllTask()} id='delete-all-button'><ImBin/>Delete All</button> : <div>You doesn't got any task completed</div>}
    </div>
  )
}

export default Completed