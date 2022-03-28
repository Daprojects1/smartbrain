import React from 'react';
import Navigation from './Components/Navigation/Navigation';
import Logo from "./Components/Logo/logo"
import Rank from './Components/Rank/Rank';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';
import Particles from 'react-tsparticles';
import particlesConfig from "./ParticlesFiles/particles"
import FaceRecognition from './Components/FaceRecognition/FaceRecognition';
import Clarifai from "clarifai"
import './App.css';


const app = new Clarifai.App({
  apiKey: "9303e58719674c6b95e4f7397e4ad2b4"
})
class App extends React.Component {
  constructor() {
    super()
    this.state = {
      input: "",
    }
  }
  onInputChange = (e) => {
    this.setState({ input: e.target.value })
  }
  handleResponse = (response) => {
    console.log(response)
    this.setState({ response })
  }
  onClickDetectBtn = (e) => {
    app.models.predict("aaa03c23b3724a16a56b629203edc62c", this.state.input)
      .then((response) => {
        return this.handleResponse(response.outputs)
      }, (err) => {
        this.setState({ response: null })
      })
  }
  checkResponse = () => {
    return this.state.response ? this.state.input : null
  }
  render() {
    const { input } = this.state
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
        <ImageLinkForm onInputChange={this.onInputChange} value={input} onClickDetectBtn={this.onClickDetectBtn} />
        <FaceRecognition url={this.checkResponse()} />
      </div>
    );
  }
}

export default App;
