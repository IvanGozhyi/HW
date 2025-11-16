import { createSlice, nanoid } from "@reduxjs/toolkit";

const toDoReducer = createSlice({
    name: "todos",
    initialState: [],
    reducers: {
        addTask: {
            reducer(state, action) {
                state.push(action.payload);
            },
            prepare(values) {
                return {
                    payload: {
                        id: nanoid(),
                        ...values
                    }
                };
            }
        },

        removeTask(state, action) {
            return state.filter(t => t.id !== action.payload);
        }
    },
});

export const { addTask, removeTask } = toDoReducer.actions;
export default toDoReducer.reducer;
