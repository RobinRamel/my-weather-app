import { useDispatch } from 'react-redux'
import { setLocalisation, toggleUserDenied } from 'reducers/localisation'

const localisation = store => next => action => {

    if (action.type === 'localisation/getLocalisation') {
        
        const success = (pos) => {
            console.log(pos)

            const coord = {
                long: pos.coords.longitude,
                lat: pos.coords.latitude
            }

            store.dispatch(setLocalisation(coord))
            store.dispatch({ type: 'ajax/getData'})
        }

        const error = (err) => {
            console.warn(`ERREUR (${err.code}): ${err.message}`);
            store.dispatch(toggleUserDenied())
        }

        navigator.geolocation.getCurrentPosition(success, error)
    }

    return next(action)
}

export default localisation