import styles from './Footer.module.scss';

const Footer = () => (
  <div className={styles.footer_container}>
    <div className={styles.footer_wrapper}>
      <div className={styles.footer_left}>
        <img src='./logo.png' alt='logo' />
        <p>2020</p>
      </div>
      <div className={styles.footer_right}>
        <img src='./instagram.png' />
        <p>Thank you</p>
      </div>
    </div>
    <style jsx global>
      {``}
    </style>
  </div>
);

export default Footer;
