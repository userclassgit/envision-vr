// Video background tutorial https://youtu.be/LSRNmhLS76o?t=78
import heroVid from '../media/hero-vid.mp4';
import HeaderTop from './HeaderTop';

const Header = () => {
  return (
    <header>
      <div className="video-overlay"></div>
      <video src={heroVid} autoPlay loop muted></video>
      <div className="container header-content">
        <HeaderTop />
        <div className="header-text">
          <h1>Immerse yourself in a new reality with EnvisionVR.</h1>
          <p>We make the best VR headsets in the world.</p>
        </div>
      </div>
    </header>
  );
};

export default Header;