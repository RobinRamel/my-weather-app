import { useSelector } from 'react-redux';
import { memo } from 'react';

import MainCard from 'components/MainCard';
import DayWeather from 'components/DayWeather';
import DayInfo from 'components/DayInfo';
import Cities from 'components/Cities';

import { ReactComponent as Minimales } from 'assets/icons/minimales.svg'
import { ReactComponent as Maximales } from 'assets/icons/maximales.svg'
import { ReactComponent as Coucher } from 'assets/weather-icons/Coucher.svg'
import { ReactComponent as Lever } from 'assets/weather-icons/Soleil.svg'
import { ReactComponent as Wind } from 'assets/icons/vent.svg'
import { ReactComponent as Pressure } from 'assets/icons/pression.svg'
import { ReactComponent as WindDirection } from 'assets/icons/direction.svg'
import { ReactComponent as Humidity } from 'assets/icons/humidite.svg'


import './style.scss';
/**
 * Display a grid with all components, consider this the Dasboard with all data
 * @returns Meteo component
 */
function Meteo() {
  const sunTime = useSelector(state => state.weather.data.sys)
  const temperatures = useSelector(state => state.weather.data.main)
  const windData = useSelector(state => state.weather.data.wind)

  return (
    // Grid Dashboard meteo
    <div className="meteo">
        <MainCard />

        {/* Wind speed, wind direction, pressure, humidity */}
        <DayWeather 
          icon={<Wind />} 
          caption="Vitesse du vent" 
          value={windData.speed} 
          unit="km/h"   
        />
        <DayWeather 
          icon={<Pressure />} 
          caption="Pression" 
          value={temperatures.pressure} 
          unit="Hpa" 
        />
        <DayWeather 
          icon={<WindDirection />} 
          caption="Direction du vent" 
          value={windData.deg} 
          unit="degrés" 
        />
        <DayWeather 
          icon={<Humidity />} 
          caption="Humidité" 
          value={temperatures.humidity} 
          unit="%" 
        />

        {/* Sunrise, sunset, min and max temperatures */}
        {/* First two : Sunrise / Sunset */}
        <DayInfo title='Levé' icon={<Lever />} value={sunTime.sunrise}/>
        <DayInfo title='Couché' icon={<Coucher />} value={sunTime.sunset}/>
        {/* Last two : Min temp / Max temp */}
        <DayInfo title='Minimales' icon={<Minimales />} value={temperatures.temp_min} degrees/>
        <DayInfo title='Maximales' icon={<Maximales />} value={temperatures.temp_max} degrees/>

        <Cities />
    </div>
  );
}

Meteo.propTypes = {

};

export default memo(Meteo);
