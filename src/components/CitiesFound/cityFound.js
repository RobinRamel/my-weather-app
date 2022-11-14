import PropTypes from 'prop-types';

import { ReactComponent as Add } from 'assets/icons/add.svg'
import { ReactComponent as Pin } from 'assets/icons/pin.svg'

import './style.scss';
import { batch, useDispatch, useSelector } from 'react-redux';
import { addCity, searchingOff } from 'reducers/cities';
import { setLocalisation } from 'reducers/localisation';
import { addCityToLocalStorage } from 'selectors/localStorage'

/**
 * Describe a city found in Api request plus 2 actions 
 * we can change the actualLocalisation and also add to the cityList 
 * which trigger the store to LocalStorage also 
 * @param {props} 
 * @returns component cityFound
 */
function CityFound({ cityName, lat, long, cityState }) {
    const dispatch = useDispatch()
    const stateLocalisation = useSelector(state => state.localisation)
    
    const handleAddCity = () => {

        if(stateLocalisation.coord.long === 0 && stateLocalisation.coord.lat === 0) {
            handleChangeLocalisation() 
        } else {
            dispatch(addCity({ lat, long, cityName, cityState }))
            addCityToLocalStorage({ lat, long, cityName, cityState })
        }
    }

    const handleChangeLocalisation = () => {
        batch(() => {
            dispatch(searchingOff())
            dispatch(setLocalisation({ long, lat }))
        })

        dispatch({ type: "ajax/getData"})
    }


  return (
    <div className="cities_found__city">
        
        <div className="cities_found__city__name">
            <p>
                { cityName }, &nbsp;
            </p>
            <p className="state">
                { cityState }
            </p>
        </div>

        <div className="cities_found__city__btns">
            <button onClick={handleChangeLocalisation} className="btn change_localisation">
                <Pin />
            </button>
            <button onClick={handleAddCity} className="btn add_city">
                <Add />
            </button>
        </div>
        
    </div>
  );
}

CityFound.propTypes = {
    cityName: PropTypes.string.isRequired,
    lat: PropTypes.number.isRequired,
    long: PropTypes.number.isRequired,
    cityState: PropTypes.string.isRequired
};

export default CityFound;
