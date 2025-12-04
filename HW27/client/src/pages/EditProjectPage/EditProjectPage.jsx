import { useParams, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import ProjectForm from "../../components/ProjectForm/ProjectForm";
import { urls } from "../../common/menu";
import {updateProjectAsync} from "../../store/features/projects.js";

export default function EditProjectPage() {
    const { projectId } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const project = useSelector(state =>
        state.projects.data.find(p => p.id === projectId)
    );

    const handleEdit = (data) => {
        dispatch(updateProjectAsync({ id: projectId, ...data }));
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
