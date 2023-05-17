import "./App.css";
import React, { useState, useCallback } from "react";
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from "./components/Rank/Rank.js";
import "./Style/style.css";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { Option } from "./option";
import { FaceRecognition } from "./components/FaceRecognition/FaceRecognition";
import Clarifai from "clarifai";

// const app = new Clarifai.App({
//   apiKey: "c7a2faa685c349549f9011dc734affff",
// });

const App = () => {
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [box, setBox] = useState({});
  const [route, setRoute] = useState("");
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [user, setUser] = useState({
    id: "",
    name: "",
    email: "",
    entries: "",
    joined: "",
  });

  const onInputChange = (event) => {
    setInput(event.target.value);
    // console.log(event.target.value);
  };

  const onButtonSubmit = () => {
    setImageUrl(input);
    // console.log(input)
    console.log("click");
    // app.models
    //   .predict(
    //     "a403429f2ddf4b49b307e318f00e528b",
    //     "https://this-person-does-not-exist.com/static/images/fake-1.jpg"
    //   )
    //   .then((res) => {
    //     console.log("success" + res);
    //   })
    //   .catch((err) => {
    //     console.log("error" + err);
    //   });
  };

  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  // app.models
  //   .predict(
  //     {
  //       id: "face-detection",
  //       name: "face-detection",
  //       version: "6dc7e46bc9124c5c8824be4822abe105",
  //       type: "visual-detector",
  //     },
  //     this.state.input
  //   )
  //   .then((response) => {
  //     console.log("hi", response);
  //     if (response) {
  //       fetch("http://localhost:3000/image", {
  //         method: "put",
  //         headers: { "Content-Type": "application/json" },
  //         body: JSON.stringify({
  //           id: this.state.user.id,
  //         }),
  //       })
  //         .then((response) => response.json())
  //         .then((count) => {
  //           this.setState(Object.assign(this.state.user, { entries: count }));
  //         });
  //     }
  //     this.displayFaceBox(this.calculateFaceLocation(response));
  //   })
  //   .catch((err) => console.log(err));

  return (
    <div className="App">
      <Particles
        className="particles"
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={Option}
      />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm
        onInputChange={onInputChange}
        onButtonSubmit={onButtonSubmit}
      />
      <FaceRecognition imgUrl={imageUrl} />
    </div>
  );
}

export default App;
