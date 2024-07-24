import Spinner from '../Spinner/Spinner';
import PropTypes from 'prop-types';
import styles from '../CityList/CityList.module.css';
import Message from '../Message/Message';
import CityItem from '../CityItem/CityItem';

const CityList = ({cities, isLoading}) => {
  
  if (isLoading) return <Spinner />;

  if(!cities.length) return <Message message='Add your first city by clicking on a city on the map' />;

  return (
        <ul className={styles.cityList}>
          {cities.map((city) => (
            <CityItem city={city} key={city.id} />
          ))}
        </ul>
  )
}

CityList.propTypes = {
  cities: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default CityList
