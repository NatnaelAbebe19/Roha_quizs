import React, { useEffect, useState } from "react";

export default function Questions(props) {
  let mergedArray = [...props.choice, props.correct];
  // const shuffledArray = mergedArray.sort((a, b) => 0.5 - Math.random());
  useEffect(() => {
    function shuffleArray(array) {
      const shuffledArray = [...array];
      for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [
          shuffledArray[j],
          shuffledArray[i],
        ];
      }
      return shuffledArray;
    }
    mergedArray = shuffleArray(mergedArray);
  }, []);

  const clicked = {
    background: "#d6dbf5",
    border: "none",
  };
  const unClicked = {
    background: "white",
    border: "0.79px solid #4d5b9e",
  };

  const [selected, setSelected] = useState({
    first: false,
    second: false,
    third: false,
    fourth: false,
  });

  function handleClick1(e) {
    setSelected((prevSelect) => ({ ...prevSelect, first: !prevSelect.first }));
    selected.first
      ? (e.target.style.background = "white")(
          (e.target.style.border = "0.79px solid #4d5b9e")
        )
      : (e.target.style.background = "#d6dbf5")(
          (e.target.style.border = "none")
        );
  }
  function handleClick2(e) {
    setSelected((prevSelect) => ({
      ...prevSelect,
      second: !prevSelect.second,
    }));
    selected.second
      ? (e.target.style.background = "white")(
          (e.target.style.border = "0.79px solid #4d5b9e")
        )
      : (e.target.style.background = "#d6dbf5")(
          (e.target.style.border = "none")
        );
  }
  function handleClick3(e) {
    setSelected((prevSelect) => ({ ...prevSelect, third: !prevSelect.third }));
    selected.third
      ? (e.target.style.background = "white")(
          (e.target.style.border = "0.79px solid #4d5b9e")
        )
      : (e.target.style.background = "#d6dbf5")(
          (e.target.style.border = "none")
        );
  }
  function handleClick4(e) {
    setSelected((prevSelect) => ({
      ...prevSelect,
      fourth: !prevSelect.fourth,
    }));
    selected.fourth
      ? (e.target.style.background = "white")(
          (e.target.style.border = "0.79px solid #4d5b9e")
        )
      : (e.target.style.background = "#d6dbf5")(
          (e.target.style.border = "none")
        );
  }
  // let length = Object.keys(selected).length;

  console.log();
  return (
    <div className="questions">
      <div className="question--body">{props.question}</div>
      <div className="multiple">
        <span className="span1" onClick={handleClick1}>
          {mergedArray[0]}
        </span>
        <span className="span1" onClick={handleClick2}>
          {mergedArray[1]}
        </span>
        <span className="span1" onClick={handleClick3}>
          {mergedArray[2]}
        </span>
        <span className="span1" onClick={handleClick4}>
          {mergedArray[3]}
        </span>
      </div>
      <span className="line"></span>
    </div>
  );
}
