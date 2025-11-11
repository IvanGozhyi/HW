import React from 'react';
import {useFormik} from "formik";
import {ToDoItemSchema} from "../common/validationSchema.js";

function Form() {
const formik = useFormik({
    initialValues: {
        title: '',
        description: '',
        difficulty: '1'
    },
    validationSchema: ToDoItemSchema,
    onSubmit: async (values, { resetForm, setSubmitting }) => {
        try {
            const resp = await fetch('http://localhost:3000/tasks', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values)
            });
            if (!resp.ok) throw new Error(`Server error: ${resp.status}`);
            const result = await resp.json();
            console.log('Created task', result);
            resetForm();
        } catch (err) {
            console.error('Failed to submit form', err);
            alert('Ошибка при создании задачи: ' + err.message);
        } finally {
            setSubmitting(false);
        }
    }
});
    return (
        <div>
            <form onSubmit = {formik.handleSubmit}>
                <div>
                    <input className="input"
                           type="text"
                           name="title"
                           placeholder="Title"
                           value={formik.values.title}
                           onChange={formik.handleChange} /><br/>
                    <input className="input"
                           type="text"
                           name="description"
                           placeholder="Description"
                           value={formik.values.description}
                           onChange={formik.handleChange} /><br/>
                    <input className="input"
                           type="number"
                           min="1" max="5"
                           name="difficulty"
                           value={formik.values.difficulty}
                           onChange={formik.handleChange} /><br/>
                    <button className="submit" type="submit" disabled={formik.isSubmitting}>Submit</button>
                </div>
            </form>
        </div>
    );
}

export default Form;