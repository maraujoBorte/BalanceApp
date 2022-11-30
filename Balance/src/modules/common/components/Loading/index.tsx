import React, { useEffect } from "react";
import { useLoading } from "../../../../contexts/Loading";
import { default as LoadingLottie } from "../../../lotties-components/Loading";
import { LoadingBackground } from "./styles";

interface Props {
  className?: string;
}

const Loading: React.FC<Props> = (props) => {
  const { state, dispatch } = useLoading();

  useEffect(() => {
    if (state.show) {
      const timer = setTimeout(() => {
        dispatch({ type: "SET_LOADING", payload: { show: false } });
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [state, dispatch]);

  if (state.show)
    return (
      <LoadingBackground className={props.className} id="Loading">
        <LoadingLottie />
      </LoadingBackground>
    );
  else return null;
};

export default Loading;
