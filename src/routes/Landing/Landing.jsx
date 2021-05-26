import React from "react";
import Links from "./Links";
import TopRippleCutout from "../../components/Cutouts/TopRippleCutout";
import BottomRippleCutout from "../../components/Cutouts/BottomRippleCutout";

const Landing = () => {
  return (
    <div className="pr-landing">
      <span className="pr-landing__title">Hi, I'm Pragyakar!</span>
      <Links />
      <TopRippleCutout />
      <BottomRippleCutout />
    </div>
  );
};

export default Landing;
