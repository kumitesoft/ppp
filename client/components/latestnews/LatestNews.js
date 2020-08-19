import SmallCard from '../smallcard/SmallCard';
import styles from './LatestNews.module.scss';

const LatestNews = ({ data, latest }) => {
  return (
    <div className={styles.latestNews_container}>
      <div className={styles.latestNews_title}>
        <p className={styles.latestNews_title_left}>Najnowsze</p>
        <a
          href='#allImages'
          className={styles.latestNews_title_right}
          onClick={() => latest()}
        >
          <p>Zobacz</p>
        </a>
      </div>
      {data ? (
        <div className={styles.latestNews_wrapper}>
          {data.map((el) => (
            <SmallCard
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
      ) : (
        <p>loading</p>
      )}
      <style jsx>{``}</style>
    </div>
  );
};

export default LatestNews;
