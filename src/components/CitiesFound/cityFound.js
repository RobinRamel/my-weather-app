import PropTypes from 'prop-types';

import { ReactComponent as Add } from 'assets/icons/add.svg'
import { ReactComponent as Pin } from 'assets/icons/pin.svg'

import './style.scss';
import { batch, useDispatch } from 'react-redux';
import { addCity, searchingOff } from 'reducers/cities';
import { setCityName, setLocalisation } from 'reducers/localisation';

function CityFound({ cityName, lat, long, cityState }) {
    const dispatch = useDispatch()
    
    const handleAddCity = () => {
        console.log("city add in cityfound")
        dispatch(addCity({
            lat,
            long,
            cityName
        }))
    }

    const handleChangeLocalisation = () => {
        console.log("change loc", cityName, lat, long)

        batch(() => {
            dispatch(searchingOff())
            dispatch(setLocalisation({ long, lat }))
            dispatch(setCityName({ cityName }))
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
