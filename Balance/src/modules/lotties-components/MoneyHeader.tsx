import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import animationData from "../../lotties/money-header.json"

const MoneyHeader: React.FC = () => {
  return (
    <Player
      autoplay
      loop
      src={animationData}
      style={{
        height: "100%",
        width: "150%",
      }}
    />
  );
};

export default MoneyHeader;
