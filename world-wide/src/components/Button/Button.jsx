import PropTypes from 'prop-types';
import styles from '../Button/Button.module.css';

const Button = ({children, onClick, type}) => {
  return (
    <div className={`${styles[type]} ${styles.btn}`} onClick={onClick}>
      {children}
    </div>
  )
}

Button.propTypes = {
    children: PropTypes.node,
    onClick: PropTypes.func,
    type: PropTypes.string
}

export default Button
