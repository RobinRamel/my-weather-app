// import PropTypes from 'prop-types';
import {ReactComponent as Loupe} from 'assets/icons/loupe.svg'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { searchingOn } from 'reducers/cities'
import axios from 'axios'

import './style.scss'
import CitiesFound from 'components/CitiesFound'

const geocoding = axios.create({
    baseURL: 'https://api.openweathermap.org/geo/1.0'
})

/**
 * Handle form and input to trigger Api request to geolocation API 
 * which return a list of potential cities corresponding to the input value 
 * @returns searchbar component
 */
function Searchbar() {
  const dispatch = useDispatch()
  const [inputValue, setInputValue] = useState("")
  const [foundCities, setFoundCities] = useState([])
  const [noResultFound, setNoResultFound] = useState(false)
  const isSearching = useSelector(state => state.cities.isSearching)

  const handleFocus = () => {
    dispatch(searchingOn())
  }

  const handleChange = (ev) => {
    if(noResultFound) { setNoResultFound(false) }
    setInputValue(ev.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setNoResultFound(false)
    
    geocoding.get(`direct?q=${inputValue}&limit=10&appid=${process.env.REACT_APP_APIKEY}`)
      .then(response => {
        console.log('cities found list : ', response.data)
        const data = response.data
        // length 0 on this array we get from API means he founds nothing
        data.length === 0 ? setNoResultFound(true) : setFoundCities(response.data)
        
      })
      .catch(error => console.log("erreur geocoding : ", error))
  }


  return (
    <div className="header__searchbar">
        <form onSubmit={handleSubmit}>
          <input 
            className={ noResultFound ? 'onError': '' }
            onFocus={handleFocus} 
            onChange={handleChange}
            type="text" 
            placeholder="Chercher d'autres villes..." 
          />
          <Loupe className="loupe"/>
        </form>
        {
          isSearching && <CitiesFound cityList={foundCities} noResultFound={noResultFound} />
        }
    </div>
  );
}

// Searchbar.propTypes = {

// };

export default Searchbar;
