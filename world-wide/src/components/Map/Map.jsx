import { useNavigate, useSearchParams } from 'react-router-dom';
import styles from '../Map/Map.module.css';

const Map = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get('lat');
  const lng = searchParams.get('lng');

  return (
    <div className={styles.mapContainer} onClick={() => {
      navigate("form");
    }}>
      <h1>Postion: {lat}, {lng}</h1>
      <button onClick={() => {
        setSearchParams({lat:23, lng: 50});
      }}>CLick</button>
    </div>
  )
}

export default Map
