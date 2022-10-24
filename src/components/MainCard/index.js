// import PropTypes from 'prop-types';

import './style.scss';
import {ReactComponent as Icon} from 'assets/weather-icons/Nuageux.svg'
import { useSelector } from 'react-redux';
import { renderSvgIconDependingWeather } from 'selectors/weather'

/**
 * Component to display Day data 
 * such as weather, temperature
 */
function MainCard() {
  const weather = useSelector(state => state.weather.data.weather[0])
  const temperatures = useSelector(state => state.weather.data.main)

  return (
    <div className="main-card glass-effect">
      <div className="main-card__top">
        <div className="main-card__top__picto">
          { renderSvgIconDependingWeather(weather) }
        </div>

        <div className="main-card__top__infos">
          <p className="temperature"> {Math.round(temperatures.temp)} ° C </p>
          <p className="weather"> {weather.description} </p>
        </div>
      </div>
      <div className="main-card__bot">
        <p className="feeling"> ressentis : </p>
        <p className="temperature-feeled"> {Math.round(temperatures.feels_like)} ° C </p>
      </div>
    </div>
  );
}

export default MainCard;
