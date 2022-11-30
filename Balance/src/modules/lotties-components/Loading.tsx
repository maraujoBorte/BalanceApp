import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import animationData from "../../lotties/loading.json";

const Loading: React.FC = () => {
  return (
    <Player
      autoplay
      loop
      src={animationData}
      style={{
        height: "100%",
        width: "10%",
      }}
    />
  );
};

export default Loading;
