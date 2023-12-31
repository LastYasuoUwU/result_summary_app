import React from "react";
import "./styles.scss";
import StateComponent from "./components/stateComponent";
import data from "../../../../data.json";

type Props = {};

export default function RightSide({}: Props) {
  console.log("data:", data[0].icon);
  return (
    <div className="mainRight">
      <div className="titleRight">
        <p>Summary</p>
      </div>
      <div className="statesContainer">
        <StateComponent
          img={data[0].icon}
          altImg={data[0].category}
          title={data[0].category}
          note={data[0].score}
          props={"firstBackground"}
        />
        <StateComponent
          img={data[1].icon}
          altImg={data[1].category}
          title={data[1].category}
          note={data[1].score}
          props={"secondBackground"}
        />
        <StateComponent
          img={data[2].icon}
          altImg={data[2].category}
          title={data[2].category}
          note={data[2].score}
          props={"thirdBackground"}
        />
        <StateComponent
          img={data[3].icon}
          altImg={data[3].category}
          title={data[3].category}
          note={data[3].score}
          props={"fourthBackground"}
        />
      </div>
      <button type="button" className="button">
        Continue
      </button>
    </div>
  );
}
