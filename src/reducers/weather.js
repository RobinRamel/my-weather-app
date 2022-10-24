import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: {},
    isLoading: true,
}

const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        setData: (state, action) => {
            state.data = action.payload
            state.isLoading = false
        },
    }
})

const { actions, reducer } = weatherSlice

export const { setData } = actions

export default reducer;