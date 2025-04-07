import './Style.css'

function ToDoItem(props) {
    return (
        <div className={`todoitem ${props.taskNo % 2 === 0 ? 'bg-blue-200' : 'bg-gray-200'}`}>
            <div className='task'>
                {props.task.text} 
            </div>
            <div className='mark-edit-delete'>
                <button className='mark-button' onClick={props.onMark}> 
                    {props.task.completed ? '✅' : '❌'} 
                </button>
                <button className='edit-button' onClick={props.onEdit}> 
                    Edit <i className="fa-regular fa-pen-to-square"></i> 
                </button>
                <button className='delete-button' onClick={props.onDelete}> 
                    Delete <i className="fa-solid fa-trash"></i> 
                </button>
            </div>
        </div>
    );
}

export default ToDoItem;
