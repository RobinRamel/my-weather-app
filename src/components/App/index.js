// import {ReactComponent as Soleil} from 'assets/weather-icons/Soleil.svg'
import Header from 'components/Header';
import Loading from 'components/Loading';
import Map from 'components/Map';
import Meteo from 'components/Meteo';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './style.scss';

function App() {
  const dispatch = useDispatch()
  const loading = useSelector(state => state.weather.isLoading)

  useEffect(() => {
    dispatch({ type: 'localisation/getLocalisation' })
  }, [])

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
      <Header />
      <div className="dashboard">
        <div className="dashboard__meteo">
          {/* Dashboard nav */}
          <nav className="dashboard__meteo__nav">
            <span className="dashboard__meteo__nav__link active">
              Aujourd'hui
            </span>
            <span className="dashboard__meteo__nav__link">
              prévision 5 jours 
            </span>
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