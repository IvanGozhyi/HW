import MainPage from "../pages/MainPage/MainPage.js";
import NewProjectPage from "../pages/NewProjectPage/NewProjectPage.js";
import ProjectsPage from "../pages/ProjectsPage/ProjectsPage.js";
import TasksPage from "../pages/TasksPage/TasksPage.js";
import LoginPage from "../pages/LoginPage/LoginPage.tsx";
import RegisterPage from "../pages/RegisterPage/RegisterPage.tsx";
import NewTaskPage from "../pages/NewTaskPage/NewTaskPage.tsx";
import EditProjectPage from "../pages/EditProjectPage/EditProjectPage.tsx";
import EditTaskPage from "../pages/EditTaskPage/EditTaskPage.tsx";

export const urls = {
  NEW_PROJECT_URL: '/projects/new',
  PROJECTS_URL: '/projects',
};

export const menuItems = [
  {
    path: '/',
    title: 'Main',
    Component: MainPage,
  },
    {
        path: urls.NEW_PROJECT_URL,
        hideInMenu: true,
        Component: NewProjectPage,
    },
    {
        path: urls.PROJECTS_URL,
        title: 'Projects',
        Component: ProjectsPage

    },
  {
    path: urls.NEW_PROJECT_URL,
    hideInMenu: true,
    Component: NewProjectPage,
  },
  {
    path: '/tasks',
    title: 'Tasks',
    Component: TasksPage
  },
  {
    path: '/tasks/:projectId',
    hideInMenu: true,
    Component: TasksPage
  },
    {
        path: '/login',
        hideInMenu: true,
        title: 'Login',
        Component: LoginPage
    },
    {
        path: '/register',
        hideInMenu: true,
        title: 'Register',
        Component: RegisterPage
    },
    {
        path: '/tasks/:projectId/newtask',
        hideInMenu:  true,
        Component: NewTaskPage
    },
    {
        path: '/tasks/:projectId/edit/:taskId',
        hideInMenu:  true,
        Component: EditTaskPage
    },
    {
        path: '/projects/:projectId/edit',
        hideInMenu:  true,
        Component: EditProjectPage
    }



];