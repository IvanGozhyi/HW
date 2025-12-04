import { Route, Routes } from 'react-router';
import './Content.css';
import { menuItems } from '../../common/menu.ts';
import {useAppSelector} from "../../store/hooks.ts";

export default function Content() {

    const isLoggedIn = useAppSelector(state => state.login.isLoggedIn);

    const publicRoutes = menuItems.filter(
        item => item.path === '/login' || item.path === '/register'
    );

    const privateRoutes = menuItems.filter(
        item => item.path !== '/login' && item.path !== '/register'
    );
    return (
        <Routes>
            {publicRoutes.map(({ path, Component }) => (
                <Route key={path} path={path} element={<Component />} />
            ))}

            {isLoggedIn ? (
                privateRoutes.map(({ path, Component }) => (
                    <Route key={path} path={path} element={<Component />} />
                ))
            ) : (
                <Route path="*" element={<h2>You are not logged in</h2>} />
            )}
        </Routes>
    );
}
