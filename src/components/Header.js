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
      </div>
    </header>
  );
};

export default Header;