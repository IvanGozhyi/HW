import { useFormik } from "formik";
import { registerReducer } from "../../store/features/register";
import { useAppDispatch } from "../../store/hooks";

function RegisterPage() {
    const dispatch = useAppDispatch();

    const formik = useFormik({
        initialValues: {
            username: "",
            password: "",
            email: ""
        },
        onSubmit: values => {
            dispatch(
                registerReducer({
                    username: values.username,
                    password: values.password,
                    email: values.email
                })
            );
        },
    });

    return (
        <div>
            <h2>Register Page</h2>

            <form onSubmit={formik.handleSubmit}>
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={formik.values.username}
                    onChange={formik.handleChange}
                    required
                />

                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    required
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    required
                />

                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default RegisterPage;
