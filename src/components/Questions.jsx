import React, { useState } from "react";

export default function Questions(props) {
  const arrays = document.querySelector(".multiple");

  arrays.forEach((choice) => {
    const p = document.createElement("span");
    p.textContent = choice;
  });

  return (
    <div>
      <div className="quiz">
        <div className="questions">
          <div className="question--body">{props.question}</div>
          <div className="multiple">
            {props.correct}
            {props.choice}
          </div>
        </div>
      </div>
    </div>
  );
}
