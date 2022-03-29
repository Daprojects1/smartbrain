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
      box: {}
    }
  }
  onInputChange = (e) => {
    this.setState({ input: e.target.value })
  }
  changeAreaBox = (responseBox) => {
    let img = document.getElementById("mainImg")
    let width = img.width
    let height = img.height
    console.log(width, height)
    let box = {
      leftCol: responseBox.left_col * width,
      topRow: responseBox.top_row * height,
      bottomRow: height - (responseBox.bottom_row * height),
      rightCol: width - (responseBox.right_col * width),
    }
    this.setState({ box })
  }
  onDetectBtn = (e) => {
    app.models.predict("a403429f2ddf4b49b307e318f00e528b", this.state.input)
      .then((response) => {
        const regionArea = response.outputs[0].data.regions[0].region_info.bounding_box
        this.changeAreaBox(regionArea)
        this.setState({ isUrlValid: true })
      }, (err) => {
        this.setState({ isUrlValid: false })
      })
  }
  checkResponse = () => {
    return this.state.isUrlValid ? this.state.input : null
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
        <ImageLinkForm onInputChange={this.onInputChange} value={input} onDetectBtn={this.onDetectBtn} />
        <FaceRecognition url={this.checkResponse()} box={this.state.box} isUrlValid={this.state.isUrlValid} />
      </div>
    );
  }
}

export default App;
