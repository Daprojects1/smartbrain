import React, { useState } from 'react';
import Navigation from './Components/Navigation/Navigation';
import Logo from "./Components/Logo/logo"
import Rank from './Components/Rank/Rank';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';
import Particles from 'react-tsparticles';
import particlesConfig from "./ParticlesFiles/particles"
import FaceRecognition from './Components/FaceRecognition/FaceRecognition';
import Clarifai from "clarifai"
import SignIn from './Components/SignIn/SignIn';
import { Navigate, useNavigate } from 'react-router-dom';
import './App.css';
import Register from './Components/Register/Register';


const app = new Clarifai.App({
  apiKey: "9303e58719674c6b95e4f7397e4ad2b4"
})
const App = () => {
  const [route, setRoute] = useState("Sign In")
  const [input, setInput] = useState("")
  const [box, setBox] = useState({})
  const [signInString, setSignInString] = useState("")
  const [isUrlValid, setIsUrlValid] = useState(false)

  const onInputChange = (e) => {
    setInput(e.target.value);
  }
  const changeAreaBox = (responseBox) => {
    let img = document.getElementById("mainImg")
    let width = img.width
    let height = img.height
    let box = {
      leftCol: responseBox.left_col * width,
      topRow: responseBox.top_row * height,
      bottomRow: height - (responseBox.bottom_row * height),
      rightCol: width - (responseBox.right_col * width),
    }
    setBox(box)
  }
  const onDetectBtn = (e) => {
    app.models.predict("a403429f2ddf4b49b307e318f00e528b", input)
      .then((response) => {
        const regionArea = response.outputs[0].data.regions[0].region_info.bounding_box
        changeAreaBox(regionArea)
        setIsUrlValid(true)

      }, (err) => {
        setIsUrlValid(false)
      })
  }
  const checkResponse = () => {
    console.log(isUrlValid)
    return isUrlValid ? input : null
  }
  const onRouteChange = (route) => {
    setRoute(route)
    setSignInString(route)
  }
  return (
    <div className='App'>
      <Particles
        id="tsparticles"
        init={particlesConfig.particlesInit}
        loaded={particlesConfig.particlesLoaded}
        options={particlesConfig.particlesOptions}
      />
      <Navigation onRouteChange={onRouteChange} signInString={signInString} />
      {
        route === "Register" ? <Register onRouteChange={onRouteChange} /> :
          route === "Sign In" ? <SignIn onRouteChange={onRouteChange} /> :
            <><Logo /><Rank /><ImageLinkForm onInputChange={onInputChange} value={input} onDetectBtn={onDetectBtn} /><FaceRecognition url={checkResponse()} box={box} /></>
      }
    </div>
  );
}

export default App;
