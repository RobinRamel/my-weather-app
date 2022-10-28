// import PropTypes from 'prop-types';
import {ReactComponent as Loupe} from 'assets/icons/loupe.svg'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { searchingOn } from 'reducers/cities'
import axios from 'axios'

import './style.scss'
import CitiesFound from 'components/CitiesFound'

const geocoding = axios.create({
    baseURL: 'http://api.openweathermap.org/geo/1.0'
})


function Searchbar() {
  const dispatch = useDispatch()
  const [inputValue, setInputValue] = useState("")
  const [foundCities, setFoundCities] = useState([])
  const isSearching = useSelector(state => state.cities.isSearching)

  const handleFocus = () => {
    dispatch(searchingOn())
  }

  const handleChange = (ev) => {
    setInputValue(ev.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    geocoding.get(`direct?q=${inputValue}&limit=10&appid=8515322bfc58d345e1e14f44a6c2332e`)
      .then(response => {
          console.log(response.data)
          setFoundCities(response.data)
      })
      .catch(error => console.log("erreur geocoding : ", error))
  }


  return (
    <div className="header__searchbar">
        <form onSubmit={handleSubmit}>
          <input 
            onFocus={handleFocus} 
            onChange={handleChange}
            type="text" 
            placeholder="Chercher d'autres villes..." 
          />
          <Loupe className="loupe"/>
        </form>
        {
          foundCities.length > 0 && isSearching && <CitiesFound cityList={foundCities} />
        }
    </div>
  );
}

// Searchbar.propTypes = {

// };

export default Searchbar;
