import React from 'react';
import {  } from "../redux/question-reducer";
import style from './Result.module.css'

const Result = (props) => {
  let resultInPercent = props.countTrueAnswers/props.questionsCount
  // let resultMessage = (if(resultInPercent){return 'qwe'})
  let resultMessage = resultInPercent>0.8 ? '5': 
                      resultInPercent>0.6 ? '4':
                      resultInPercent>0.4 ? '3':
                      resultInPercent>0.2 ? '2': '1'
  return (
    <div className={style.resultBody}>

      <p className={style.result}>
        Your mark: {resultMessage} <br/>
        Right answers: {props.countTrueAnswers} / {props.questionsCount}
      </p>
      <button onClick={ refreshPage }>Try again</button>
    </div>
  )
}

const refreshPage = () => { 
  window.location.reload(); 
}

export default Result