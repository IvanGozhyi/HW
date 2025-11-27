import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
  data: [],
};

/*
{
  id: string,
  title: string,
  description: string,
  priority: string,
  status: string,
  assignee: string,
  projectId: string,
}
*/

const TASKS_URL = 'http://localhost:3000/tasks';


export const getTasksAsync = createAsyncThunk(
    "tasks/getList",
    async (projectId = "") => {
        if (projectId) {
            const response = await axios.get(`${TASKS_URL}/${projectId}`);
            return response.data;
        }
        const response = await axios.get(TASKS_URL);
        return response.data;
    }
);

export const saveTaskAsync = createAsyncThunk(
    "tasks/save",
    async (task) => {
        const response = await axios.post(TASKS_URL, task);
        return response.data;
    }
);

export const deleteTaskAsync = createAsyncThunk(
    "tasks/delete",
    async (projectId) => {
        const response = await axios.delete(`${TASKS_URL}/${projectId}`);
        return response.data;
    }
);

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {

  },
  extraReducers: builder => {
      builder.addCase(getTasksAsync.fulfilled, (state, action) => {
      state.data = action.payload;
      })
      builder.addCase(saveTaskAsync.fulfilled, (state, action) => {
          state.loaded = true;
      })
      builder.addCase(deleteTaskAsync.fulfilled, (state, action) => {
          const id = action.payload.id;
          state.data = state.data.filter(task => task.id !== id);
      })
  }
})

export default tasksSlice.reducer