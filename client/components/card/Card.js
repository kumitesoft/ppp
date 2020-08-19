import styles from './Card.module.scss';
import axios from 'axios';

const Card = ({ id, name, description, price, category, image, createdAt }) => {
  return (
    <div className={styles.blockBig_container} key={name}>
      <a
        className={styles.blockBig_image_container}
        href='#!'
        onClick={() =>
          axios({
            method: 'POST',
            headers: {
              'Content-Type': 'application/json;charset=utf-8',
            },
            data: {},
            url: `/popularity/${id}`,
          })
        }
      >
        <span className={styles.labelBig}>EXTRA</span>
        <img src={image} className={styles.imageBig}/>
      </a>
      <p className={styles.titleBig}>{name}</p>
      <p className={styles.priceBig}>{price}PLN</p>
      <style jsx>{``}</style>
    </div>
  );
};

export default Card;
