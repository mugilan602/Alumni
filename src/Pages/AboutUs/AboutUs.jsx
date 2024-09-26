import React from "react";
import Navbar2 from "../Navbar/Navbar2";
import VisionMission from "../Vissionmission/VisionMission";
import { Campus } from '../Campus/Campus';


const AboutUs = () => {
  return (
    <>
    <div className="bg-white">
      <Navbar2 />
      <Campus />
      <VisionMission />
      </div>
    </>
  );
};

export default AboutUs;
