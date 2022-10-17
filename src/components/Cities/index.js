import PropTypes from 'prop-types';
import City from './city';

import './style.scss';

function Cities() {
  return (
    <div className="cities">
      <City />
      <City />
    </div>
  );
}

Cities.propTypes = {

};

export default Cities;
