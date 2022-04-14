import React from 'react'

function All({ToDoList, setToDoList}) {

    const toChecked = (index) => {
        ToDoList[index].done = !ToDoList[index].done
        setToDoList([...ToDoList]);
    }

  return (
    <div id='All-tab'>
        {
            ToDoList.map(({name, done}, index) =>
                <div key={index}>
                    <input 
                    key={index}
                    type="checkbox"
                    value={name}
                    onChange={() => toChecked(index)}
                    checked={done}
                    />{name}
                </div>
            )
        }
    </div>
  )
}

export default All