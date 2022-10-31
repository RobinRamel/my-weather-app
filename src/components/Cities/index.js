import City from './city';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { nanoid } from '@reduxjs/toolkit'; 

import './style.scss';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCities } from 'reducers/cities';

function Cities() {
  const dispatch = useDispatch()
  const storeCityList = useSelector(state => state.cities.list)
  const actualCityName = useSelector(state => state.localisation.cityName)
  // as we add initial city, we need to exclude it from the render
  const filteredCityList = storeCityList.filter(city => city.cityName !== actualCityName)
  
  console.log("render Cities", filteredCityList)

  useEffect(() => {
    const citiesLocalSto = localStorage.getItem('myweatherapp-city-list')
    console.log("local storage retrive", citiesLocalSto)

    if (citiesLocalSto) {
      dispatch(setCities(citiesLocalSto))
    }
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


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
