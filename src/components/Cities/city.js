import PropTypes from 'prop-types';
// import {ReactComponent as Orage} from 'assets/weather-icons/Orage.svg'
import { batch, useDispatch } from 'react-redux';
import { setCityName, setLocalisation } from 'reducers/localisation';


import './style.scss';

/**
 * Component to describe a city found in our Store with a cityName and an action to change 
 * the actual city in State, we also keep long/lat to handle the switch location
 * @param {props}  
 * @returns component city
 */
function City({ cityName, long, lat }) {
  const dispatch = useDispatch()

  const handleSwitchLocalisation = () => {

    batch(() => {
      dispatch(setLocalisation({ long, lat }))
      dispatch(setCityName({ cityName }))
    })

    dispatch({ type: "ajax/getData"})
  }

  return (
    <div className="city glass-effect" onClick={handleSwitchLocalisation}>
        <div className="city__container">
            <div className="city__container__infos">
                <span className="city-name">{cityName}</span>
                {/* <span className="degrees">22° C</span> */}
            </div>

            <div className="city__container__icons">
                {/* <Orage /> */}
                <i className="arrow arrow--right"></i>
            </div>
        </div>
    </div>
  );
}

City.propTypes = {
  cityName: PropTypes.string.isRequired,
  long: PropTypes.number.isRequired,
  lat: PropTypes.number.isRequired
};

export default City;
