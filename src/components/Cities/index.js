import City from './city';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { nanoid } from '@reduxjs/toolkit'; 

import './style.scss';
import { useSelector } from 'react-redux';

/**
 * Display a list of city depending the cities in our Store
 * @returns Component Cities
 */
function Cities() {
  const storeCityList = useSelector(state => state.cities.list)
  const stateLocalisation = useSelector(state => state.localisation)
  // as we add initial city, we need to exclude it from the render
  const filteredCityList = storeCityList.filter(city => city.cityName !== stateLocalisation.cityName || (city.cityName === stateLocalisation.cityName && city.cityState !== stateLocalisation.cityState))

  return (
    <div className="cities">
      <div className="cities__header">
        Les villes que vous suivez
      </div>
      <div className="cities__container">

      {/* SimpleBar is here to handle if there is too many items it will display a nice scrollbar */}
      <SimpleBar style={{ height: '100%', overflowX: 'hidden' }}>

        {/* we excluded the inital city so if the array lenght is less than 0 we dont render it */}
        {
          filteredCityList.length > 0
            ? filteredCityList.map(city => <City key={nanoid()} {...city}/>)
            : <p className="empty">Ajoutez des villes supplémentaires...</p>
        }

      </SimpleBar>
      </div>
    </div>
  );
}

export default Cities;
