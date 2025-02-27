import React, { useState } from "react";
import { FaUpLong, FaDownLong } from "react-icons/fa6";
import { FaRegSave, FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import './App.css';

function ToDoList() {
    const [task, setTask] = useState([]);
    const [newTask, setNewTask] = useState("");
    const [editIndex, setEditIndex] = useState(null);
    const [editText, setEditText] = useState("");
    const [completedTasks, setCompletedTasks] = useState(new Set());

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

    function editTask(index) {
        setEditIndex(index);
        setEditText(task[index]);
    }

    function handleEditChange(event) {
        setEditText(event.target.value);
    }

    function saveEdit(index) {
        const updatedTasks = [...task];
        updatedTasks[index] = editText;
        setTask(updatedTasks);
        setEditIndex(null);
    }

    function toggleComplete(index) {
        setCompletedTasks(prev => {
            const newSet = new Set(prev);
            if (newSet.has(index)) {
                newSet.delete(index);
            } else {
                newSet.add(index);
            }
            return newSet;
        });
    }

    return (
        <div className="home-container">
            <div className="header-container">
                <h1 className="header-text">Task Manager</h1>
                <input type="text" placeholder="Add a New Task" value={newTask} onChange={handleInputChange} className="text-container" />
                <button onClick={addTask} className="btn-add">Add</button>
            </div>
            <div className="section-container">
                <ol>
                    {task.map((element, index) => (
                        <li key={index} className={`task-item ${completedTasks.has(index) ? "completed" : ""}`}>
                            <input type="checkbox" className="btn-check" onChange={() => toggleComplete(index)} checked={completedTasks.has(index)} />

                            {editIndex === index ? (
                                <>
                                    <input type="text" value={editText} onChange={handleEditChange} className="edit-input" />
                                    <button onClick={() => saveEdit(index)} className="btn-save"><FaRegSave /></button>
                                </>
                            ) : (
                                <>
                                    <span className="task-content">{element}</span>
                                    {!completedTasks.has(index) && (
                                        <div className="btn-container">
                                            <button onClick={() => editTask(index)} className="btn-edit"><FaRegEdit /></button>
                                            <button onClick={() => removeTask(index)} className="btn-delete"><RiDeleteBin6Line /></button>
                                            <button onClick={() => moveUp(index)} className="btn-arrow"><FaUpLong /></button>
                                            <button onClick={() => moveDown(index)} className="btn-arrow"><FaDownLong /></button>
                                        </div>
                                    )}
                                </>
                            )}
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    );
}

export default ToDoList;