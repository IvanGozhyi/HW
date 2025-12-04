import React, {useEffect, useRef} from 'react';
import {PRIORITIES} from "../../common/priorities.ts";
import {urls} from "../../common/menu.ts";
import './TaskForm.css';
import {saveTaskAsync, updateTaskAsync} from "../../store/features/tasks.ts";
import {useNavigate, useParams} from "react-router";
import {useAppDispatch, useAppSelector} from "../../store/hooks.ts";
import type { Task, TaskUpdatePayload } from "../../store/features/tasks";

interface TaskFormProps {
    initialData?: Task | null;
    onSubmit: (data: TaskUpdatePayload) => void;
    buttonText: string;
}

function TaskForm({ initialData = null } : TaskFormProps) {
    const navigate = useNavigate();
    const isTaskSaved = useAppSelector(state => state.tasks.loaded);
    const titleRef = useRef<HTMLInputElement>(null);
    const descriptionRef = useRef<HTMLInputElement>(null);
    const priorityRef = useRef<HTMLSelectElement>(null);
    const { projectId } = useParams();


    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!initialData) return;

        if (titleRef.current) titleRef.current.value = initialData.title || '';
        if (descriptionRef.current) descriptionRef.current.value = initialData.description;
        if (priorityRef.current) priorityRef.current.value = initialData.priority;

    }, [initialData]);

    const handleSave = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const title = titleRef.current?.value.trim();
        const description = descriptionRef.current?.value.trim();
        const priority = priorityRef.current?.value;

        if (!title) {
            alert("Title cannot be empty!");
            return;
        }

        if (initialData) {
            dispatch(
                updateTaskAsync({
                    ...initialData,
                    title,
                    description: description!,
                    priority: priority!,
                })
            );
        } else {
            dispatch(
                saveTaskAsync({
                    title: title!,
                    description: description!,
                    priority: priority!,
                    projectId: projectId!,
                })
            );
        }
    };

    useEffect(() => {
        if (isTaskSaved) {
            navigate(urls.PROJECTS_URL);
        }
    }, [navigate, isTaskSaved])



        return (

        <div>
          <form className="form-wrapper" onSubmit={handleSave}>
              <input placeholder="Enter the name of the task" ref={titleRef} required={true} />
              <input placeholder="Enter the description of the task" ref={descriptionRef} required={true}/>
                <select name="priority" ref={priorityRef}>
                    {Object.entries(PRIORITIES).map(([key, value]) => (
                        <option key={key} value={key}>{value}</option>
                    ))}
                </select>

                <button type="submit">Create Task</button>
            </form>
        </div>
        );
}

export default TaskForm;