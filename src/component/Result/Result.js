import React from 'react';
import {  } from "../redux/question-reducer";

const Result = (props) => {
  return (
    <div>
      <p>
        Your result: {props.countTrueAnswers} / {props.questionsCount}
      </p>
    </div>
  )
}


export default Result