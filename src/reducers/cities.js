import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    list: [],
    isSearching: false
}

const cities = createSlice({
    name: 'cities',
    initialState,
    reducers: {
        addCity: (state, action) => {
            state.list.push({
                lat: action.payload.lat,
                long: action.payload.long,
                cityName: action.payload.cityName,
                cityState: action.payload.cityState
            })
        },
        setCities: (state, action) => {
           state.list = action.payload 
        },
        searchingOn: state => {
            state.isSearching = true
        },
        searchingOff: state => {
            state.isSearching = false
        }
    }
})

const { actions, reducer } = cities

export const { 
    addCity, 
    setCities, 
    searchingOn, 
    searchingOff 

} = actions

export default reducer

