import React, { useEffect, useState } from "react";

export default function Questions(props) {
  const { question, correct, choice, checkAnswers, setCorrectAnswers } = props;

  let mergedArray = [...choice, correct];

  const [selected, setSelected] = useState([false, false, false, false]);

  function handleClick(index) {
    if (!checkAnswers) {
      setSelected((prevSelect) => {
        const newSelected = [...prevSelect];
        newSelected[index] = !newSelected[index];
        return newSelected;
      });
    }
  }

  useEffect(() => {
    if (checkAnswers) {
      let count = 0;
      mergedArray.forEach((answer, index) => {
        if (selected[index] && answer === correct) {
          count = count + 1;
        }
      });
      setCorrectAnswers(count);
    }
  }, [checkAnswers, correct, mergedArray, selected, setCorrectAnswers]);

  return (
    <div className="questions">
      <div className="question--body">{question}</div>
      <div className="multiple">
        {mergedArray.map((answer, index) => (
          <span
            key={index}
            className="span1"
            onClick={() => handleClick(index)}
            style={
              selected[index]
                ? checkAnswers && answer === correct
                  ? { background: "#94D7A2", border: "none" }
                  : checkAnswers && answer !== correct
                  ? { background: "#F8BCBC", border: "none" }
                  : { background: "#d6dbf5", border: "none" }
                : { background: "white", border: "0.79px solid #4d5b9e" }
            }
          >
            {answer}
          </span>
        ))}
      </div>
      <span className="line"></span>
    </div>
  );
}
