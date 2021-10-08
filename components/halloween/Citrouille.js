import React from "react";
import CitrouilleOne from "../../styles/components/Citrouille/CitrouilleOne";
import CitrouilleTwo from "../../styles/components/Citrouille/CitrouilleTwo";
import EyeLeft from "../../styles/components/Citrouille/EyeLeft";
import EyeRight from "../../styles/components/Citrouille/EyeRight";
import Eyes from "../../styles/components/Citrouille/Eyes";
import Smile from "../../styles/components/Citrouille/Smile";
import Stem from "../../styles/components/Citrouille/Stem";

const Citrouille = () => {
  return (
    <React.Fragment>
      <CitrouilleOne>
        <Stem />
        <EyeLeft />
        <EyeRight />
        <Smile />
      </CitrouilleOne>
      <CitrouilleTwo>
        <Stem />
        <EyeLeft />
        <EyeRight />
        <Smile />
      </CitrouilleTwo>
    </React.Fragment>
  );
};

export default Citrouille;
