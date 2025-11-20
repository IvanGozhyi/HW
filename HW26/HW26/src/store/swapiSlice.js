import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

export const fetchSWAPI= createAsyncThunk(
    'swapi/fetchSWAPI',
    async (category) => {
        const response = await fetch(`https://swapi.dev/api/${category}/`);
        const data = await response.json();
        return {category ,data: data.results};
    });

const swapiSlice = createSlice({
    name: 'swapi',
    initialState: {
        activeCategory: null,
        data: {},
        status: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchSWAPI.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchSWAPI.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.activeCategory = action.payload.category;
                state.data[action.payload.category] = action.payload.data;
            })
            .addCase(fetchSWAPI.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    }
});

export default swapiSlice.reducer;