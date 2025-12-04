import { useNavigate } from 'react-router';
import ProjectCard from '../../components/ProjectCard/ProjectCard.js';
import './ProjectsPage.css';
import { useEffect } from 'react';
import { getProjectsAsync } from '../../store/features/projects';
import { urls } from '../../common/menu';
import {useAppDispatch, useAppSelector} from "../../store/hooks.ts";

export default function ProjectsPage() {
  const { data: projects } = useAppSelector(state => state.projects);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProjectsAsync());
  }, [dispatch]);



  const handleClick = (projectId: string) => {
    navigate(`/tasks/${projectId}`);
  }

  return (
    <div className='ProjectsPage'>
      <button type='button' onClick={() => navigate(urls.NEW_PROJECT_URL)}>Add Project</button>
      <div className='Projects'>
        {projects.length === 0 && <span>No projects available</span>}
        {projects.map(project => (
          <ProjectCard key={project.id} {...project} onClick={handleClick} />
        ))}

      </div>
    </div>
  )
}