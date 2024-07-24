import { Outlet } from 'react-router-dom';
import AppNav from '../AppNav/AppNav';
import Logo from '../Logo/Logo';
import styles from '../Sidebar/Sidebar.module.css';

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />

      <Outlet />
      
      {/* make footer component */}
      <footer className={styles.footer}>
        <p className={styles.copyright}>
            &copy; Copyright {new Date().getFullYear()} by WorldWide Inc.
        </p>
      </footer>
    </div>
  )
}

export default Sidebar
