import Layout from '../components/layout/Layout';
import fetch from 'isomorphic-unfetch';
import LatestNews from '../components/latestnews/LatestNews';
import HomeNews from '../components/homenews/HomeNews';
import AdminPanel from '../components/adminpanel/AdminPanel';
import InbetweenOne from '../components/inbetweenone/InbetweenOne';
import Newsletter from '../components/newsletter/Newsletter';
import { useKeenSlider } from 'keen-slider/react';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Index = ({ latestNewsData, homeNewsData }) => {
  const [homeData, setHomeData] = useState([]); // data to which I add more n more elements
  const [btnChangedData, setBtnChangedData] = useState([]); // based on btn type set new data from homeData
  const [currentBtnClicked, setCurrentBtnClicked] = useState(''); // type of btn
  const [currentPage, setCurrentPage] = useState(8); // current page number
  const [mainPage, setMainPage] = useState(true); // based on value I disappear top navbar line elements (left)

  // slider configuration ***
  const [pause, setPause] = React.useState(false);
  const timer = React.useRef();
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    duration: 2000,
    dragStart: () => {
      setPause(true);
    },
    dragEnd: () => {
      setPause(false);
    },
  });

  React.useEffect(() => {
    sliderRef.current.addEventListener('mouseover', () => {
      setPause(true);
    });
    sliderRef.current.addEventListener('mouseout', () => {
      setPause(false);
    });
  }, [sliderRef]);

  React.useEffect(() => {
    timer.current = setInterval(() => {
      if (!pause && slider) {
        slider.next();
      }
    }, 3500);
    return () => {
      clearInterval(timer.current);
    };
  }, [pause, slider]);
  // end of slider configuration ***

  useEffect(() => {
    setHomeData(homeNewsData);
  }, []);

  const latest = () => {
    let oldData = [...homeData];
    let time = new Date(Date.now() - 86400000 * 5).toISOString();
    let newData = oldData.filter((el) => el.createdAt > time);
    setBtnChangedData(newData);
    setCurrentBtnClicked('latest');
  };

  const popular = () => {
    let oldData = [...homeData];
    let newData = oldData.filter((el) => el.popularity >= 10);
    setBtnChangedData(newData);
    setCurrentBtnClicked('popular');
  };

  const under = () => {
    let oldData = [...homeData];
    let newData = oldData.filter((el) => el.price <= 10);
    setBtnChangedData(newData);
    setCurrentBtnClicked('under');
  };

  const random = () => {
    let oldData = [...homeData];
    function shuffle(array) {
      var currentIndex = array.length,
        temporaryValue,
        randomIndex;

      // While there remain elements to shuffle...
      while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }

      return array;
    }

    let newData = shuffle(oldData);

    setBtnChangedData(newData);
    setCurrentBtnClicked('random');
  };

  const more = async () => {
    let { data } = await axios({
      method: 'GET',
      url: `/items/${currentPage}`,
    });

    setCurrentPage((p) => p + 4);
    setBtnChangedData([]); // Reset and come back to homeData
    setHomeData(data); // Add to homeData
    if (currentBtnClicked === 'latest') latest();
    if (currentBtnClicked === 'popular') popular();
    if (currentBtnClicked === 'under') under();
    // if (currentBtnClicked === 'random') random();
  };

  return (
    <Layout mainPage={mainPage} setMainPage={setMainPage}>
      <div className='container'>
        {/* slider */}
        <div ref={sliderRef} className='keen-slider'>
          <div className='keen-slider__slide number-slide1 slider-configuration'>
            <div className='slider-box'>
              <img src='./slider/1.jpg' />
              <p className='slider-text slider-text-1'>PONAD 100 SKLEPOW</p>
            </div>
          </div>
          <div className='keen-slider__slide number-slide2 slider-configuration'>
            <div className='slider-box'>
              <img src='./slider/2.jpg' />
              <p className='slider-text slider-text-2'>ZAWSZE POD REKA</p>
            </div>
          </div>
          <div className='keen-slider__slide number-slide3 slider-configuration'>
            <div className='slider-box'>
              <img src='./slider/1.jpg' />
              <p className='slider-text slider-text-3'>NA KAZDA OKAZJE</p>
            </div>
          </div>
          <div className='keen-slider__slide number-slide4 slider-configuration'>
            <div className='slider-box'>
              <img src='./slider/4.jpg' />
              <p className='slider-text slider-text-4'>WASZE CENTRUM</p>
            </div>
          </div>
        </div>
        {/* <AdminPanel /> */}
        {latestNewsData ? (
          <LatestNews data={latestNewsData} latest={latest} />
        ) : (
          <p>Loading</p>
        )}

        <InbetweenOne />
        <Newsletter />
        {homeData || btnChangedData ? (
          <HomeNews
            data={btnChangedData.length === 0 ? homeData : btnChangedData}
            latest={latest}
            popular={popular}
            under={under}
            random={random}
          />
        ) : (
          <p>Loading</p>
        )}
      </div>
      <div className='moreBtnDiv'>
        <button className='btn' onClick={() => more()}>
          WIECEJ
        </button>
      </div>
      <style jsx>
        {`
          .slider-configuration {
            display: flex;
            justify-content: center;
            margin: 2rem 0;
          }
          .slider-box {
            position: relative;
          }
          .slider-text {
            position: absolute;
            font-size: 3rem;
            width: 34rem;
            line-height: 3rem;
            text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.2);
            padding: 1rem 2rem;
            background-color: #ffc500;
            color: #fff;
          }
          .slider-text-1 {
            bottom: 30rem;
            left: -5rem;
            white-space: nowrap;
          }
          .slider-text-2 {
            bottom: 29rem;
            right: -1rem;
          }
          .slider-text-3 {
            bottom: 3rem;
            left: -10rem;
          }
          .slider-text-4 {
            bottom: 2rem;
            right: -3rem;
          }
          .star {
            position: absolute;
            top: -54px;
            left: -57px;
            width: 9%;
            transform: rotate(-3deg);
          }
          .moreBtnDiv {
            text-align: center;
            margin: 3rem 0;
          }

          .moreBtnDiv button {
            padding: 1rem 3rem;
            border: none;
            outline: none;
          }

          .moreBtnDiv button:hover {
            background-color: #ff2a2a;
            color: #fff;
          }

          .moreBtnDiv button:active {
            transform: translateY(0.3rem);
          }

          @media only screen and (max-width: 1024px) {
            .slider-text-1 {
              left: -1rem;
            }
            .slider-text-2 {
              right: -3rem;
            }
            .slider-text-3 {
              left: -1rem;
            }
          }
          @media only screen and (max-width: 768px) {
            .slider-box {
              position: relative;
              width: 95%;
              margin: 0 auto;
            }
            .slider-box img {
              width: 100%;
            }
            .slider-box p {
              font-size: 1.8rem;
              width: 100%;
              padding: 0.4rem 0;
              text-align: center;
              bottom: 0;
              left: 0;
            }
          }
          @media only screen and (max-width: 510px) {
            .slider-box p {
              font-size: 1.3rem;
              padding: .2rem 0;
              line-height: inherit;
            }
        `}
      </style>
    </Layout>
  );
};

export const getStaticProps = async (ctx) => {
  let latestNewsData = await axios({
    method: 'GET',
    url: `/five`,
  });

  let homeNewsData = await axios({
    method: 'GET',
    url: `/items/1`,
  });

  return {
    props: {
      latestNewsData: latestNewsData.data,
      homeNewsData: homeNewsData.data,
    },
    revalidate: 1, //  static content can also be dynamic (ale jakby za 3 razem?). https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation
  };
};

export default Index;
