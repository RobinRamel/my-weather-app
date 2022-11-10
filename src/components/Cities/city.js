import PropTypes from 'prop-types';
// import {ReactComponent as Orage} from 'assets/weather-icons/Orage.svg'
import { useDispatch } from 'react-redux';
import { setLocalisation } from 'reducers/localisation';


import './style.scss';

/**
 * Component to describe a city found in our Store with a cityName and an action to change 
 * the actual city in State, we also keep long/lat to handle the switch location
 * @param {props}  
 * @returns component city
 */
function City({ cityName, long, lat, cityState }) {
  const dispatch = useDispatch()

  const handleSwitchLocalisation = () => {
    dispatch(setLocalisation({ long, lat }))
    dispatch({ type: "ajax/getData"})
  }

  return (
    <div className="city glass-effect" onClick={handleSwitchLocalisation}>
        <div className="city__container">
            <div className="city__container__infos">
                <span className="city-name">{cityName}, <span>{cityState}</span></span>
            </div>

            <div className="city__container__icons">
                <i className="arrow arrow--right"></i>
            </div>
        </div>
    </div>
  );
}

City.propTypes = {
  cityName: PropTypes.string.isRequired,
  long: PropTypes.number.isRequired,
  lat: PropTypes.number.isRequired,
  cityState: PropTypes.string.isRequired
};

export default City;
