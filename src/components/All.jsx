import React from 'react'
import toChecked from '../function/toChecked';
import Delete from '../function/Delete';

function All({ToDoList, setToDoList}) {


  return (
    <div id='All-tab'>
        {
            ToDoList.map(({name, done, id}, index) =>
                <div key={index}>
                    <input 
                    key={index}
                    type="checkbox"
                    value={name}
                    onChange={() => toChecked(id, setToDoList, ToDoList)}
                    checked={done}
                    />{name}
                    <Delete id={id} ToDoList={ToDoList} setToDoList={setToDoList}/>
                </div>
            )
        }
    </div>
  )
}

export default All