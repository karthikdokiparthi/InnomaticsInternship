import React, { useState } from "react";

function ToDoList() {
    const [task, setTask] = useState(["complete break fast", "go to office", "do your work"]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function addTask() {
        if (newTask.trim() !== "") {
            setTask(t => [...t, newTask])
            setNewTask = "";
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

    return (<>

        <input type="text" placeholder="enter task" value={newTask} onChange={handleInputChange} />
        <button onClick={addTask}>Add</button>
        <ol>
            {task.map((element, index) =>
                <li key={index}>{element}
                    <button onClick={() => removeTask(index)}>Delete</button>
                    <button onClick={() => moveUp(index)}>up</button>
                    <button onClick={() => moveDown(index)}>down</button>
                </li>
            )}
        </ol>
    </>)
}

export default ToDoList;