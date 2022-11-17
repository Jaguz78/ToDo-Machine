import { ToDoButton } from './components/ToDoButton';
import {ToDoCounter} from './components/ToDoCounter'
import { ToDoItem } from './components/ToDoItem';
import { ToDoList } from './components/ToDoList';
import { ToDoSearch } from './components/ToDoSearch';
import { TodoContext } from './TodoContext';
import React from 'react';
import { Modal } from './modal';
import { ToDoForm } from './components/ToDoForm';
import {TodosError, TodosLoading, EmptyTodos} from './components/loadingSkeletons'



function App() {
  const {
    loading,
    error,
    findedTodos,
    completeTodo,
    deleteTodo,
    openModal,
  } = React.useContext(TodoContext)

  return (
    <>
      <ToDoCounter />
      <ToDoSearch />
      <ToDoList>
        
        {error && <TodosError error={error} />}
        {loading && <TodosLoading />}
        {(!loading && !findedTodos.length) && <EmptyTodos />}

        {findedTodos.map(todo => (
          <ToDoItem text={todo.text} key={todo.text} completed={todo.completed}
            completeTodo={_ => completeTodo(todo.text)} deleteTodo={_ => deleteTodo(todo.text)} />
        ))}
      </ToDoList>
      
      {openModal && (
        <Modal>
            <ToDoForm />
        </Modal>
      )}

      <ToDoButton />
    </>
  )
}

export default App;
