import PropTypes from 'prop-types';
import { ReactComponent as Sun } from 'assets/weather-icons/Soleil.svg';
import { timestampToHoursMinutes } from 'selectors/weather';

import './style.scss';

/**
 * Component that will discribe sunrise, sunset, max and min temperature
 * 
 */
function DayInfo({
  title,
  icon,
  value,
  degrees
}) {

  const iconClass = degrees ? "day-info__icon scaled" : "day-info__icon"

  return (
    <div className="day-info">
      <div className="day-info__title"> <span> { title } </span> </div>
      <div className={iconClass}> { icon } </div>
      <div className="day-info__value"> <span> 
        { degrees ? `${Math.round(value)} C°` : timestampToHoursMinutes(value) } 
      </span> </div>
    </div>
  );
}

DayInfo.propTypes = {
    title: PropTypes.string,
    icon: PropTypes.element,
    value: PropTypes.number,
    degrees: PropTypes.bool,
};

DayInfo.defaultProps = {
  degrees: false
}

export default DayInfo;
