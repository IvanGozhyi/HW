import { useParams, useNavigate } from "react-router";
import ProjectForm from "../../components/ProjectForm/ProjectForm.js";
import { urls } from "../../common/menu";
import {type Project, updateProjectAsync} from "../../store/features/projects.ts";
import {useAppDispatch, useAppSelector} from "../../store/hooks.ts";

export default function EditProjectPage() {
    const { projectId } = useParams();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const project = useAppSelector(state =>
        state.projects.data.find(p => p.id === projectId)
    );

    const handleEdit = (data: Omit<Project, "id">) => {
        dispatch(updateProjectAsync({ id: projectId!, ...data }));
        navigate(urls.PROJECTS_URL);

    };

    return (
        <div>
            <h1>Edit Project</h1>
            <ProjectForm
                initialData={project}
                onSubmit={handleEdit}
                buttonText="Update"
            />
        </div>
    );
}
