import axios from 'axios'
import { setCityInfos } from 'reducers/localisation'
import { setData } from 'reducers/weather'
import { addCity } from 'reducers/cities'
import { batch } from 'react-redux'
import { addCityToLocalStorage } from 'selectors/localStorage'
import { getCityState } from 'selectors/geocoding'


const weatherInstance = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5'
})

const geocodingInstance = axios.create({
    baseURL: 'https://api.openweathermap.org/geo/1.0'
})


/**
 *  Handling axios and requesting the good endpoints depending of the localisation in the Store
 * @param {*} store 
 * @returns 
 */
const ajax = (store) => (next) => (action) => {

    if(action.type === 'ajax/getData') {
        const state = store.getState()
        const { long, lat } = state.localisation.coord
        const cityList = state.cities.list

        // grouping 2 request with axios 
        axios.all([
            weatherInstance.get(`weather?lat=${lat}&lon=${long}&appid=${process.env.REACT_APP_APIKEY}&units=metric&lang=fr`),
            geocodingInstance.get(`reverse?lat=${lat}&lon=${long}&limit=1&appid=${process.env.REACT_APP_APIKEY}`)
        ])
        .then(axios.spread((weatherResponse, geocodingResponse) => {
            const weatherData = weatherResponse.data
            const geoData = geocodingResponse.data[0]
            // filter cities by name and could be empty or fullfilled
            const isCityAlreadyInList = cityList.find(element => (element.cityName === weatherData.name))
            const dataToStore = {
                lat: weatherData.coord.lat,
                long: weatherData.coord.lon,
                cityName: geoData.name,
                cityState: geoData.state
            }

            batch(() => {
                store.dispatch(setData(weatherData))
                store.dispatch(setCityInfos({ cityName: geoData.name, cityState: geoData.state }))

                // If the city don't exist in our list of cities we add it
                if(!isCityAlreadyInList) {
                    addCityToLocalStorage(dataToStore)
                    store.dispatch(addCity(dataToStore))
                }
            })
        }))
        .catch(error => {
            console.log("promise all geocoding and weather something went wrong : ", error)
        })
    }

    return next(action)
}

export default ajax;
