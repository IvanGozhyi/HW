import React, {useEffect, useRef} from 'react';
import {PRIORITIES} from "../../common/priorities.js";
import {useDispatch, useSelector} from "react-redux";
import {urls} from "../../common/menu.js";
import './TaskForm.css';
import {saveTaskAsync} from "../../store/features/tasks.js";
import {useNavigate, useParams} from "react-router";

function TaskForm() {
    const navigate = useNavigate();
    const {loaded: isTaskSaved} = useSelector(state => state.tasks);
    const titleRef = useRef();
    const descriptionRef = useRef();
    const priorityRef = useRef();
    const { projectId } = useParams();


    const dispatch = useDispatch();

    const handleSave = (e) => {
        e.preventDefault();
        const title = titleRef.current.value;
        const description = descriptionRef.current.value;
        const priority = priorityRef.current.value;

        dispatch(saveTaskAsync({
            title,
            description,
            priority,
            projectId}));
    }

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