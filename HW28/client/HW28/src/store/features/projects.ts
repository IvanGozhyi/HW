import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export interface Project {
    id: string;
    title: string;
    description: string;
    priority: string;
}

export interface ProjectCreatePayload {
    title: string;
    description: string;
    priority: string;
}

interface ProjectsState {
    data: Project[];
    loaded: boolean;
}

const initialState: ProjectsState = {
    data: [],
    loaded: false,
};

const PROJECTS_URL = "http://localhost:3000/projects";


export const getProjectsAsync = createAsyncThunk<Project[]>(
    "projects/getList",
    async () => {
        const result = await axios.get(PROJECTS_URL);
        return result.data;
    }
);


export const saveProjectAsync = createAsyncThunk<Project, Omit<Project, "id">>(
    "projects/save",
    async (project) => {
        const result = await axios.post(PROJECTS_URL, project);
        return result.data;
    }
);


export const deleteProjectAsync = createAsyncThunk<Project, string>(
    "projects/delete",
    async (projectId) => {
        const response = await axios.delete(`${PROJECTS_URL}/${projectId}`);
        return response.data;
    }
);


export const updateProjectAsync = createAsyncThunk<Project, Project>(
    "projects/update",
    async (project) => {
        const result = await axios.put(`${PROJECTS_URL}/${project.id}`, project);
        return result.data;
    }
);

const projectsSlice = createSlice({
    name: "projects",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(
            getProjectsAsync.fulfilled,
            (state, action: PayloadAction<Project[]>) => {
                state.data = action.payload;
            }
        );

        builder.addCase(
            saveProjectAsync.fulfilled,
            (state, action: PayloadAction<Project>) => {
                state.data.push(action.payload);
                state.loaded = true;
            }
        );

        builder.addCase(
            deleteProjectAsync.fulfilled,
            (state, action: PayloadAction<Project>) => {
                const deletedId = action.payload.id;
                state.data = state.data.filter((p) => p.id !== deletedId);
            }
        );

        builder.addCase(
            updateProjectAsync.fulfilled,
            (state, action: PayloadAction<Project>) => {
                const updated = action.payload;
                const index = state.data.findIndex((p) => p.id === updated.id);
                if (index !== -1) state.data[index] = updated;
                state.loaded = true;
            }
        );
    },
});

export default projectsSlice.reducer;
