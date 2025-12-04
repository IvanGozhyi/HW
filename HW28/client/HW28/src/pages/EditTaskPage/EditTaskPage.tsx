import { useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import TaskForm from "../../components/TaskForm/TaskForm.js";
import { updateTaskAsync, getTasksAsync } from "../../store/features/tasks";
import { useAppDispatch, useAppSelector } from "../../store/hooks.ts";
import type { TaskUpdatePayload } from "../../store/features/tasks";

export default function EditTaskPage() {
    const { projectId, taskId } = useParams();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (projectId) {
            dispatch(getTasksAsync(projectId));
        }
    }, [projectId, dispatch]);

    const task = useAppSelector(state =>
        state.tasks.data.find(t => t.id === taskId)
    );

    if (!task) {
        return <h2>Task not found...</h2>;
    }

    const handleUpdate = (data: TaskUpdatePayload) => {
        dispatch(updateTaskAsync({
            ...task,
            ...data
        }));
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
