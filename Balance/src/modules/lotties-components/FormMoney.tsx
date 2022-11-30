import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import animationData from "../../lotties/form-money.json";

const FormMoney: React.FC = () => {
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

export default FormMoney;
