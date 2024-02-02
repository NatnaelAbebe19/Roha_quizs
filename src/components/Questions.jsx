import React, { useState } from "react";

export default function Questions(props) {
  const [choose, setChoose] = useState(props.choice);
  const [correct, setCorrect] = useState(props.correct);
  const mergedArray = [...choose, correct];
  const containerElement = document.getElementById("multiple");
  console.log(mergedArray);
  //   mergedArray.forEach((arr) => {
  //     const spanElement = document.createElement("span");
  //     spanElement.textContent = arr;
  //     spanElement.classList.add("chooseTheBest");
  //     containerElement.appendChild(spanElement);
  //   });
  //   function makeChange() {}
  //   makeChange();
  //   console.log();

  //   console.log(props.choice);
  //   Array.from(arrays).forEach((choice) => {
  //     const span = document.createElement("span");
  //     span.textContent = choice;
  //     document.getElementById("choose").appendChild(span);
  //   });

  return (
    <div>
      <div className="quiz">
        <div className="questions">
          <div className="question--body">{props.question}</div>
          <div id="multiple"></div>
        </div>
      </div>
    </div>
  );
}
