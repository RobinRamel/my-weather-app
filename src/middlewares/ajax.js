import axios from 'axios'
import { setData } from 'reducers/weather'

const weatherInstance = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5'
})


const ajax = (store) => (next) => (action) => {
    if(action.type === 'weather/getData') {
        console.log("middle ajax", store.getState())
        const state = store.getState()
        const long = state.localisation.coord.long
        const lat = state.localisation.coord.lat
        
        weatherInstance.get(`weather?lat=${lat}&lon=${long}&appid=8515322bfc58d345e1e14f44a6c2332e&units=metric&lang=fr`)
        .then(response => {
            console.log("retour requete ok : ", response.data)
            store.dispatch(setData(response.data))
        })
        .catch(error => {
            console.log('erreur : ', error)
        })

    }

    return next(action)
}

export default ajax;
