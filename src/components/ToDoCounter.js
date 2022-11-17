import '../style.css'
import { useContext } from 'react'
import { TodoContext } from '../TodoContext/index'

function ToDoCounter(){
    const {totalTodos, completedTodos} = useContext(TodoContext)
    return (
        <>
            <h2 className="w-4/5 mx-auto text-center font-bold text-lg mt-4">
                Haz completado {completedTodos} de {totalTodos} TODO's
            </h2>
        </>
    )
}

export { ToDoCounter }