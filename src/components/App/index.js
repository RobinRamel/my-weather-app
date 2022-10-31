// import {ReactComponent as Soleil} from 'assets/weather-icons/Soleil.svg'
import Header from 'components/Header';
import Loading from 'components/Loading';
import Map from 'components/Map';
import Meteo from 'components/Meteo';
import { useEffect } from 'react';
import { batch, useDispatch, useSelector } from 'react-redux';
import { searchingOff, setCities } from 'reducers/cities';

import './style.scss';

function App() {
  const dispatch = useDispatch()
  const loading = useSelector(state => state.weather.isLoading)
  const isSearching = useSelector(state => state.cities.isSearching)
  

  useEffect(() => {
    const citiesLocalSto = JSON.parse( window.localStorage.getItem('myweatherapp-city-list') )
    console.log("app initial render : ", citiesLocalSto)

    batch(() => {
      if (citiesLocalSto) {
        console.log("dispatch set cities")
        dispatch(setCities(citiesLocalSto))
      }
      
      dispatch({ type: 'localisation/getLocalisation' })
    })

  }, [])

  const handleClickOut = () => {
    dispatch(searchingOff())
  }

  if(loading) {
    return (
      <div className="app">
        <Header />
        <Loading/>
      </div>
    )
  }

  return (
    <div className="app">
      <div 
        className={ isSearching ? "cover-for-searching on" : "cover-for-searching" }
        onClick={handleClickOut}
      ></div>
      <Header />
      <div className="dashboard">
        <div className="dashboard__meteo">
          {/* Dashboard nav */}
          <nav className="dashboard__meteo__nav">
            <span className="dashboard__meteo__nav__link active">
              Aujourd'hui
            </span>
            {/* For a next feature */}
            {/* <span className="dashboard__meteo__nav__link">
              prévision 5 jours 
            </span> */}
          </nav>

          {/* Dashboard content */}
          <div className="dashboard__meteo__content">
            <Meteo />
          </div>


        </div>
        <div className="dashboard__map">
          <div className="dashboard__map__head">
              <span className="section">Localisation</span>
          </div>
          <div className="dashboard__map__display">
            <Map />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;