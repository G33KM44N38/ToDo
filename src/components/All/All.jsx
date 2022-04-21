import React from 'react'
import toChecked from '../../function/toChecked';
import Delete from '../../function/Delete';
import Update from '../../function/Update';
import Input from '../Input/Input';
import './All.css'

function All({ToDoList, setToDoList, setNewTaskName, NewTaskName, addNewTask}) {


  return (
    <div>
       <Input setNewTaskName={setNewTaskName} NewTaskName={NewTaskName} addNewTask={addNewTask}/>
      <div id='All-tab'>
          {
              ToDoList.map(({name, done, id}, index) =>
                  <div key={index}>
                      <input 
                      className='checkbox'
                      key={index}
                      type="checkbox"
                      value={name}
                      onChange={() => toChecked(id, setToDoList, ToDoList)}
                      checked={done}
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

export default All