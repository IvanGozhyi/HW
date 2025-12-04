import { useEffect } from "react";
import { type ProjectCreatePayload, saveProjectAsync} from "../../store/features/projects";
import { useNavigate } from "react-router";
import { urls } from "../../common/menu";
import ProjectForm from "../../components/ProjectForm/ProjectForm.js";
import {useAppDispatch, useAppSelector} from "../../store/hooks.ts";

export default function NewProjectPage() {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { loaded: isProjectSaved } = useAppSelector(state => state.projects);

    const handleCreate = (data: ProjectCreatePayload) => {
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
