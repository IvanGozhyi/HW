import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";


export interface User {
    username: string;
    role: string;
}



interface LoginState {
    isLoggedIn: boolean;
    user: User | null;
    loading: boolean;
    error: string | null;
}


const savedUser = localStorage.getItem("user");
const savedLogin = localStorage.getItem("isLoggedIn");


const initialState: LoginState = {
    isLoggedIn: savedLogin ? JSON.parse(savedLogin) : false,
    user: savedUser ? JSON.parse(savedUser) : null,
    loading: false,
    error: null,
};


export const loginReducer = createAsyncThunk<User, { username: string; password: string }>(
    "login/loginUser",
    async ({ username, password }) => {
        if (username === "admin" && password === "password") {
            return { username: "admin", role: "admin" };
        }
        throw new Error("Wrong username or password");
    }
);



const loginSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loginReducer.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(
                loginReducer.fulfilled,
                (state, action: PayloadAction<User>) => {
                    state.loading = false;
                    state.isLoggedIn = true;
                    state.user = action.payload;


                    localStorage.setItem("isLoggedIn", JSON.stringify(true));
                    localStorage.setItem("user", JSON.stringify(action.payload));
                }
            )
            .addCase(loginReducer.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "Login failed";
            });
    },
});

export default loginSlice.reducer;
