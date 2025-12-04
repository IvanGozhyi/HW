import MainPage from "../pages/MainPage/MainPage";
import NewProjectPage from "../pages/NewProjectPage/NewProjectPage";
import ProjectsPage from "../pages/ProjectsPage/ProjectsPage";
import TasksPage from "../pages/TasksPage/TasksPage";
import LoginPage from "../pages/LoginPage/LoginPage.jsx";
import RegisterPage from "../pages/RegisterPage/RegisterPage.jsx";
import NewTaskPage from "../pages/NewTaskPage/NewTaskPage.jsx";
import {Component} from "react";
import EditProjectPage from "../pages/EditProjectPage/EditProjectPage.jsx";
import EditTaskPage from "../pages/EditTaskPage/EditTaskPage.jsx";

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