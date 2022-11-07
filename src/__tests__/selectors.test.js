import { timestampToHoursMinutes, renderSvgIconDependingWeather } from 'selectors/weather'
import {ReactComponent as Pluie} from 'assets/weather-icons/Pluie.svg'

test('it should return the good formatting hour:min', () => {
    expect(timestampToHoursMinutes(1661834187)).toBe('06:36')
})

test('it should return the good svg component', () => {
    expect(renderSvgIconDependingWeather({ main: 'Rain'})).toStrictEqual(<Pluie />)
})