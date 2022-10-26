import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    list: [],
}

const cities = createSlice({
    name: 'cities',
    initialState,
    reducers: {
        addCity: (state, action) => {
            state.list.push({
                lat: action.payload.lat,
                long: action.payload.long,
                cityName: action.payload.cityName
            })
        },
        setCities: (state, action) => {
           state.list = action.payload 
        }
    }
})

const { actions, reducer } = cities

export const { addCity, setCities } = actions

export default reducer

