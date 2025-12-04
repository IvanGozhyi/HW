import './AuthForm.css';
import { useFormik } from 'formik';
import {loginReducer} from "../../store/features/login.ts";
import {useAppDispatch} from "../../store/hooks.ts";


export default function AuthForm() {
    const dispatch = useAppDispatch();
    const formik = useFormik({
    initialValues: {
        username: '',
        password: '',
    },
    onSubmit: values => {
        console.log('Form data', values.username, values.password);
        const username = values.username;
        const password = values.password;
        dispatch(loginReducer({username, password}));
    },
  });

  return (
    <div>
        <form className="form-wrapper" onSubmit = {formik.handleSubmit}>
            <h2>Login</h2>
            <input
                type="text"
                placeholder="Username"
                name="username"
                value={formik.values.username}
                onChange={formik.handleChange}
                required />
            <input type="password"
                   placeholder="Password"
                   name="password"
                   value={formik.values.password}
                   onChange={formik.handleChange}
                   required />
            <button type="submit">Submit</button>
            <h2 className="forRegister">If you don`t have account you must <a href="/register">register</a></h2>
        </form>
    </div>
  )
}