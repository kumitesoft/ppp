import styles from './Newsletter.module.scss';

const Newsletter = () => {
  return (
    <>
      <div className={styles.empty_padding_newsletter} id='newsletter' />
      <div className={styles.newsletter_container}>
        <div className={styles.newsletter_wrapper}>
          <p className={styles.newsletter_component}>
            Zostaw suba! <br /> badz na biezaco z nowosciami
          </p>
          <div className={styles.newsletter_signinbox}>
            <input type='text' />
            <p className={styles.newsletter_btn}>Zapisz sie</p>
          </div>
        </div>
      </div>
      <style jsx>{``}</style>
    </>
  );
};

export default Newsletter;
