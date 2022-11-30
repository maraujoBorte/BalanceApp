import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import animationData from "../../lotties/page404.json";

const Player404: React.FC = () => {
  return (
    <Player
      autoplay
      loop
      src={animationData}
      style={{
        height: "100%",
        width: "100%",
      }}
    />
  );
};

export default Player404;
