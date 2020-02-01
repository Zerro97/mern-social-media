import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from "./components/navbar"

import SignUp from "./routes/signup.jsx";
import LogIn from "./routes/login.jsx";
import Home from "./routes/home.jsx";

import Images from "./routes/images.jsx";
import Videos from "./routes/videos.jsx";
import Audios from "./routes/audios.jsx";

import ImagesCreate from "./routes/images_create.jsx";
import VideosCreate from "./routes/videos_create.jsx";
import AudiosCreate from "./routes/audios_create.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      
      <Route path="/home" component={Home} />
      <Route path="/login" component={LogIn} />
      <Route path="/signup" component={SignUp} />

      <Route path="/audios" component={Audios} />
      <Route path="/videos" component={Videos} />
      <Route path="/images" component={Images} />

      <Route path="/audios_create" component={AudiosCreate} />
      <Route path="/videos_create" component={VideosCreate} />
      <Route path="/images_create" component={ImagesCreate} />
    </Router>
  );
}

export default App;