import React, { useState } from "react";

export default function Questions(props) {
  //   const [choose, setChoose] = useState(props.choice);
  //   const [correct, setCorrect] = useState(props.correct);
  const mergedArray = [...props.choice, props.correct];
  //   const containerElement = document.getElementsByClassName("multiple");
  //   console.log(mergedArray);

  // for(let i = 0; i< mergedArray.length; i++){
  // let spanElement = document.createElement("span");
  // spanElement.innerHTML = mergedArray[i];
  //     //   containerElement..
  //   }

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
    <div className="questions">
      <div className="question--body">{props.question}</div>
      <div className="multiple">
        <span className="span1">{mergedArray[0]}</span>
        <span className="span1">{mergedArray[1]}</span>
        <span className="span1">{mergedArray[2]}</span>
        <span className="span1">{mergedArray[3]}</span>
      </div>
      <span className="line"></span>
    </div>
  );
}
