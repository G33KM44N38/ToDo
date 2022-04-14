function toChecked(id, setToDoList, ToDoList) {
    const index = ToDoList.findIndex(element => element.id === id)

    ToDoList[index].done = !ToDoList[index].done

    setToDoList([...ToDoList])
}

export default toChecked