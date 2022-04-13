import React from 'react'

function All({ToDoList}) {

    const toChecked = (index) => {
        ToDoList[index].checked = !ToDoList[index].checked
        console.log(ToDoList);
    }

  return (
    <div id='All-tab'>
        {
            ToDoList.map(({name}, index) =>
                <div key={index}>
                    <input 
                    key={index}
                    type="checkbox"
                    value={name}
                    onChange={() => toChecked(index)}/>{name}
                </div>
            )
        }
    </div>
  )
}

export default All