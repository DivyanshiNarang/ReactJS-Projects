import { NavLink } from 'react-router-dom';
import Logo from '../Logo/Logo';
import styles from '../PageNav/PageNav.module.css';

const PageNav = () => {
  return (
    <nav className={styles.nav}>
      
      <Logo />

      <ul>
        {/* <li>
            <NavLink to="/">Home</NavLink>
        </li> */}
        <li>
            <NavLink to="/pricing">Pricing</NavLink>
        </li>
        <li>
            <NavLink to="/product">Products</NavLink>
        </li>
        <li>
            <NavLink to="/login" className={styles.ctaLink}>Login</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default PageNav
