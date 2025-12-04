import PriorityLabel from '../PriorityLabel/PriorityLabel.js';
import './TaskCard.css';
import {deleteTaskAsync} from "../../store/features/tasks.ts";
import {useNavigate} from "react-router";
import {useAppDispatch} from "../../store/hooks.ts";

interface TasksCardProps {
    projectId: string;
    id: string;
    title: string;
    description: string;
    priority: string;
}
export default function TaskCard({projectId, id, title, description, priority } : TasksCardProps) {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleDelete = () => {
        dispatch(deleteTaskAsync( id ));
    }
    const handleEdit = () => {
        navigate(`/tasks/${projectId}/edit/${id}`);
    }

  return (
    <div className='card'>
      <h3>{title}</h3>
      <PriorityLabel priority={priority} />
      <p>
        {description.slice(0, 100)}
      </p>
        <button type="button" onClick={handleDelete}>X</button>
        <button type="button" onClick={handleEdit}>Edit Task</button>
    </div>
  )
}