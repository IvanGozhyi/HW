import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import TaskForm from "../../components/TaskForm/TaskForm";
import { updateTaskAsync, getTasksAsync } from "../../store/features/tasks";

export default function EditTaskPage() {
    const { projectId, taskId } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();


    useEffect(() => {
        dispatch(getTasksAsync(projectId));
    }, [projectId, dispatch]);


    const task = useSelector(state =>
        state.tasks.data.find(t => t.id === taskId)
    );


    if (!task) {
        return <h2>Task not found...</h2>;
    }


    const handleUpdate = (data) => {
        dispatch(updateTaskAsync({ id: taskId, projectId, ...data }));
        navigate(`/tasks/${projectId}`);
    };

    return (
        <div>
            <h1>Edit Task</h1>
            <TaskForm
                initialData={task}
                onSubmit={handleUpdate}
                buttonText="Update Task"
            />
        </div>
    );
}
