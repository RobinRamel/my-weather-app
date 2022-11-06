import axios from 'axios'
import { setCityName } from 'reducers/localisation'
import { setData } from 'reducers/weather'
import { addCity } from 'reducers/cities'
import { batch } from 'react-redux'
import { addCityToLocalStorage } from 'selectors/localStorage'


const weatherInstance = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5'
})


const ajax = (store) => (next) => (action) => {

    if(action.type === 'ajax/getData') {
        const state = store.getState()
        const long = state.localisation.coord.long
        const lat = state.localisation.coord.lat
        const cityList = state.cities.list
        
        weatherInstance.get(`weather?lat=${lat}&lon=${long}&appid=${process.env.REACT_APP_APIKEY}&units=metric&lang=fr`)
        .then(response => {
            const data = response.data
            const isCityAlreadyInList = cityList.find(element => element.cityName === data.name)
            const dataToStore = {
                lat: data.coord.lat,
                long: data.coord.lon,
                cityName: data.name
            }

            batch(() => {
                store.dispatch(setData(data))
                store.dispatch(setCityName({ cityName: data.name}))

                // If the city already exist in our list of cities we don't add it
                if(!isCityAlreadyInList) {
                    addCityToLocalStorage(dataToStore)
                    store.dispatch(addCity(dataToStore))
                }
            })
        })
        .catch(error => {
            console.log('erreur : ', error)
        })

    }

    return next(action)
}

export default ajax;
