import React from "react";
import Body from "../../styles/components/Citrouille/Body";
import EyeLeft from "../../styles/components/Citrouille/EyeLeft";
import EyeRight from "../../styles/components/Citrouille/EyeRight";
import Eyes from "../../styles/components/Citrouille/Eyes";
import Smile from "../../styles/components/Citrouille/Smile";
import Stem from "../../styles/components/Citrouille/Stem";

const Citrouille = () => {
  return (
    <React.Fragment>
      <Body>
        <Stem />
        <EyeLeft />
        <EyeRight />
        <Smile />
      </Body>
    </React.Fragment>
  );
};

export default Citrouille;
