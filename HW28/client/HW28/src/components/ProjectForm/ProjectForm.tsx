import { useRef, useEffect } from "react";
import { PRIORITIES } from "../../common/priorities";
interface ProjectFormData {
    title: string;
    description: string;
    priority: string;
}

interface ProjectFormProps {
    initialData?: ProjectFormData | null;
    onSubmit: (data: ProjectFormData) => void;
    buttonText: string;
}
function ProjectForm({ initialData = null, onSubmit, buttonText } : ProjectFormProps) {
    const titleRef = useRef<HTMLInputElement>(null);
    const descriptionRef = useRef<HTMLTextAreaElement>(null);
    const priorityRef = useRef<HTMLSelectElement>(null);

    useEffect(() => {
        if(!initialData) return;

        if (titleRef.current) titleRef.current.value = initialData.title;
        if (descriptionRef.current) descriptionRef.current.value = initialData.description;
        if (priorityRef.current) priorityRef.current.value = initialData.priority;
    }, [initialData]);

    const handleSubmit = (e:React.FormEvent) => {
        e.preventDefault();


        onSubmit({
            title: titleRef.current?.value || '',
            description: descriptionRef.current?.value || '',
            priority: priorityRef.current?.value||'LOW',
        });
    };

    return (
        <form className="form-wrapper" onSubmit={handleSubmit}>
            <div>
                <input type="text" placeholder="Enter title" ref={titleRef} />
            </div>

            <div>
                <textarea placeholder="Enter description" ref={descriptionRef}></textarea>
            </div>

            <div>
                <select ref={priorityRef}>
                    {Object.entries(PRIORITIES).map(([key, value]) => (
                        <option key={key} value={key}>{value}</option>
                    ))}
                </select>
            </div>

            <div>
                <button type="submit">{buttonText}</button>
            </div>
        </form>
    );
}

export default ProjectForm;
