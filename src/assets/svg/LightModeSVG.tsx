import WinterWonderSVG from "./WinterWonderSVG";
import SpringRainSVG from "./SpringRainSVG";
import { useContext } from "react";
import { StateContext } from "~/utils/ContextProvider";

const LightModeSVG = () => {
  const context = useContext(StateContext);

  switch (context.season) {
    case "Winter":
      return <WinterWonderSVG />;
    case "Spring":
      return <SpringRainSVG />;
    default:
      console.error("Invalid season");
      return null;
  }
};

export default LightModeSVG;
