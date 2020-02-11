import { connect } from 'react-redux';
import { reset } from 'redux-form';
import Poll from './PollForm';
import { saveAllAnswersCreator } from '../redux/question-reducer';
import { setIsVisibleCreator } from '../redux/warning-reducer';

const mapStateToProps = (state) => ({
  pollQuestions: state.question.pollQuestions,
  isAgree: state.question.isAgree,
  questionsCount: state.question.questionsCount
})

let mapDispatchToProps = (dispatch) => {
  return {
    validateAnswer: (inputText) => {
      dispatch(saveAllAnswersCreator(inputText));
    },
    cleanForm: (formName) => { dispatch(reset(formName)) },
    setIsVisible: (isVisible) => {dispatch(setIsVisibleCreator(isVisible))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Poll)