// import PropTypes from 'prop-types';
import { ReactComponent as Spinner } from 'assets/icons/spinner.svg';
import { useSelector } from 'react-redux';

import './style.scss';

function Loading() {
    const userDenied = useSelector(state => state.localisation.userDenied)

  return (
    <div className="loading">
        <div className="loading__card">
            <div className="icon_spiner ">
                { !userDenied && <Spinner /> }                
            </div>
            <span>
                { userDenied ? 'Veuillez faire une recherche...' : 'Loading...' }
            </span>
        </div>
    </div>
  );
}

Loading.propTypes = {

};

export default Loading;
