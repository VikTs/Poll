import { connect } from 'react-redux';
import {  } from "../redux/question-reducer";
import Result from './Result';

const mapStateToProps = (state) => ({
  countTrueAnswers: state.question.countTrueAnswers,
  questionsCount: state.question.questionsCount
})

export default connect(mapStateToProps)(Result)