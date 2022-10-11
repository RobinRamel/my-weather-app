// import PropTypes from 'prop-types';
import {ReactComponent as Loupe} from 'assets/icons/loupe.svg'

import './style.scss'



function Searchbar() {
  return (
    <div className="header__searchbar">
        <input type="text" placeholder="Chercher d'autres villes..." />
        <Loupe className="loupe"/>
    </div>
  );
}

// Searchbar.propTypes = {

// };

export default Searchbar;
