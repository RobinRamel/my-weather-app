// import PropTypes from 'prop-types';
import {ReactComponent as Wind} from 'assets/icons/vent.svg';

import './style.scss';

/**
 * Component to show infos such as wind speed, pressure, wind direction, humidity
 * 
 */
function DayWeather() {
  return (
    <div className="day-weather">
      <div className="day-weather__left">
        <Wind />
      </div>
      <div className="day-weather__right">
        <div className="card-title">
          <span> Vitesse du vent </span>
        </div>
        <div className="card-value">
          <span> 12 km/h </span>
        </div>
      </div>
    </div>
  );
}

DayWeather.propTypes = {

};

export default DayWeather;
