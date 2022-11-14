/**
 * Handle the localStorage to store the city if it doesn't already exist 
 * if the localStorage isn't set, we do it with the city we wan't to add
 * @param {lat, long, cityName} 
 */
export const addCityToLocalStorage = ({lat, long, cityName, cityState}) => {
    const retrieveLocalStorage = JSON.parse( window.localStorage.getItem('myweatherapp-city-list') )
    console.log('addcitytoLocalStorage')
    // if we have localstorage 
    if(retrieveLocalStorage) {
        const isCityNameFound = retrieveLocalStorage.find(element => element.cityName === cityName)
        console.log('in the retrieve localS : ', isCityNameFound)
        
        // If we find the same city Name we'll also gonna check if thos cities are in the same state (regions for france)
        if(isCityNameFound) {
            console.log("cityName found : ", isCityNameFound)
            console.log("lets compare : ", isCityNameFound.cityState, cityState)
            const isCityStateFound = isCityNameFound.cityState === cityState
            console.log("is city state found : ", isCityStateFound)
            // So if we have equal city Name and different city State in that cas only we add to the list 
            if(!isCityStateFound) {
                pushDataToLocal(lat, long, cityName, cityState, retrieveLocalStorage)
            }

        } else {
            console.log("no same city name we push")
            pushDataToLocal(lat, long, cityName, cityState, retrieveLocalStorage)
        }
        // if there no Localstorage we initiate it 
    } else {
        console.log('set item', lat, long, cityName, cityState)
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

    console.log("remove city from localSto : ", retrieveLocalStorage, updatedList)

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