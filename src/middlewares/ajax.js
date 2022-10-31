import axios from 'axios'
import { setCityName } from 'reducers/localisation'
import { setData } from 'reducers/weather'
import { addCity } from 'reducers/cities'
import { batch } from 'react-redux'


const weatherInstance = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5'
})

const geocoding = axios.create({
    baseURL: 'http://api.openweathermap.org/geo/1.0'
})


const ajax = (store) => (next) => (action) => {

    if(action.type === 'ajax/getData') {
        console.log("ajax")
        const state = store.getState()
        const long = state.localisation.coord.long
        const lat = state.localisation.coord.lat
        const cityList = state.cities.list
        
        weatherInstance.get(`weather?lat=${lat}&lon=${long}&appid=8515322bfc58d345e1e14f44a6c2332e&units=metric&lang=fr`)
        .then(response => {
            console.log("retour requete ok : ", response.data)
            const data = response.data
            const isCityAlreadyInList = cityList.find(element => element.cityName === data.name)

            batch(() => {
                store.dispatch(setData(data))
                store.dispatch(setCityName({ cityName: data.name}))

                // If the city already exist in our list of cities we don't add it
                if(!isCityAlreadyInList) {

                    store.dispatch(addCity({
                        lat: data.coord.lat,
                        long: data.coord.lon,
                        cityName: data.name
                    }))
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
