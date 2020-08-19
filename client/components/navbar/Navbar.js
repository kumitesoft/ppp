import Link from 'next/link';
import DesktopMenu from '../desktopmenu/DesktopMenu';
import styles from './Navbar.module.scss';

const Navbar = ({ setOpenMobileMenu, openMobileMenu, setMainPage }) => {
  return (
    <div className={styles.navbar_container}>
      <div className={styles.navbar_wrapper}>
        <div className={styles.navbar_logo}>
          <Link href='/'>
            <img alt='logo' src='./logo.png' />
          </Link>
        </div>
        <DesktopMenu setMainPage={setMainPage} />

        <button
          className={styles.burger}
          onClick={() => setOpenMobileMenu(!openMobileMenu)}
        >
          mobile
        </button>
      </div>

      <style jsx>{``}</style>
    </div>
  );
};

export default Navbar;
