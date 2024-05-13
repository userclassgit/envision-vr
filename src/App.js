import './css/app.css';
import Header from './components/Header';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Header />
      <section className="headset-section">
        <div className="container">
          <h1>Our latest headsets</h1>
          <p>These EnvisionVR headsets, built with cutting-edge technology, 
            deliver an immersive experience like no other.</p>
          <Gallery />
        </div>
      </section>
      <Footer />
    </>
  );
}

export default App;
