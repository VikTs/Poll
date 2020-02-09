import React from 'react';
import { connect } from 'react-redux';
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


const mapStateToProps = (state) => ({
  countTrueAnswers: state.question.countTrueAnswers,
  questionsCount: state.question.questionsCount
})


export default connect(mapStateToProps)(Result)