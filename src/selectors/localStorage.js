
export const addCityToLocalStorage = ({lat, long, cityName}) => {
    const retrieveLocalStorage = JSON.parse( window.localStorage.getItem('myweatherapp-city-list') )

    // if we have localstorage 
    if(retrieveLocalStorage) {
        const isCityAlreadyIn = retrieveLocalStorage.find(
            element => element.cityName === cityName 
            )
             
        // we check if the city dont already exist 
        if(!isCityAlreadyIn) {
            window.localStorage.setItem(
                'myweatherapp-city-list',
                JSON.stringify(
                    [...retrieveLocalStorage, {lat, long, cityName}]
                ) 
            )
        }
        // if there no Localstorage we initiate it 
    } else {
        window.localStorage.setItem(
                'myweatherapp-city-list',
                JSON.stringify(
                    [{lat, long, cityName}]
                ) 
            )
    }

}