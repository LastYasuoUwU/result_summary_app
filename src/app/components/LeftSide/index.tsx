import React from "react";
import "./styles.scss";

type Props = {};

export default function LeftSide({}: Props) {
  return (
    <div className="mainLeft">
      <div className="titleLeft">
        <p>Your Result</p>
      </div>
      <div className="scoreDiv">
        <p className="score1">76</p>
        <p className="score2">of 100</p>
      </div>
      <div className="commentContainer">
        <p className="comment1">Great</p>
        <p className="comment2">
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </div>
    </div>
  );
}
