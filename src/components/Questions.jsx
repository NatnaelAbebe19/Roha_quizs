import React, { useState } from "react";

export default function Questions(props) {
  return (
    <div>
      <div className="quiz">
        <div className="questions">{props.question}</div>
      </div>
    </div>
  );
}
