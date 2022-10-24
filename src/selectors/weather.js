import {ReactComponent as Orage} from 'assets/weather-icons/Orage.svg'
import {ReactComponent as Pluie} from 'assets/weather-icons/Pluie.svg'
import {ReactComponent as Neige} from 'assets/weather-icons/Neige.svg'
import {ReactComponent as Brouillard} from 'assets/weather-icons/brouillard.svg'
import {ReactComponent as Soleil} from 'assets/weather-icons/Soleil.svg'
import {ReactComponent as Nuageux} from 'assets/weather-icons/Nuageux.svg'
import {ReactComponent as Eclaircie} from 'assets/weather-icons/Eclaircies.svg'
import {ReactComponent as Gouttes} from 'assets/weather-icons/Gouttes.svg'



/**
 * Convert a Unix Timestamp to a formatted String to use in render
 * @param {string} timestamp
 * @returns a formatted String eg: "18:35" with hours minutes
 */
export const timestampToHoursMinutes = (timestamp) => {

    const date = new Date(timestamp * 1000)
    const hoursMinutesSecond = date.toLocaleString().split(' ')[1]
    const hoursMinutesArray = hoursMinutesSecond.split(':')
    
    return `${hoursMinutesArray[0]}:${hoursMinutesArray[1]}`
}

/**
 * We must pass the weather[0] Object we have from the API 
 * we use this data to determine whats the best Svg to use to represent the weather 
 * @param {Object} weatherObject 
 * @returns an Icon Component (svg) depending the weather 
 */
export const renderSvgIconDependingWeather = weatherObject => {

    let iconToReturn;

    switch(weatherObject.main) {
        case 'Thunderstorm':
            iconToReturn = <Orage />
            break;
        case 'Drizzle':
            iconToReturn = <Gouttes />
            break;
        case 'Rain': 
            iconToReturn = <Pluie />
            break;
        case 'Snow': 
            iconToReturn = <Neige />
            break;
        case 'Clear':
            iconToReturn = <Soleil />
            break;
        case 'Clouds': 
            // In case we have just few clouds we display cloudy sun
            weatherObject.id === 801 ? 
                iconToReturn = <Eclaircie /> 
                :
                iconToReturn = <Nuageux />
                break; 
        case 'Mist':
        case 'Smoke':
        case 'Haze':
        case 'Dust':
        case 'Fog':
        case 'Sand':
        case 'Ash':
        case 'Squall':
        case 'Tornado':
            iconToReturn = <Brouillard />
            break;
        default:
           iconToReturn = <Soleil />
            break; 
    }

    return iconToReturn
}