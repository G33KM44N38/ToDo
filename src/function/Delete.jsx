import React from 'react'

function Delete({id, ToDoList, setToDoList}) {

    function deleteTask(id, setToDoList, ToDoList) {
        const index = ToDoList.findIndex(element => element.id === id)
        ToDoList.splice(index, 1)
        setToDoList([...ToDoList])
    }

  return (
    <button className='delete-button' onClick={() => deleteTask(id, setToDoList, ToDoList)}>Delete</button>
  )
}

export default Delete