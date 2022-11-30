import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import animationData from "../../lotties/money-home.json"

const MoneyHome: React.FC = () => {
  return (
    <Player
      autoplay
      loop
      src={animationData}
      style={{
        height: "100%",
        width: "85%",
      }}
    />
  );
};

export default MoneyHome;
