import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const savedUser = localStorage.getItem("user");
const savedLogin = localStorage.getItem("isLoggedIn");


export interface User {
    username: string;
    role: string;
}

export interface RegisterPayload {
    username: string;
    password: string;
    email: string;
}

interface AuthState {
    isLoggedIn: boolean;
    user: User | null;
    loading: boolean;
    error: string | null;
}

const initialState: AuthState = {
    isLoggedIn: savedLogin ? JSON.parse(savedLogin) : false,
    user: savedUser ? JSON.parse(savedUser) : null,
    loading: false,
    error: null,
};

export const registerReducer = createAsyncThunk<User, RegisterPayload>(
    "register/registerUser",
    async ({ username, password, email }) => {
        console.log("register user", username, password, email);
        return {username, role: "user"};
    }
);

const registerSlice = createSlice({
    name: "register",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(registerReducer.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(
                registerReducer.fulfilled,
                (state, action: PayloadAction<User>) => {
                    state.loading = false;
                    state.isLoggedIn = true;
                    state.user = action.payload;
                    localStorage.setItem("isLoggedIn", JSON.stringify(true));
                    localStorage.setItem("user", JSON.stringify(action.payload));
                }
            )
            .addCase(registerReducer.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "Register failed";
            });
    }
});

export default registerSlice.reducer;