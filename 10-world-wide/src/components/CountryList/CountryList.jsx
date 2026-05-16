import Spinner from '../Spinner/Spinner';
import PropTypes from 'prop-types';
import styles from '../CountryList/CountryList.module.css';
import Message from '../Message/Message';
import CountryItem from '../Country/CountryItem';

const CountryList = ({cities, isLoading}) => {

  if (isLoading) return <Spinner />;

  if(!cities.length) return <Message message='Add your first city by clicking on a city on the map' />;

  // to make unique countries array from all cities data
  const countries = cities.reduce((arr, city) => {
    if(!arr.map(el => el.country).includes(city.country))
    return [...arr, {country: city.country, emoji: city.emoji}];
    else return arr;
  } , []);

  return (
        <ul className={styles.countryList}>
          {countries.map((country) => (
            <CountryItem country={country} key={country.country} />
          ))}
        </ul>
  )
}

CountryList.propTypes = {
  cities: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default CountryList
