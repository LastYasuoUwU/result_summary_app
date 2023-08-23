import React from "react";
import "./styles.scss";
import StateComponent from "./components/stateComponent";
import iconreacton from "../../../assets/images/icon-reaction.svg";
import iconmemory from "../../../assets/images/icon-memory.svg";
import iconverbal from "../../../assets/images/icon-verbal.svg";
import iconvisual from "../../../assets/images/icon-visual.svg";

type Props = {};

export default function RightSide({}: Props) {
  return (
    <div className="mainRight">
      <div className="titleRight">
        <p>Summary</p>
      </div>
      <div className="statesContainer">
        <StateComponent
          img={iconreacton}
          altImg="Reaction image"
          title="Memory"
          note="80"
          props={"firstBackground"}
        />
        <StateComponent
          img={iconmemory}
          altImg="Memory image"
          title="Reaction"
          note="92"
          props={"secondBackground"}
        />
        <StateComponent
          img={iconverbal}
          altImg="Verbal image"
          title="Verbal"
          note="61"
          props={"thirdBackground"}
        />
        <StateComponent
          img={iconvisual}
          altImg="Visual image"
          title="Visual"
          note="72"
          props={"fourthBackground"}
        />
      </div>
      <button type="button" className="button">
        Continue
      </button>
    </div>
  );
}
