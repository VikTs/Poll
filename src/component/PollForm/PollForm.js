import React from 'react';
import { Input, Select, Radio, Checkbox } from '../AnswerInputForms/AnswerInputForms'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux';
import { saveAllAnswersCreator } from '../redux/question-reducer';
import { reset } from 'redux-form';
import { setIsVisibleCreator } from '../redux/warning-reducer';

const PollForm = (props) => {
  let questions = props.pollQuestions.map((q) =>
    <p> {`${q.questionNumber}. ${q.question}`} </p>)
    
  return (
    <form onSubmit={props.handleSubmit}>
      <Field placeholder={'Enter answer'} name={'Question1'}
        question={questions[0]}
        component={Input} />
      <Field name={'Question2'}
        question={questions[1]}
        values={props.pollQuestions[1].values}
        component={Select} />
      <Field placeholder={'Enter answer'} name={'Question3'}
        question={questions[2]}
        component={Input} />
      <Field name={'Question4'}
        question={questions[3]}
        values={props.pollQuestions[3].values}
        component={Radio} />
      <Field name={'Question5'}
        question={questions[4]}
        values={props.pollQuestions[4].values}
        component={Checkbox} />
      <button> Send answers</button>
      <button onClick={() => props.cleanForm('poll')}> Clean</button>
    </form>
  )
}

const PollReduxForm = reduxForm({ form: 'poll' })(PollForm)

const Poll = (props) => {
  const onSubmit = (formData) => {
    localStorage.setItem('formData', JSON.stringify(formData));
    props.setIsVisible(true)
  }
  return (<>
    <PollReduxForm {...props} onSubmit={onSubmit} />
  </>
  )
}

const mapStateToProps = (state) => ({
  pollQuestions: state.question.pollQuestions,
  isAgree: state.question.isAgree
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

