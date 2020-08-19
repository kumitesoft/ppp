import styles from './SmallCard.module.scss';
import axios from 'axios';

const SmallCard = ({
  id,
  name,
  description,
  price,
  category,
  image,
  createdAt,
}) => {
  return (
    <div className={styles.blockSmall_container} key={name}>
      <p className={styles.titleSmall}>{name}</p>
      <a
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
        <img src={image} className={styles.imageSmall}/>
      </a>
      <style jsx>
        {`
          
        `}
      </style>
    </div>
  );
};

export default SmallCard;
