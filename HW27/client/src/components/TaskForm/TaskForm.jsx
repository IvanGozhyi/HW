import React, {useEffect, useRef} from 'react';
import {PRIORITIES} from "../../common/priorities.js";
import {useDispatch, useSelector} from "react-redux";
import {urls} from "../../common/menu.js";
import './TaskForm.css';
import {saveTaskAsync} from "../../store/features/tasks.js";
import {useNavigate, useParams} from "react-router";

function TaskForm({ initialData = null }) {
    const navigate = useNavigate();
    const {loaded: isTaskSaved} = useSelector(state => state.tasks);
    const titleRef = useRef();
    const descriptionRef = useRef();
    const priorityRef = useRef();
    const { projectId } = useParams();


    const dispatch = useDispatch();

    useEffect(() => {
        if (!initialData) return;

        if (initialData.title) titleRef.current.value = initialData.title;
        if (initialData.description) descriptionRef.current.value = initialData.description;
        if (initialData.priority) priorityRef.current.value = initialData.priority;

    }, [initialData]);

    const handleSave = (e) => {
        e.preventDefault();

        const title = titleRef.current.value.trim();
        const description = descriptionRef.current.value.trim();
        const priority = priorityRef.current.value;

        if (!title) {
            alert("Title cannot be empty!");
            return;
        }

        dispatch(saveTaskAsync({
            projectId,
            title,
            description,
            priority,
            id: initialData?.id
        }));
    };

    useEffect(() => {
        if (isTaskSaved) {
            navigate(urls.PROJECTS_URL);
        }
    }, [navigate, isTaskSaved])



        return (

        <div>
          <form className="form-wrapper" onSubmit={handleSave}>
              <input placeholder="Enter the name of the task" ref={titleRef}/>
              <input placeholder="Enter the description of the task" ref={descriptionRef}/>
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