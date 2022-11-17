import ReactDOM from 'react-dom';


function Modal({children}) {
    return ReactDOM.createPortal(
        <div className='w-screen h-screen absolute inset-0 bg-slate-800 bg-opacity-80 z-0'>
            {children}
        </div>,
        document.getElementById('modal')
    )
}

export { Modal }