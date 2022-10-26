import { configureStore } from '@reduxjs/toolkit'
import ajax from 'middlewares/ajax'
import localisation from 'middlewares/localisation'
import weatherReducer from 'reducers/weather'
import localisationReducer from 'reducers/localisation'
import citiesReducer from 'reducers/cities'

const store = configureStore({
    reducer: {
        weather: weatherReducer,
        localisation: localisationReducer,
        cities: citiesReducer
    },
    middleware:  [localisation, ajax]
});

export default store