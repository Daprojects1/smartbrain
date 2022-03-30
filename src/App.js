import React, { useState } from 'react';
import Navigation from './Components/Navigation/Navigation';
import Particles from 'react-tsparticles';
import particlesConfig from "./ParticlesFiles/particles"
import Clarifai from "clarifai"
import SignIn from './Components/SignIn/SignIn';
import './App.css';
import Register from './Components/Register/Register';
import Home from './Components/Home/Home';

const app = new Clarifai.App({
  apiKey: "9303e58719674c6b95e4f7397e4ad2b4"
})

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      route: "Sign In",
      input: "",
      box: {},
      signInString: "",
      isUrlValid: null

    }
  }

  onInputChange = (e) => {
    this.setState({ input: e.target.value })
  }
  changeAreaBox = (responseBox) => {
    let img = document.getElementById("mainImg")
    const width = img.width
    const height = img.height
    const box = {
      leftCol: responseBox.left_col * width,
      topRow: responseBox.top_row * height,
      bottomRow: height - responseBox.bottom_row * height,
      rightCol: width - responseBox.right_col * width,
    }
    this.setState({ box })
  }
  onDetectBtn = (e) => {
    app.models.predict("a403429f2ddf4b49b307e318f00e528b", this.state.input)
      .then((response) => {
        this.setState({ isUrlValid: true })
        const regionArea = response.outputs[0].data.regions[0].region_info.bounding_box
        this.changeAreaBox(regionArea)
      }, (err) => {
        this.setState({ isUrlValid: false })
      })
  }
  checkResponse = () => {
    return this.state.isUrlValid ? this.state.input : null
  }
  onRouteChange = (route) => {
    this.setState({ route })
    this.setState({ signInString: route })
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
        <Navigation onRouteChange={this.onRouteChange} route={this.state.route} />
        {
          this.state.route === "Register" ? <Register onRouteChange={this.onRouteChange} /> :
            this.state.route === "Sign In" ? <SignIn onRouteChange={this.onRouteChange} /> : <Home App={this}></Home>
        }
      </div>
    )
  }
}

export default App;
