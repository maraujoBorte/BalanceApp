import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import animationData from "../../lotties/coin.json";

const Coin: React.FC = () => {
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

export default Coin;
