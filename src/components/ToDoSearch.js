import { useContext } from 'react'
import { TodoContext } from '../TodoContext'
import '../style.css'

function ToDoSearch() {
    const {searchValue, setSearchValue} = useContext(TodoContext)
    return (
        <div className="flex justify-center max-w-md m-auto">
            <input type="text" placeholder="Buscar ToDo" value={searchValue} className="w-4/5 h-10 p-4 border-neutral-500 
            border-2 rounded-lg mt-4" onChange={e => setSearchValue(e.target.value)}/>
        </div>
    )
}

export { ToDoSearch }