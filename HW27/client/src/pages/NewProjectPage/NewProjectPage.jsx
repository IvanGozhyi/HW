import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveProjectAsync } from "../../store/features/projects";
import { useNavigate } from "react-router";
import { urls } from "../../common/menu";
import ProjectForm from "../../components/ProjectForm/ProjectForm";

export default function NewProjectPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { loaded: isProjectSaved } = useSelector(state => state.projects);

    const handleCreate = (data) => {
        dispatch(saveProjectAsync(data));
    };

    useEffect(() => {
        if (isProjectSaved) {
            navigate(urls.PROJECTS_URL);
        }
    }, [isProjectSaved, navigate]);

    return (
        <div>
            <h1>Add new Project</h1>
            <ProjectForm
                onSubmit={handleCreate}
                buttonText="Save"
            />
        </div>
    );
}
