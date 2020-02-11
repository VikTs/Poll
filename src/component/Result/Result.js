import React from 'react';
import { } from "../redux/question-reducer";
import style from './Result.module.css'

const Result = (props) => {
  let resultInPercent = props.countTrueAnswers / props.questionsCount
  let resultMessage = resultInPercent > 0.8 ? '5' :
    resultInPercent > 0.6 ? '4' :
      resultInPercent > 0.4 ? '3' :
        resultInPercent > 0.2 ? '2' : '1';

  let rightAnswersObj = {};
  Object.values(props.pollQuestions).forEach((e) => rightAnswersObj[e.questionNumber] = e.answer)
  let rightAnswers = Object.values(rightAnswersObj).map((e, ind) => {
    let answer = Array.isArray(e) ? e.join(', ') : e
    return (<div key={ind}> <p>{ind + 1}){answer}</p> </div>)
  })
  return (
    <div className={style.resultBody}>
      <h3 className={style.result}>
        Your mark: {resultMessage} <br />
        Your result: {props.countTrueAnswers} / {props.questionsCount}
      </h3>
      <div className={style.rightAnswers}>
        <p className={style.rightAnswersHeader}>Right answers</p>
        <div>{rightAnswers}</div>
      </div>
      <button onClick={refreshPage}>Try again</button>
    </div>
  )
}

const refreshPage = () => {
  window.location.reload();
  localStorage.removeItem('formData')
}

export default Result