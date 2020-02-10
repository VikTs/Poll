import { connect } from 'react-redux';
import { saveAllAnswersCreator } from '../redux/question-reducer';
import { reset } from 'redux-form';
import { setIsVisibleCreator } from '../redux/warning-reducer';
import Poll from './PollForm';

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

