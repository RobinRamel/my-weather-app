/**
 * Handle the localStorage to store the city if it doesn't already exist 
 * if the localStorage isn't set, we do it with the city we wan't to add
 * @param {lat, long, cityName} 
 */
export const addCityToLocalStorage = ({lat, long, cityName, cityState}) => {
    const retrieveLocalStorage = JSON.parse( window.localStorage.getItem('myweatherapp-city-list') )
    // if we have localstorage 
    if(retrieveLocalStorage) {
        const isCityNameFound = retrieveLocalStorage.find(element => element.cityName === cityName)
        
        // If we find the same city Name we'll also gonna check if thos cities are in the same state (regions for france)
        if(isCityNameFound) {
            const isCityStateFound = isCityNameFound.cityState === cityState
            // So if we have equal city Name and different city State in that cas only we add to the list 
            if(!isCityStateFound) {
                pushDataToLocal(lat, long, cityName, cityState, retrieveLocalStorage)
            }

        } else {
            pushDataToLocal(lat, long, cityName, cityState, retrieveLocalStorage)
        }
        // if there no Localstorage we initiate it 
    } else {
        window.localStorage.setItem(
            'myweatherapp-city-list',
            JSON.stringify(
                [{lat, long, cityName, cityState}]
            ) 
        )
    }

}

export const removeCityFromLocalStorage = ({ cityName, cityState }) => {
    const retrieveLocalStorage = JSON.parse( window.localStorage.getItem('myweatherapp-city-list') )
    const updatedList = retrieveLocalStorage.filter(city => (
        city.cityName !== cityName
        && city.cityState !== cityState
    ))

    window.localStorage.setItem(
        'myweatherapp-city-list',
        JSON.stringify(
            updatedList
        ) 
    )
}

// Will only be used by Function above to avoid rewriting the storing 
const pushDataToLocal = (lat, long, cityName, cityState, retrieveLocalStorage) => {
    window.localStorage.setItem(
        'myweatherapp-city-list',
        JSON.stringify(
            [...retrieveLocalStorage, {lat, long, cityName, cityState}]
        ) 
    )
}