import Link from 'next/link';
import { menu } from '../../helpers/menu';

const DesktopMenu = ({ setMainPage }) => {
  return (
    <ul className='bigmenu'>
      <li className='nowosc'>
        <Link href='/'>
          <p>HOME</p>
        </Link>
      </li>
      <li>
        <span>OSOBA</span>

        {/* <!-- First Tier Drop Down --> */}
        <ul>
          {menu.osoba.map((el) => (
            <li key={el}>
              <Link
                onClick={() => setMainPage(false)}
                href='./[subCategory]'
                as={`./${el.toLowerCase()}`}
              >
                <p>{el}</p>
              </Link>
            </li>
          ))}
        </ul>
      </li>
      <li>
        <span>Z OKAZJI</span>
        {/* <!-- First Tier Drop Down --> */}
        <ul>
          {menu.okazja.map((el) => (
            <li key={el}>
              <Link
                onClick={() => setMainPage(false)}
                href='./[subCategory]'
                as={`./${el.toLowerCase()}`}
              >
                <p>{el}</p>
              </Link>
            </li>
          ))}
          {/* <li>
              <a href='#'>Tutorials</a>
              <ul>
                <li>
                  <a href='#'>HTML/CSS</a>
                </li>
                <li>
                  <a href='#'>jQuery</a>
                </li>
                <li>
                  <a href='#'>Other</a>
                  <ul>
                    <li>
                      <a href='#'>Stuff</a>
                    </li>
                    <li>
                      <a href='#'>Things</a>
                    </li>
                    <li>
                      <a href='#'>Other Stuff</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li> */}
        </ul>
      </li>
      <li>
        <span>KATEGORIA</span>
        <ul>
          {menu.kategoria.map((el) => (
            <li key={el}>
              <Link
                onClick={() => setMainPage(false)}
                href='./[subCategory]'
                as={`./${el.toLowerCase()}`}
              >
                <p>{el}</p>
              </Link>
            </li>
          ))}
        </ul>
      </li>
      <li>
        <span>WIECEJ</span>
        <ul>
          {menu.wiecej.map((el) => (
            <li key={el}>
              <Link
                onClick={() => setMainPage(false)}
                href='./[subCategory]'
                as={`./${el.toLowerCase()}`}
              >
                <p>{el}</p>
              </Link>
            </li>
          ))}
        </ul>
      </li>

      <style jsx>
        {`
          .bigmenu {
            transform: translateX(-3rem);
          }

          .nowosc:hover {
            border-bottom: 1px solid red;
          }

          .bigmenu {
            position: relative;
            display: flex;
            height: 3.5rem;
            align-items: center;
            justify-content: space-between;
            font-size: 1.3rem;
            text-decoration: none;
            font-weight: 600;
            width: 48rem;
          }

          .bigmenu li {
            display: inline-block;
          }

          p,
          span {
            display: block;
            padding: 0 10px;
            line-height: 3.5rem;
            text-decoration: none;
            cursor: pointer;
          }

          span {
            cursor: default;
          }

          p:hover {
            background-color: #ff2a2a;
            color: #fff;
          }

          /* Hide Dropdowns by Default */
          .bigmenu ul {
            display: none;
            position: absolute;
            top: 3.5rem; /* the height of the main nav */
          }

          /* Display Dropdowns on Hover */
          .bigmenu li:hover > ul {
            display: inherit;
          }

          /* Fisrt Tier Dropdown */
          .bigmenu ul li {
            width: 170px;
            float: none;
            display: list-item;
            position: relative;
            background-color: #f3f3f3;
            border-bottom: 1px solid #000;
          }

          .bigmenu ul li:nth-last-child(1) {
            border-bottom: none;
          }

          /* Second, Third and more Tiers	*/
          .bigmenu ul ul li {
            position: relative;
            top: -60px;
            left: 170px;
          }

          /* Change this in order to change the Dropdown symbol */
          li > a:after {
            content: ' +';
          }
          li > a:only-child:after {
            content: '';
          }

          @media only screen and (max-width: 1024px) {
            .bigmenu {
              display: none;
            }
          }
        `}
      </style>
    </ul>
  );
};

export default DesktopMenu;
