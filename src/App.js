import React from 'react';
import Navigation from './Components/Navigation/Navigation';
import Logo from "./Components/Logo/logo"
import Rank from './Components/Rank/Rank';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';
import Particles from 'react-tsparticles';
import particlesConfig from "./ParticlesFiles/particles"
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      input: "",
    }
  }
  onInputChange = (e) => {
  }
  onClickDetectBtn = (e) => {
    console.log(e)
  }
  render() {
    return (
      <div className='App'>
        <Particles
          id="tsparticles"
          init={particlesConfig.particlesInit}
          loaded={particlesConfig.particlesLoaded}
          options={particlesConfig.particlesOptions}
        />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm onInputChange={this.onInputChange} onClickDetectBtn={this.onClickDetectBtn} />
        {
          //   <FaceRecognition/>
        }
      </div>
    );
  }
}

export default App;
