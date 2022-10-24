import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userDenied: false,
    coord: {
        long: 0,
        lat: 0,
    },
    cityName: ''
}

const localisation = createSlice({
    name: 'localisation',
    initialState,
    reducers: {
        setLocalisation: (state, action) => {
            state.coord.long = action.payload.long
            state.coord.lat = action.payload.lat
        },
        toggleUserDenied: (state) => {
            state.userDenied = !state.userDenied
        }
    }
})

const { actions, reducer } = localisation

export const { setLocalisation, toggleUserDenied } = actions

export default reducer;