import PropTypes from 'prop-types';
// import {ReactComponent as Orage} from 'assets/weather-icons/Orage.svg'
import { useDispatch } from 'react-redux';
import { setLocalisation } from 'reducers/localisation';
import { ReactComponent as DeleteBtn } from 'assets/icons/add.svg'
import { removeCityFromLocalStorage } from 'selectors/localStorage';


import './style.scss';
import { removeCity } from 'reducers/cities';

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

  const handleDeleteCity = () => {
    removeCityFromLocalStorage({cityName, cityState})
    dispatch(removeCity({cityName, cityState}))
  }

  return (
    <div className="city">
        <div className="city__container glass-effect">
            <div className="city__container__infos" onClick={handleSwitchLocalisation}>
                <span className="city-name">{cityName}, <span>{cityState}</span></span>
            </div>
        </div>

        <div className="city__container__icons">
            <button className="delete-city" onClick={handleDeleteCity}> 
              <DeleteBtn />
            </button>
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
