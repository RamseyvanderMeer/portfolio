import React from "react";
import ParticleBackground from "react-particle-backgrounds";

const settings = {
  particle: {
    particleCount: 35,
    color: "#fff",
    minSize: 1,
    maxSize: 4,
  },
  velocity: {
    minSpeed: 0.2,
    maxSpeed: 0.4,
  },
  opacity: {
    minOpacity: 0,
    maxOpacity: 0.6,
    opacityTransitionTime: 10000,
  },
};

const Background = function () {
  return <ParticleBackground settings={settings} />;
};

export default Background;
