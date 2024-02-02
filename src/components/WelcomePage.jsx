import React from "react";

export default function WelcomePage(props) {
  return (
    <div className="hero">
      <h1 className="hero--header">Quizzical</h1>
      <p className="hero--description">Take the quiz and challenge your self</p>
      <button className="hero--btn" onClick={props.handleClick}>
        Start quiz
      </button>
    </div>
  );
}
