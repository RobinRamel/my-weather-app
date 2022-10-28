import PropTypes from 'prop-types';

import './style.scss';

function CityFound({ cityName, lat, long, cityState }) {
  return (
    <div className="cities_found__city">
        
        <div className="cities_found__city__name">
            <p>
                { cityName }, &nbsp;
            </p>
            <p className="state">
                { cityState }
            </p>
        </div>

        <div className="cities_found__city__btns"></div>
        
    </div>
  );
}

CityFound.propTypes = {
    cityName: PropTypes.string.isRequired,
    lat: PropTypes.number.isRequired,
    long: PropTypes.number.isRequired,
    cityState: PropTypes.string.isRequired
};

export default CityFound;
