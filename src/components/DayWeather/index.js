import PropTypes from 'prop-types';
import {ReactComponent as Wind} from 'assets/icons/vent.svg';

import './style.scss';

/**
 * Component to show infos such as wind speed, pressure, wind direction, humidity
 * 
 */
function DayWeather({
  icon,
  caption,
  value,
  unit
}) {
  return (
    <div className="day-weather">
      <div className="day-weather__left">
        { icon }
      </div>
      <div className="day-weather__right">
        <div className="card-title">
          <span> {caption} </span>
        </div>
        <div className="card-value">
          <span> {Math.round(value)} {unit} </span>
        </div>
      </div>
    </div>
  );
}

DayWeather.propTypes = {
  icon: PropTypes.element,
  caption: PropTypes.string,
  value: PropTypes.number,
  unit: PropTypes.string
};

export default DayWeather;
