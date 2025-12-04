import PriorityLabel from '../PriorityLabel/PriorityLabel.js';
import './ProjectCard.css';
import { useAppDispatch } from "../../store/hooks";
import {deleteProjectAsync} from "../../store/features/projects.ts";
import {useNavigate} from "react-router";
import React from "react";


interface ProjectCardProps {
    id: string;
    title: string;
    description: string;
    priority: string;
    onClick?: (id: string) => void;
}
export default function ProjectCard({id, title, description, priority, onClick,}: ProjectCardProps) {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const handleClick = () => {
    onClick && onClick(id);
    }

    const handleAddTask = (e: React.MouseEvent, ProjectId: string) => {
        e.stopPropagation();
        navigate(`http://localhost:5173/tasks/${ProjectId}/newtask`);
    }

    const deleteProject = (e:React.MouseEvent) => {
        e.stopPropagation();
        dispatch(deleteProjectAsync(id));
    }

    const handleEdit = (e:React.MouseEvent) => {
        e.stopPropagation();
        navigate(`http://localhost:5173/projects/${id}/edit`);
    }


  return (
    <div className='card' onClick={handleClick}>
      <h3>{title}</h3>
      <PriorityLabel priority={priority} />
      <p>
        {description}
      </p>
        <button onClick={deleteProject}>Delete Project</button>
        <button onClick={handleEdit}>Edit Project</button>
        <button type="button" onClick={(e) => handleAddTask(e, id)}>Add Task</button>

    </div>
  )
}