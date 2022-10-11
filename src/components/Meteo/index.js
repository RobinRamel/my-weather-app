// import PropTypes from 'prop-types';
import MainCard from 'components/MainCard';
import DayWeather from 'components/DayWeather';
import DayInfo from 'components/DayInfo';
import Cities from 'components/Cities';

import './style.scss';

function Meteo() {
  return (
    // Grid Dashboard meteo
    <div className="meteo">
        <MainCard />
        {/* Wind speed, wind direction, pressure, humidity */}
        <DayWeather />
        <DayWeather />
        <DayWeather />
        <DayWeather />
        {/* Sunrise, sunset, win and max temperatures */}
        <DayInfo />
        <DayInfo />
        <DayInfo />
        <DayInfo />

        <Cities />
    </div>
  );
}

Meteo.propTypes = {

};

export default Meteo;
