import React from 'react'

function Completed({ToDoList}) {
  return (
    <div id="Completed-tab">
        {
            ToDoList.map(({name, done}, index) =>
                <div key={index}>
                    <input 
                    key={index}
                    type="checkbox"
                    value={name}
                    />{name}
                </div>
            )
        }
    </div>
  )
}

export default Completed