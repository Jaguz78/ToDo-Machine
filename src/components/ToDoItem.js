import '../style.css'

function ToDoItem(props){
    return (
        <li className="flex justify-between my-4 bg-neutral-700 text-neutral-100 px-4 py-2">
            <span className={`font-bold ${props.completed && 'text-green-500'} my-auto text-lg`}
            onClick={props.completeTodo}>
                ✓
            </span>
            <p className={`mx-6 text-left w-4/5 ${props.completed && 'line-through'}`}>{props.text}</p>
            <span className="font-bold text-red-500 my-auto text-lg" onClick={props.deleteTodo}>X</span>
        </li>
    )
}

export {ToDoItem}