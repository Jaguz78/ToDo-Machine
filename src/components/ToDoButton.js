import '../style.css'
import React from 'react'
import { TodoContext } from '../TodoContext'

function ToDoButton() {

    const {openModal, setOpenModal} = React.useContext(TodoContext)

    const onClickButton = _ => {
        setOpenModal(!openModal)
    }

    return (
        <button className="w-14 h-14 bg-green-500 rounded-full text-5xl  font-extrabold text-white
        fixed right-12 bottom-12 flex justify-center"
        onClick={onClickButton}>
            +
        </button>
    )
}

export { ToDoButton }