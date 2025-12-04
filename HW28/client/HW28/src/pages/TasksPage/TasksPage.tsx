import { useParams } from 'react-router';
import './TasksPage.css';
import TaskCard from '../../components/TaskCard/TaskCard.js';
import { useEffect } from 'react';
import { getTasksAsync } from '../../store/features/tasks';
import {useAppDispatch, useAppSelector} from "../../store/hooks.ts";

export default function TasksPage() {
  const { data: tasks } = useAppSelector(state => state.tasks);
  const { projectId } = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getTasksAsync(projectId));
  }, [dispatch, projectId]);



  return (
    <div className='TasksPage'>
      {tasks.length === 0 && <span>No tasks available</span>}
      {tasks.map(task => (
        <TaskCard key={task.id} {...task} />
      ))}
    </div>
  )
}