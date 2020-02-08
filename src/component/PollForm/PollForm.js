import React from 'react';
import { Input, Select, Radio, Checkbox } from '../AnswerInputForms/AnswerInputForms'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux';
import { validateAllAnswersCreator } from '../redux/question-reducer';
import store from '../redux/redux-store';

const PollForm = (props) => {
  let questions = props.pollQuestions.map((q, ind) => <p> {ind + 1}.{q.question} </p>)
  return (
    <form onSubmit={props.handleSubmit}>
      <Field placeholder={'Enter answer'} name={'first'}
        question={questions[0]}
        component={Input} />
      <Field name={'second'}
        question={questions[1]}
        values={props.pollQuestions[1].values}
        component={Select} />
      <Field name={'third'}
        question={questions[2]}
        component={Input} />
      <Field name={'forth'}
        question={questions[3]}
        values={props.pollQuestions[3].values}
        component={Radio} />
      <Field name={'forth'}
        question={questions[4]}
        values={props.pollQuestions[4].values}
        component={Checkbox} />
      <button> Send answers</button>
    </form>
  )
}

const PollReduxForm = reduxForm({ form: 'poll' })(PollForm)

const Poll = (props) => {
  const onSubmit = (formData) => {
    console.log(formData);
}
  return (<>
    <PollReduxForm {...props} onSubmit={onSubmit} />
  </>
  )
}

//const warningMessage = 'Every uchecked answer is incorrect. Do you want to continue?'
// const WarningWindow = (props) => {
//     function click () {
//         alert('clicked Yes')
//     }
//   return (
//   <div>
//       {props.warningMessage}
//       <button onClick={click}>Yes</button>
//       <button onClick={click}>No</button>
//   </div>
//   )
// }

const mapStateToProps = (state) => ({
  //isTrue: state.question.pollQuestions.isTrue,
  pollQuestions: state.question.pollQuestions
})

let mapDispatchToProps = (dispatch) => {
  return {
    validateAnswer: (inputText) => {
      dispatch(validateAllAnswersCreator(inputText));
    },
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Poll)

