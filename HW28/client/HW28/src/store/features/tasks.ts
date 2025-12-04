import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export interface Task {
    id: string;
    title: string;
    description: string;
    priority: string;
    status?: string;
    assignee?: string;
    projectId: string;
}

export interface CreateTaskPayload {
    title: string;
    description: string;
    priority: string;
    projectId: string;
}

export interface TaskUpdatePayload {
    title: string;
    description: string;
    priority: string;
}

interface TasksState {
    data: Task[];
    loaded: boolean;
}

const initialState: TasksState = {
    data: [],
    loaded: false,
};

const TASKS_URL = "http://localhost:3000/tasks";

export const getTasksAsync = createAsyncThunk<Task[], string | undefined>(
    "tasks/getList",
    async (projectId) => {
        if (projectId) {
            const res = await axios.get(`${TASKS_URL}/${projectId}`);
            return res.data;
        }
        const res = await axios.get(TASKS_URL);
        return res.data;
    }
);

export const saveTaskAsync = createAsyncThunk<Task, CreateTaskPayload>(
    "tasks/save",
    async (taskData) => {
        const res = await axios.post(TASKS_URL, taskData);
        return res.data;
    }
);

export const deleteTaskAsync = createAsyncThunk<Task, string>(
    "tasks/delete",
    async (taskId) => {
        const res = await axios.delete(`${TASKS_URL}/${taskId}`);
        return res.data;
    }
);

export const updateTaskAsync = createAsyncThunk<Task, Task>(
    "tasks/update",
    async (task) => {
        const res = await axios.put(`${TASKS_URL}/${task.id}`, task);
        return res.data;
    }
);

const tasksSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getTasksAsync.fulfilled, (state, action) => {
            state.data = action.payload;
        });

        builder.addCase(saveTaskAsync.fulfilled, (state, action) => {
            state.data.push(action.payload);
            state.loaded = true;
        });

        builder.addCase(deleteTaskAsync.fulfilled, (state, action) => {
            state.data = state.data.filter((t) => t.id !== action.payload.id);
        });

        builder.addCase(updateTaskAsync.fulfilled, (state, action) => {
            const updated = action.payload;
            const idx = state.data.findIndex((t) => t.id === updated.id);

            if (idx !== -1) {
                state.data[idx] = updated;
            }

            state.loaded = true;
        });
    },
});

export default tasksSlice.reducer;
