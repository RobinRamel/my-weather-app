
import { MapContainer, TileLayer } from 'react-leaflet'
import { useMap } from 'react-leaflet/hooks'
import './style.scss'
import 'leaflet/dist/leaflet.css'
import { useSelector } from 'react-redux';

// Children Component to MAP to be able to change the center of the map on update
// cause we can't access context / hooks of react leaflet only in descendant of map container
function ChangeView({ center }) {
  const map = useMap();
  map.setView(center);
  return null;
}

// Main MAP Component 
function Map() {
  const position = useSelector(state => state.localisation.coord)

  return (
    <div className="localisation" id="map">
      <MapContainer center={[position.lat, position.long]} zoom={10} scrollWheelZoom={true}>
        <ChangeView center={[position.lat, position.long]} /> 
        
        {/* Layer to add on map for later Updates if needed  */}
        {/* <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url={`https://tile.openweathermap.org/map/wind_new/{z}/{x}/{y}.png?appid=${process.env.REACT_APP_APIKEY}`}
          zIndex={2}
        /> */}

        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          zIndex={0}
        />
      </MapContainer>
    </div>
  );
}


export default Map;
