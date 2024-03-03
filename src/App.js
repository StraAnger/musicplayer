import React from "react";
import "./index.css"
import Songs from "./Songs";
import imgGroup1 from "./images/Group 1.png";
import imgGroup4 from "./images/Group 4.png";
import imgLogo from "./images/logo.png";
import imgNavbar from "./images/Navbar.png";
import imgNext from "./images/Next.png";
import imgPrevious from "./images/Previous.png";
import imgPlayer from "./images/Player.png";

export default function App() {

  return (
    <div>
      <img src={imgGroup1} alt="Error" className="group1"></img>
      <img src={imgGroup4} alt="Error" className="group4"></img>
      <img src={imgLogo} alt="Error" className="Logo"></img>
      <img src={imgNavbar} alt="Error" className="Navbar"></img>
      <img src={imgNext} alt="Error" className="Next"></img>
      <img src={imgPrevious} alt="Error" className="Previous"></img>
      <img src={imgPlayer} alt="Error" className="Player"></img>      
      <Songs />
    </div>
  );
}