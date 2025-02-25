import React, { useState } from "react";
import { FaUpLong, FaDownLong } from "react-icons/fa6";
import { RiDeleteBin6Line } from "react-icons/ri";
import './App.css';

function ToDoList() {
    const [task, setTask] = useState(["complete break fast", "go to office", "do your work"]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function addTask() {
        if (newTask.trim() !== "") {
            setTask(t => [...t, newTask])
            setNewTask("");
        }
    }

    function removeTask(index) {
        const remove = task.filter((_, i) => i !== index);
        setTask(remove);
    }

    function moveUp(index) {
        if (index > 0) {
            const up = [...task];
            [up[index], up[index - 1]] = [up[index - 1], up[index]];
            setTask(up)
        }
    }

    function moveDown(index) {
        if (index < task.length - 1) {
            const down = [...task];
            [down[index], down[index + 1]] = [down[index + 1], down[index]];
            setTask(down);
        }
    }

    return (
        <div className="home-container">
            <div className="header-container">
                <h1 className="header-text">Task Manager</h1>
                <input type="text" placeholder="Enter task" value={newTask} onChange={handleInputChange} className="text-container" />
                <button onClick={addTask} className="btn-add">Add</button>
            </div>
            <div className="section-container">
                <ol>
                    {task.map((element, index) => (
                        <li key={index} className="task-item">
                            <span className="task-content">{element}</span>
                            <div className="btn-container">
                                <button onClick={() => moveUp(index)} className="btn-arrow"><FaUpLong /></button>
                                <button onClick={() => removeTask(index)} className="btn-delete"><RiDeleteBin6Line /></button>
                                <button onClick={() => moveDown(index)} className="btn-arrow"><FaDownLong /></button>
                            </div>
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    );
}

export default ToDoList;