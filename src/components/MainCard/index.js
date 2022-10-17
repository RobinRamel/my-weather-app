// import PropTypes from 'prop-types';

import './style.scss';
import {ReactComponent as Icon} from 'assets/weather-icons/Nuageux.svg'

/**
 * Component to display Day data 
 * such as weather, temperature
 */
function MainCard() {
  return (
    <div className="main-card glass-effect">
      <div className="main-card__top">
        <div className="main-card__top__picto">
          <Icon />
        </div>

        <div className="main-card__top__infos">
          <p className="temperature"> 17° C </p>
          <p className="weather"> Nuageux </p>
        </div>
      </div>
      <div className="main-card__bot">
        <p className="feeling"> ressentis : </p>
        <p className="temperature-feeled"> 23° C </p>
      </div>
    </div>
  );
}

MainCard.propTypes = {

};

export default MainCard;
