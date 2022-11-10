import axios from "axios"

const geocodingInstance = axios.create({
    baseURL: 'http://api.openweathermap.org/geo/1.0'
})

/**
 * Request city State name with lat long with reverse Geo coding api 
 * @param {Number} lat 
 * @param {Number} long 
 * @return String with city State name or empty if not found 
 */
export const getCityState = async (lat, long) => {
    geocodingInstance.get(`reverse?lat=${lat}&lon=${long}&limit=1&appid=${process.env.REACT_APP_APIKEY}`)
        .then(response => {
            const { state } = response.data[0]
            console.log("rverse g : ", state ? state : '')
            console.log("rverse g : ", state)
            return state ? state : ''
        })
        .catch(error => {
            console.log("Erreur reverse Geocoding : ", error )
        })
}