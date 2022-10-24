import { configureStore } from '@reduxjs/toolkit'
import ajax from 'middlewares/ajax'
import weatherReducer from 'reducers/weather'

const store = configureStore({
    reducer: {
        weather: weatherReducer,
    },
    middleware:  [ajax]
});

export default store