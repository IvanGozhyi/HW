import React from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { addTask } from "../store/toDoReducer.js";
import { ToDoItemSchema } from "../common/validationSchema.js";

function Form() {
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            title: "",
            description: "",
            difficulty: "1",
        },
        validationSchema: ToDoItemSchema,

        onSubmit: (values, helpers) => {
            dispatch(addTask(values));
            helpers.resetForm();
        },
    });

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <input
                        className="input"
                        type="text"
                        name="title"
                        placeholder="Title"
                        value={formik.values.title}
                        onChange={formik.handleChange}
                    />
                    <br />

                    <input
                        className="input"
                        type="text"
                        name="description"
                        placeholder="Description"
                        value={formik.values.description}
                        onChange={formik.handleChange}
                    />
                    <br />

                    <input
                        className="input"
                        type="number"
                        min="1"
                        max="5"
                        name="difficulty"
                        value={formik.values.difficulty}
                        onChange={formik.handleChange}
                    />
                    <br />

                    <button className="submit" type="submit" disabled={formik.isSubmitting}>
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Form;
