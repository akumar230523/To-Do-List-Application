import ToDoItem from "./ToDoItem";
import { useState, useRef } from "react";
import './Style.css';

function ToDoList() {
    const [tasks, setTasks] = useState([]);
    const inputRef = useRef(null);

    // Add Task Function //
    function addTask() {
        const taskText = inputRef.current.value;    // take input value 
        if (taskText) {
            setTasks( [...tasks, {text: taskText, completed: false} ] );    // add new task
            inputRef.current.value = '';
        }    
        else {
            alert("Please, type task!");
        }
    }
    // Mark Task Function
    function markTask(index) {
        setTasks(tasks.map( (task, i) =>
            i === index ? {text: task.text, completed: !task.completed} : task    // mark the task
        ));
    }
    // Edit Task Function //
    function editTask(index) {
        const newTask = prompt("Edit your task:", tasks[index].text);
        if (newTask !== '') {
            setTasks(tasks.map( (task, i) => 
                i === index ? { text: newTask } : task    // edit the task
            ));
        }
    }
    // Delete Task Function
    function deleteTask(index) {
        const updatedTasks = [...tasks];
        updatedTasks.splice(index, 1);    // remove the task
        setTasks(updatedTasks);
    }
    
    return (
        <div className='todolist'>
            <h1 className='todolist-h1'> TASKS </h1>
            <div className='task-list'>
                {tasks.map( (task, index) => (
                    <ToDoItem 
                        key={index} 
                        taskNo={index} task={task} 
                        onMark={ () => markTask(index) } 
                        onEdit={ () => editTask(index) } 
                        onDelete={ () => deleteTask(index) } 
                    />
                )) }
            </div>  
            <div className='input-div'>
                <input type="text" ref={inputRef} placeholder="Type Task..." />
                <button className='add-button' onClick={addTask}> 
                    Add <i className="fa-solid fa-plus"> </i>
                </button>
            </div>
        </div>
    );
}

export default ToDoList;








