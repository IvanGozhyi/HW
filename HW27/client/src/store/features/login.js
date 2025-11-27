import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

const savedUser = JSON.parse(localStorage.getItem("user"));
export const savedLogin = JSON.parse(localStorage.getItem("isLoggedIn"));

export const loginReducer = createAsyncThunk(
    "login/loginReducer",
    async ({ username, password }) => {
        if (username === "admin" && password === "password") {
            return { username: "admin", role: "admin" };
        } else {
            throw new Error("Wrong username or password");
        }
    }
);
const loginSlice = createSlice({
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
            .addCase(loginReducer.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loginReducer.fulfilled, (state, action) => {
                state.loading = false;
                state.isLoggedIn = true;
                state.user = action.payload;
                localStorage.setItem("isLoggedIn", JSON.stringify(true));
                localStorage.setItem("user", JSON.stringify(action.payload));
            })
            .addCase(loginReducer.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    }
});
export default loginSlice.reducer;