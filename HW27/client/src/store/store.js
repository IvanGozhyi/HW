import { configureStore } from '@reduxjs/toolkit';
import projectsReducer from './features/projects';
import tasksReducer from './features/tasks';
import registerReducer from "./features/register.js";
import loginReducer from "./features/login.js";

export const store = configureStore({
  reducer: {
      projects: projectsReducer,
      tasks: tasksReducer,
      login: loginReducer,
      register: registerReducer,
  },
});