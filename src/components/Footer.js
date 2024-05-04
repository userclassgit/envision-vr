import facebookIcon from '../media/social-facebook.png';
import instagramIcon from '../media/social-instagram.png';
import youtubeIcon from '../media/social-youtube.png';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="socials">
          <img src={facebookIcon} alt="Facebook" />
          <img src={instagramIcon} alt="Instagram" />
          <img src={youtubeIcon} alt="YouTube" />
        </div>
        <span>©EnvisionVR</span>
      </div>
    </footer>
  );
};

export default Footer;