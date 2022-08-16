import './App.css';
import Navigation from './Components/Navigation/Navigation'
import Logo from './Components/Logo/Logo'
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm'
import Rank from './Components/Rank/Rank'
// import Particles from "react-tsparticles";
// import { loadFull } from "tsparticles";
// import { useCallback } from "react";



function App() {
  return (
    <div className="App">
      <Navigation/>
      <Logo/>
      <Rank/>
      <ImageLinkForm/>
{/* {      <Navigation/>
      <Logo/>
      <ImageLinkForm/>
      <FaceRecognition/>} */}
    </div>
  );
}

export default App;
