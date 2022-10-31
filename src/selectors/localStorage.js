
export const addCityToLocalStorage = ({lat, long, cityName}) => {
    const retrieveLocalStorage = JSON.parse( window.localStorage.getItem('myweatherapp-city-list') )
    console.log("retrieve localsto : ", retrieveLocalStorage)
    console.log("data in func : ", lat, long, cityName)
    // if we have localstorage 
    if(retrieveLocalStorage) {
        const isCityAlreadyIn = retrieveLocalStorage.find(
            element => element.cityName === cityName 
            )
            console.log(isCityAlreadyIn)
             
        // we check if the city dont already exist 
        if(!isCityAlreadyIn) {
            console.log("city isnt in it ")
            // add
            console.log('test of mutating array for local : ', [...retrieveLocalStorage, {lat, long, cityName}])
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