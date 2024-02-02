import { useState, useEffect } from "react";
import Questions from "./components/Questions";
import Data from "./assets/Data";
import "./App.css";

function App() {
  const [questions, setQuestions] = useState(Data);
  const [display, setDisplay] = useState(false);

  function handleClick() {
    setDisplay(true);
  }
  const question = questions.map((quiz) => (
    <Questions
      question={quiz.question}
      correct={quiz.correct_answer}
      choice={quiz.incorrect_answers}
    />
  ));
  return (
    <div className="container">
      {display && <div className="question--container">{question}</div>}
      {!display && (
        <div className="hero">
          <h1 className="hero--header">Quiszzical</h1>
          <p className="hero--description">
            Take the quiz and challenge your self
          </p>
          <button className="hero--btn" onClick={handleClick}>
            Start quiz
          </button>
          <div className="top-right"></div>
          <div className="bottom-left"></div>
        </div>
      )}
    </div>
  );
}

export default App;
