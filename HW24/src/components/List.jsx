import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTask } from "../store/toDoReducer.js";

function List() {
    const tasks = useSelector(state => state.todos);
    const dispatch = useDispatch();

    return (
        <div>
            <h2>Task List</h2>

            {tasks.length === 0 ? (
                <p>No tasks yet</p>
            ) : (
                <ul>
                    {tasks.map(task => (
                        <li key={task.id}>
                            <b>{task.title}</b> — {task.description} ({task.difficulty})

                            <button
                                className="deleteBtn"
                                onClick={() => dispatch(removeTask(task.id))}
                            >
                                Х
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default List;
