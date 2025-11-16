import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./toDoReducer.js";

const savedTodos = JSON.parse(localStorage.getItem("todos")) ?? [];

export const store = configureStore({
    reducer: {
        todos: todoReducer,
    },
    preloadedState: { todos: savedTodos }   // ← початкове значення
});

store.subscribe(() => {
    localStorage.setItem("todos", JSON.stringify(store.getState().todos));
});
