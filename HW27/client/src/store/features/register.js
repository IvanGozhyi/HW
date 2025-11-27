import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

const savedUser = JSON.parse(localStorage.getItem("user"));
const savedLogin = JSON.parse(localStorage.getItem("isLoggedIn"));

export const registerReducer = createAsyncThunk(
    "register/registerUser",
    async ({ username, password, email }) => {
        return {username, role: "user"};
    }
);
const registerSlice = createSlice({
    name: "auth",
    initialState: {
        isLoggedIn: savedLogin || false,
        user: savedUser || null,
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(registerReducer.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(registerReducer.fulfilled, (state, action) => {
                state.loading = false;
                state.isLoggedIn = true;
                state.user = action.payload;
                localStorage.setItem("isLoggedIn", JSON.stringify(true));
                localStorage.setItem("user", JSON.stringify(action.payload));
            })
            .addCase(registerReducer.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    }
});
export default registerSlice.reducer;