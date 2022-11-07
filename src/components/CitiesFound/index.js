import PropTypes from 'prop-types';
import CityFound from './cityFound';
import { nanoid } from '@reduxjs/toolkit'; 

import './style.scss';

/**
 * Render a list of City depending what's found with API request which we pass to props
 * @param {props}  
 * @returns component citiesFound
 */
function CitiesFound({ cityList }) {
  return (
    <div className="cities_found">
        { 
            cityList.map((city, index) => (
                <CityFound 
                    key={nanoid()}
                    cityName={city.name}
                    cityState={city.state}
                    lat={city.lat}
                    long={city.lon}
                />  
            ))
        }
    </div>
  );
}

CitiesFound.propTypes = {
    cityList: PropTypes.array.isRequired
};

export default CitiesFound;
