import styles from './Foot.module.scss';
import logo from '../../assets/footer-logo.svg';
import facebook from '../../assets/facebook.svg';
import twitter from '../../assets/twitter.svg';
import link from '../../assets/link.svg';
import insta from '../../assets/insta.svg';
import youtube from '../../assets/youtube.svg';

const Foot = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <img src={logo} alt='logo' />
        <div className={styles.socials}>
          <img src={facebook} alt='facebook' />
          <img src={twitter} alt='twitter' />
          <img src={youtube} alt='youtube' />
          <img src={link} alt='link' />
          <img src={insta} alt='insta' />
        </div>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Our Method</li>
          <li>Contact</li>
          <li>Team</li>
          <li>Stories</li>
        </ul>
      </div>
    </footer>
  );
};

export default Foot;
