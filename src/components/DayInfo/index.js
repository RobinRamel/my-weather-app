// import PropTypes from 'prop-types';
import { ReactComponent as Sun } from 'assets/weather-icons/Soleil.svg';

import './style.scss';

/**
 * Component that will discribe sunrise, sunset, max and min temperature
 * 
 */
function DayInfo() {
  return (
    <div className="day-info">
      <div className="day-info__title"> <span>Levé</span> </div>
      <div className="day-info__icon"> <Sun /> </div>
      <div className="day-info__value"> <span> 6:32 </span> </div>
    </div>
  );
}

DayInfo.propTypes = {

};

export default DayInfo;
