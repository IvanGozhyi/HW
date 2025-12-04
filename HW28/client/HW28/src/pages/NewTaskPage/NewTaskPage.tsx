import { useNavigate, useParams } from "react-router";
import TaskForm from "../../components/TaskForm/TaskForm";
import { useAppDispatch } from "../../store/hooks";
import { saveTaskAsync } from "../../store/features/tasks";
import type { TaskUpdatePayload } from "../../store/features/tasks";


export default function NewTaskPage() {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { projectId } = useParams();

    const handleCreate = (data: TaskUpdatePayload) => {
        dispatch(saveTaskAsync({
            ...data,
            projectId: projectId!,
        }));
        navigate(`/tasks/${projectId}`);
    };

    return (
        <div>
            <h1>Create Task</h1>
            <TaskForm
                initialData={null}
                onSubmit={handleCreate}
                buttonText="Create Task"
            />
        </div>
    );
}
