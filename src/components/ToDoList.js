import '../style.css'

function ToDoList(props){
    return (
        <section className="w-4/5 max-w-md mx-auto">
            <ul className="">
                {props.children}
            </ul>
        </section>
    )
}

export {ToDoList}