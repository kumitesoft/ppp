import { useState, useEffect } from 'react';
import Navbar from '../navbar/Navbar';
import Head from 'next/head';
import Footer from '../footer/Footer';
import MobileMenu from '../mobilemenu/MobileMenu';
import styles from './Layout.module.scss';

const Layout = ({ children, mainPage, setMainPage }) => {
  const [openPopup, setOpenPopup] = useState(false);
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  useEffect(() => {
    if (openPopup || openMobileMenu) {
      document.documentElement.style.overflowY = 'hidden';
    } else {
      document.documentElement.style.overflowY = 'visible';
    }
  }, [openPopup, openMobileMenu]);

  return (
    <div className={styles.layout}>
      <Head>
        <title>MOJA ZTRONA</title>
      </Head>
      {/* MOBILE MENU */}
      <MobileMenu
        openMobileMenu={openMobileMenu}
        setOpenMobileMenu={setOpenMobileMenu}
        setMainPage={setMainPage}
      />
      {/* POPUP */}
      <div
        className={styles.popup_help_container}
        style={{ display: openPopup ? 'block' : 'none' }}
      >
        <div className={styles.popup_help_wrapper}>
          <p className={styles.popup_help_info}>
            NASZA FIRMA NAWIAZALA KONTAKT AFILIACYJNY Z PONAD 100 INNYCH FIRM.
            DZIEKI NAM MASZ MOZLIWOSC DOJSCIA DO NAJCIEKAWSZYCH PRODUKTOW WIELU
            FIRM.
          </p>
          <p
            className={styles.popup_help_close}
            onClick={() => setOpenPopup(!openPopup)}
          >
            cloze
          </p>
        </div>
        <div className={styles.popup_help_container_bg} />
      </div>
      {/* TOP LINE */}
      <div className={styles.topline_container}>
        <div
          className={styles.topline_wrapper}
          style={{ justifyContent: mainPage ? 'space-between' : 'flex-end' }}
        >
          <div
            className={styles.topline_box}
            style={{ display: mainPage ? 'flex' : 'none' }}
          >
            <a href='#newsletter'>
              <p className={styles.newsletter}>NEWSLETTER</p>
            </a>
            <a href='#allImages'>
              <img className={styles.arrowdown} src='./arrowdown.png' />
            </a>
          </div>
          <div
            className={styles.pomocBtn}
            onClick={() => setOpenPopup(!openPopup)}
          >
            POMOC
          </div>
        </div>
      </div>
      {/* NAVBAR */}
      <Navbar
        setOpenMobileMenu={setOpenMobileMenu}
        openMobileMenu={openMobileMenu}
        setMainPage={setMainPage}
      />
      {/* BOTTOM LINE */}
      <div className={styles.bottomline_container}>
        <div className={styles.bottomline_wrapper}>
          <p className={styles.blinking}>
            MAMY WSZYSTKO CZEGO POTRZEBUJESZ. JESTESMY POLACZENI DO PONAD 100
            FIRM
          </p>
        </div>
      </div>
      {children} {/* CHILDREN - changing page */}
      <Footer />
      <style jsx global>
        {``}
      </style>
    </div>
  );
};

export default Layout;
