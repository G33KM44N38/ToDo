import React from 'react'

function Update({id, ToDoList, setToDoList}) {
    function updateTask(id, setToDoList, ToDoList) {
        const index = ToDoList.findIndex(element => element.id === id)
        ToDoList[index].name = "pomme"
        setToDoList([...ToDoList])
    }
  return (
    <button className='update-button' onClick={() => updateTask(id, setToDoList, ToDoList)}>update</button>
  )
}

export default Update