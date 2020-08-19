import Link from 'next/link';
import { menu } from '../../helpers/menu';
import { useState, useEffect } from 'react';

const MobileMenu = ({ openMobileMenu, setOpenMobileMenu, setMainPage }) => {
  const [openSubmenu, setOpenSubmenu] = useState(false);
  const [windowSize, setWindowSize] = useState(false);

  useEffect(() => {
    if (windowSize > 1024 || window.innerWidth > 1024) return;

    const onResize = () => {
      setWindowSize(window.innerWidth);
      if (windowSize > 1024) {
        setOpenSubmenu(false);
        setOpenMobileMenu(false);
      }
    };
    window.addEventListener('resize', onResize);

    return () => window.removeEventListener('resize', onResize);
  }, [windowSize]);

  return (
    <>
      <div
        className='close_menu'
        onClick={() => setOpenMobileMenu(!openMobileMenu)}
        style={{ display: openSubmenu || !openMobileMenu ? 'none' : 'flex' }}
      >
        X
      </div>
      <ul
        className='mobileMenu'
        style={{ display: openSubmenu || openMobileMenu ? 'flex' : 'none' }}
      >
        <li>
          <Link href='/'>
            <a>NOWOSCI</a>
          </Link>
        </li>
        <li>
          <a onClick={() => setOpenSubmenu('osoba')}>OSOBA</a>

          {/* <!-- First Tier Drop Down --> */}
          <ul style={{ display: openSubmenu === 'osoba' ? 'flex' : 'none' }}>
            <img
              src='./arrowdown.png'
              onClick={() => setOpenSubmenu(null)}
              className='takeBack'
            />
            {menu.osoba.map((el) => (
              <li key={el}>
                <Link href='./[subCategory]' as={`./${el.toLowerCase()}`}>
                  <a onClick={() => setMainPage(false)}>{el}</a>
                </Link>
              </li>
            ))}
          </ul>
        </li>
        <li>
          <a onClick={() => setOpenSubmenu('okazja')}>Z OKAZJI</a>
          {/* <!-- First Tier Drop Down --> */}
          <ul style={{ display: openSubmenu === 'okazja' ? 'flex' : 'none' }}>
            <img
              src='./arrowdown.png'
              onClick={() => setOpenSubmenu(null)}
              className='takeBack'
            />
            {menu.okazja.map((el) => (
              <li key={el}>
                <Link href='./[subCategory]' as={`./${el.toLowerCase()}`}>
                  <a href='#' onClick={() => setMainPage(false)}>
                    {el}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </li>
        <li>
          <a onClick={() => setOpenSubmenu('kategoria')}>KATEGORIA</a>
          <ul
            style={{ display: openSubmenu === 'kategoria' ? 'flex' : 'none' }}
          >
            <img
              src='./arrowdown.png'
              onClick={() => setOpenSubmenu(null)}
              className='takeBack'
            />
            {menu.kategoria.map((el) => (
              <li key={el}>
                <Link href='./[subCategory]' as={`./${el.toLowerCase()}`}>
                  <a href='#' onClick={() => setMainPage(false)}>
                    {el}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </li>
        <li>
          <a onClick={() => setOpenSubmenu('wiecej')}>WIECEJ</a>
          <ul style={{ display: openSubmenu === 'wiecej' ? 'flex' : 'none' }}>
            <img
              src='./arrowdown.png'
              onClick={() => setOpenSubmenu(null)}
              className='takeBack'
            />
            {menu.wiecej.map((el) => (
              <li key={el}>
                <Link href='./[subCategory]' as={`./${el.toLowerCase()}`}>
                  <a href='#' onClick={() => setMainPage(false)}>
                    {el}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </li>
      </ul>
      <style jsx>{`
        .close_menu {
          display: flex;
          position: absolute;
          height: 31px;
          width: 31px;
          top: 26px;
          right: 22px;
          0: ;
          z-index: 55;
          cursor: pointer;
        }
        .close_menu p {
          height: 2px;
          width: 31px;
          background-color: #000;
          transform: rotate(45deg);
          position: absolute;
          top: 14px;
          left: 0;
        }
        .close_menu p:nth-child(2) {
          transform: rotate(-45deg);
        }

        .mobileMenu {
          position: absolute;
          top: 0;
          left: 0;
          background-color: #fff;
          z-index: 51;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          font-size: 1.3rem;
          text-decoration: none;
          font-weight: 600;
          width: 100vw;
          height: 100vh;
        }

        .mobileMenu li {
          display: inline-block;
        }

        a,
        span {
          display: block;
          padding: 0 10px;
          line-height: 3.5rem;
          text-decoration: none;
        }

        a:hover {
          background-color: #ff2a2a;
          color: #fff;
        }

        /* Hide Dropdowns by Default */
        .mobileMenu ul {
          display: none;
          position: absolute;
          top: 0;
          left: 0;
          height: 100vh;
          width: 100vw;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          z-index: 100;
          background: #fff;
        }

        .takeBack {
          position: absolute;
          top: 0;
          left: 0;
          width: 38px;
          transform: rotate(90deg) translate(7px, -5px);
          height: 46px;
        }

        /* Fisrt Tier Dropdown */
        .mobileMenu ul li {
          width: 170px;
          float: none;
          display: list-item;
          position: relative;
          background-color: #fff;
          border-bottom: 1px solid #000;
        }

        .mobileMenu ul li:nth-last-child(1) {
          border-bottom: none;
        }

        .mobileMenu li {
          cursor: pointer;
        }

        /* Second, Third and more Tiers	*/
        .mobileMenu ul ul li {
          position: relative;
          top: -60px;
          left: 170px;
        }
      `}</style>
    </>
  );
};

export default MobileMenu;
