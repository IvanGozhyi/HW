import PriorityLabel from '../PriorityLabel/PriorityLabel';
import './TaskCard.css';
import {deleteTaskAsync} from "../../store/features/tasks.js";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router";

export default function TaskCard({projectId, id, title, description, priority }) {
    const dispatch = useDispatch();
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