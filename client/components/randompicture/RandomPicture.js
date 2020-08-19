import { useKeenSlider } from 'keen-slider/react';
import { getProperImages } from '../../helpers/randomPic';

const RandomPicture = ({ category }) => {
  const [opacities, setOpacities] = React.useState([]);

  const [sliderRef, slider] = useKeenSlider({
    slides: getProperImages(category).length,
    loop: true,
    move(s) {
      const new_opacities = s.details().positions.map((slide) => slide.portion);
      setOpacities(new_opacities);
    },
  });

  React.useEffect(() => {
    let current = setInterval(() => {
      slider.next();
    }, 2500);
    return () => {
      clearInterval(current);
    };
  }, [slider]);

  return (
    <div ref={sliderRef} className='fader'>
      {getProperImages(category).map((src, idx) => (
        <div
          key={idx}
          className='fader__slide'
          style={{ opacity: opacities[idx] }}
        >
          <img src={src} />
        </div>
      ))}

      <style jsx>
        {`
          .fader {
            height: 38rem;
            position: relative;
            overflow: hidden;
            width: 50rem;
            margin: 0 auto;
          }

          .fader__slide {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
          }

          .fader img {
            width: 100%;
            height: auto;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translateY(-50%) translateX(-50%);
            -webkit-transform: translateY(-50%) translateX(-50%);
          }

          @media only screen and (max-width: 768px) {
            .fader {
              height: 63vw;
              width: 100%;
            }
          }
        `}
      </style>
    </div>
  );
};

export default RandomPicture;
