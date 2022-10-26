// import PropTypes from 'prop-types';
import Searchbar from 'components/Searchbar';

import {ReactComponent as Pin} from 'assets/icons/pin.svg'

import './style.scss';
import { useSelector } from 'react-redux';

function Header() {
  const cityName = useSelector(state => state.localisation.cityName)
  
  return (
    <header className="header">

        <div className="header__localisation">
            <div className="header__localisation__pin"> 
              <Pin />
            </div>
            <div className="header__localisation__text">
                <p className="section"> 
                   { cityName.length > 1 ? cityName : 'Inconnu' }
                  {/* <span> France </span>  */}
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
