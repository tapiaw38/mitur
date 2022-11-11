import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        isLoading: false,
        users: []
    },
    reducers: {
        startLoadingUsers: (state) => {
            state.isLoading = true;
        },
        setUsers: (state, { payload }) => {
            state.isLoading = false;
            state.users = payload;
        }
    }
});

export const { startLoadingUsers, setUsers } = userSlice.actions;
