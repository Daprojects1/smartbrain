import React from 'react';
import Navigation from './Components/Navigation/Navigation';
import Particles from 'react-tsparticles';
import particlesConfig from "./ParticlesFiles/particles"
import Clarifai from "clarifai"
import SignIn from './Components/SignIn/SignIn';
import Register from './Components/Register/Register';
import Home from './Components/Home/Home';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

const app = new Clarifai.App({
  apiKey: "9303e58719674c6b95e4f7397e4ad2b4"
})

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      route: "Signed In",
      input: "",
      box: {},
      isUrlValid: null,
      isImageLoaded: false
    }
  }
  onInputChange = (e) => {
    if (e.target.value.length === 0) this.setState({ isUrlValid: false })
    this.setState({ input: e.target.value })
  }
  changeAreaBox = (response) => {
    const responseBox = response.outputs[0].data.regions[0].region_info.bounding_box
    const img = document.getElementById("mainImg")
    img.onload = () => {
      const width = img.width
      const height = img.height
      let box = {
        leftCol: responseBox.left_col * width,
        topRow: responseBox.top_row * height,
        bottomRow: height - (responseBox.bottom_row * height),
        rightCol: width - (responseBox.right_col * width),
      }
      this.setState({ box, isImageLoaded: true })
    }
  }
  onDetectBtn = (e) => {
    this.setState({ isImageLoaded: false })
    app.models.predict("a403429f2ddf4b49b307e318f00e528b", this.state.input)
      .then((response) => {
        this.setState({ isUrlValid: true })
        this.changeAreaBox(response)
      })
      .catch((e) => {
        if (!e.response) toast.dark("Sorry, I only detect faces")
        else toast.dark("Invalid Image Link")

        this.setState({ isUrlValid: false })
      })
  }
  checkResponse = () => {
    return this.state.isUrlValid ? this.state.input : null
  }
  onRouteChange = (route) => {
    this.setState({ route })
  }
  render() {
    const { route } = this.state
    return (
      <div className='App'>
        <ToastContainer position="top-center" />
        <Particles
          id="tsparticles"
          init={particlesConfig.particlesInit}
          loaded={particlesConfig.particlesLoaded}
          options={particlesConfig.particlesOptions}
        />
        <Navigation onRouteChange={this.onRouteChange} route={route} />
        {
          route === "Register" ? <Register onRouteChange={this.onRouteChange} /> :
            route === "Sign In" ? <SignIn onRouteChange={this.onRouteChange} /> : <Home App={this}></Home>
        }
      </div>
    )
  }
}

export default App;
