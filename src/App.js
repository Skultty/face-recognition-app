import ImageLinkForm from './components/ImageLinkForm';
import Nav from './components/Nav';
import ParticleBackground from './components/ParticleBackground';

function App() {
  return (
    <div>
      <Nav/>
      <ImageLinkForm />
      {/*
  <FaceRecognition />*/}

      <ParticleBackground id="tsparticles"/>
    </div>
  );
}

export default App;
