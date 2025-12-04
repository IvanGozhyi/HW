import { useRef, useEffect } from "react";
import { PRIORITIES } from "../../common/priorities";

function ProjectForm({ initialData = {}, onSubmit, buttonText }) {
    const titleRef = useRef();
    const descriptionRef = useRef();
    const priorityRef = useRef();

    useEffect(() => {
        if (initialData.title) titleRef.current.value = initialData.title;
        if (initialData.description) descriptionRef.current.value = initialData.description;
        if (initialData.priority) priorityRef.current.value = initialData.priority;
    }, [initialData]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            title: titleRef.current.value,
            description: descriptionRef.current.value,
            priority: priorityRef.current.value
        };

        onSubmit(data);
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
