import styles from './HomeNews.module.scss';
import Card from '../card/Card';

const HomeNews = ({ data, latest, popular, under, random }) => {
  return (
    <div className={styles.homeNews_container} id='allImages'>
      <div className={styles.homeNews_title}>
        <p className={styles.homeNews_title_left}>Wejdz na wyzszy poziom zakupow</p>
      </div>
      {data ? (
        <div className={styles.homeNews_wrapper}>
          <div className={styles.homeNews_buttons}>
            <p className='btn' onClick={() => latest()}>
              Najnowsze
            </p>
            <p className='btn' onClick={() => popular()}>
              Popularne
            </p>
            <p className='btn' onClick={() => under()}>
              - 10PLN
            </p>
            <p className='btn' onClick={() => random()}>
              Random
            </p>
          </div>
          <div className={styles.homeNews_box}>
            {data.map((el) => (
              <Card
                id={el._id}
                name={el.name}
                description={el.description}
                price={el.price}
                category={el.category}
                image={el.image}
                createdAt={el.createdAt}
                key={el.name}
              />
            ))}
          </div>
        </div>
      ) : (
        <p>loading</p>
      )}
      <style jsx>{``}</style>
    </div>
  );
};

export default HomeNews;
