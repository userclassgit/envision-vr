import headset1 from '../media/headset-1.jpeg';
import headset2 from '../media/headset-2.jpeg';
import headset3 from '../media/headset-3.jpeg';
import headset4 from '../media/headset-4.jpeg';


const Gallery = () => {
  return (
    <div className="gallery">
      <img src={headset1} alt="Headset 1" />
      <img src={headset2} alt="Headset 2" />
      <img src={headset3} alt="Headset 3" />
      <img src={headset4} alt="Headset 4" />
    </div>
  );
};

export default Gallery;