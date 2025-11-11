import React, { useEffect, useState } from "react";

function List() {
    const [tasks, setTasks] = useState([]);

    const loadTasks = async () => {
        try {
            const resp = await fetch("http://localhost:3000/tasks");
            const data = await resp.json();
            setTasks(data);
        } catch (err) {
            console.error("Failed to load tasks", err);
        }
    };

    const deleteTask = async (id) => {
        if (!window.confirm("Delete this task?")) return;
        try {
            await fetch(`http://localhost:3000/tasks/${id}`, { method: "DELETE" });
            setTasks(tasks.filter(t => t.id !== id));
        } catch (err) {
            console.error("Failed to delete task", err);
        }
    };

    useEffect(() => {
        loadTasks();
    }, []);

    return (
        <div>
            <h2> Task List</h2>
            {tasks.length === 0 ? (
                <p>No tasks yet</p>
            ) : (
                <ul>
                    {tasks.map(task => (
                        <li key={task.id}>
                            <b>{task.title}</b> — {task.description} ( {task.difficulty})
                            <button className="deleteBtn" onClick={() => deleteTask(task.id)}>Х</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default List;
