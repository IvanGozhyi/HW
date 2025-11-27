import React from 'react';
import {useFormik} from "formik";
import {useDispatch} from "react-redux";
import {registerReducer} from "../../store/features/register.js";


function RegisterPage() {
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {},
        onSubmit: values => {
            const password = values.password;
            const username = values.username;
            dispatch(registerReducer({username, password}));
        },
    });
    return (
        <div>
            <h2>Register Page</h2>
            <form>
                <input type="text"
                       placeholder="Username"
                       value={formik.values.username}
                       onChange={formik.handleChange}
                       required />
                <input type="password"
                       placeholder="Password"
                       value={formik.values.password}
                       onChange={formik.handleChange}
                       required />
                <input type="email" placeholder="Email" required />
                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default RegisterPage;