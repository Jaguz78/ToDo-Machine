import React from "react"

function TodosError({error}) {
    return (
        <p>{error}</p>
    )
}

function TodosLoading() {
    return (
        <div className="flex justify-between align-middle my-4 shadow-sm px-4 py-2
        bg-neutral-500 bg-opacity-70 animate-pulse ">
            <span className="w-8 h-8 rounded-full bg-neutral-500"></span>
            <p className="w-4/5 bg-neutral-500 px-4 py-2 text-white">Cargando ToDo's</p>
            <span className="w-8 h-8 rounded-full bg-neutral-500"></span>
        </div>
    )
}

function EmptyTodos() {
    return(
        <p>Crea tu primer ToDo!</p>
    )
}

export { TodosError, TodosLoading, EmptyTodos }