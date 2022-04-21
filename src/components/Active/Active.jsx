import React, { useEffect, useState } from 'react'
import toChecked from '../../function/toChecked'
import Delete from '../../function/Delete'
import Update from '../../function/Update'
import Input from '../Input/Input';

function Active({ToDoList, setToDoList, setNewTaskName, NewTaskName, addNewTask}) {

  const [filteredTaskDone, setfilteredTaskDone] = useState([])

  useEffect(() => {
    setfilteredTaskDone(ToDoList.filter(task => task.done === false))
  }, [filteredTaskDone])

  return (
    <div>
      <Input setNewTaskName={setNewTaskName} NewTaskName={NewTaskName} addNewTask={addNewTask}/>
      <div id='Active-tab'>
        {
              filteredTaskDone.map(({name, done, id}, index) =>
                  <div key={index}>
                      <input 
                      key={index}
                      className='checkbox'
                      type="checkbox"
                      value={name}
                      checked={done}
                      onChange={() => toChecked(id, setToDoList, ToDoList)}
                      />{name}
                      <Delete id={id} ToDoList={ToDoList} setToDoList={setToDoList}/>
                      <Update id={id} ToDoList={ToDoList} setToDoList={setToDoList}/>
                  </div>
              )
          }
      </div>
    </div>
  )
}

export default Active