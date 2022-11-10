// import PropTypes from 'prop-types';
import Searchbar from 'components/Searchbar';

import {ReactComponent as Pin} from 'assets/icons/pin.svg'

import './style.scss';
import { useSelector } from 'react-redux';


function Header() {
  const stateLocalisation = useSelector(state => state.localisation)
  
  return (
    <header className="header">

        <div className="header__localisation">
            <div className="header__localisation__pin"> 
              <Pin />
            </div>
            <div className="header__localisation__text">
                <p className="section"> 
                   { stateLocalisation.cityName.length > 1 ? <span className='main'>{stateLocalisation.cityName}, <span>{stateLocalisation.cityState}</span></span> : 'Inconnu' }
                </p>
            </div>
        </div>

        <div className="header__title">
          <h1> MyWeatherApp </h1>
        </div>

        <Searchbar />
    </header>
  );
}

// Header.propTypes = {

// };

export default Header;
