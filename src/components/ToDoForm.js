import { useContext, useState } from 'react'
import { TodoContext } from '../TodoContext'

function ToDoForm() {

    const { setOpenModal, addTodo } = useContext(TodoContext)
    const [newTodoValue, setNewTodoValue] = useState('')

    const cancel = _ => setOpenModal(false)

    const guardar = event => {
        event.preventDefault()
        addTodo(newTodoValue)
        setOpenModal(false)
    }

    const onChange = event => setNewTodoValue(event.target.value)

    return (
        <form onSubmit={guardar} className='w-3/4  max-w-lg h-64 border rounded-md bg-white shadow-lg border-slate-800 py-4 px-8 absolute top-1/2 left-1/2
        transform -translate-x-1/2 -translate-y-1/2' >
            <h3 className='text-lg text-center font-bold'>Crea tu siguiente ToDo</h3>
            <textarea placeholder='Ir al Gym' className='w-full h-24 my-4 px-2 border border-slate-800'
            value={newTodoValue} onChange={onChange} />
            <div>
                <button className='p-2 bg-red-500 mr-4 rounded' type='button' onClick={cancel} >Cancelar</button>
                <button className='p-2 bg-green-500 rounded' type='submit' >Guardar</button>
            </div>
        </form>
    )
}

export { ToDoForm }