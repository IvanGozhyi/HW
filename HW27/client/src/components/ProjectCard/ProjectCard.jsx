import PriorityLabel from '../PriorityLabel/PriorityLabel';
import './ProjectCard.css';
import {useDispatch} from "react-redux";
import {deleteProjectAsync} from "../../store/features/projects.js";
import {useNavigate} from "react-router";

export default function ProjectCard({id, title, description, priority, onClick }) {
    const navigate = useNavigate();
  const dispatch = useDispatch();
    const handleClick = () => {
    onClick && onClick(id);
  }


    const handleAddTask = (e, ProjectId) => {
        e.stopPropagation();
        navigate(`http://localhost:5173/tasks/${ProjectId}/newtask`);
    }

    const deleteProject = (e) => {
        e.stopPropagation();
        dispatch(deleteProjectAsync(id));
    }


  return (
    <div className='card' onClick={handleClick}>
      <h3>{title}</h3>
      <PriorityLabel priority={priority} />
      <p>
        {description}
      </p>
        <button onClick={deleteProject}>Delete Project</button>
        <button type="button" onClick={(e) => handleAddTask(e, id)}>Add Task</button>

    </div>
  )
}