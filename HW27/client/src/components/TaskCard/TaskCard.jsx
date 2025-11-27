import PriorityLabel from '../PriorityLabel/PriorityLabel';
import './TaskCard.css';
import {deleteTaskAsync} from "../../store/features/tasks.js";
import {useDispatch} from "react-redux";

export default function TaskCard({id, title, description, priority }) {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteTaskAsync( id ));
    }

  return (
    <div className='card'>
      <h3>{title}</h3>
      <PriorityLabel priority={priority} />
      <p>
        {description.slice(0, 100)}
      </p>
        <button type="button" onClick={handleDelete}>X</button>
    </div>
  )
}