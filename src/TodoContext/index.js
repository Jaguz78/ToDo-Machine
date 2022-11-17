import React from "react";
import { useLocalStorage } from "./useLocalStorage";
import { useState } from "react";

const TodoContext = React.createContext()

function TodoProvider(props){

    const [todos, saveTodos, loading, error] = useLocalStorage('TODOS_V1', [])
    const [openModal, setOpenModal] = useState(false)
    //const [name, saveName] = useLocalStorage('ElNombre', '') //en vez de ir vacio podría ir algo por defecto
    const [searchValue, setSearchValue] = useState('')
  
    const completedTodos = todos.filter(todo => todo.completed).length
    const totalTodos = todos.length
    let findedTodos = []
  
    searchValue.length >= 1 ? 
    findedTodos = todos.filter(todo => todo.text.toLowerCase().match(searchValue)) :
    findedTodos = [...todos]
  
    const addTodo = text => {
      const newTodos = [...todos]
      newTodos.push({
        completed: false,
        text
      })
      saveTodos(newTodos)
    }

    const completeTodo = text => {
      const index = todos.findIndex(todo => todo.text === text)
      const newTodos = [...todos]
      newTodos[index].completed = newTodos[index].completed === true ? false : true
      saveTodos(newTodos)
    }
  
    const deleteTodo = text => {
      const index = todos.findIndex(todo => todo.text === text)
      let newTodos = [...todos]
      newTodos.splice(index, 1)
      saveTodos(newTodos)
    }

    return (
        <TodoContext.Provider value={{
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            error,
            loading,
            findedTodos,
            addTodo,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal
        }}>
            {props.children}
        </TodoContext.Provider>
    )
}

export { TodoContext, TodoProvider }