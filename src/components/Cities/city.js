// import PropTypes from 'prop-types';
import {ReactComponent as Orage} from 'assets/weather-icons/Orage.svg'

import './style.scss';

function City() {
  return (
    <div className="city glass-effect">
        <div className="city__container">
            <div className="city__container__infos">
                <span className="city-name">Montpellier</span>
                <span className="degrees">22° C</span>
            </div>

            <div className="city__container__icons">
                <Orage />
                <i className="arrow arrow--right"></i>
            </div>
        </div>
    </div>
  );
}

City.propTypes = {

};

export default City;
