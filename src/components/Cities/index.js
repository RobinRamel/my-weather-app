import PropTypes from 'prop-types';
import City from './city';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

import './style.scss';

function Cities() {
  return (
    <div className="cities">
      <div className="cities__container">
      <SimpleBar style={{ height: '100%' }}>
        <City />
        <City />
        <City />
        <City />
        <City />
        <City />
        <City />
        <City />
        <City />
      </SimpleBar>
      </div>
    </div>
  );
}

Cities.propTypes = {

};

export default Cities;
