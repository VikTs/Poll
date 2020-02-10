import React from 'react';
import { Input, Select, Radio, Checkbox } from '../AnswerInputForms/AnswerInputForms'
import { reduxForm, Field } from 'redux-form'
import style from './PollForm.module.css'
import { required } from '../validators/validators'
import { useHistory } from 'react-router-dom';

const formStartName = 'Question'
const PollForm = (props) => {
  let questions = props.pollQuestions.map((q) =>
    <p> {`${q.questionNumber}. ${q.question}`} </p>)

  return (

    <form onSubmit={props.handleSubmit}>
      <Field placeholder={'Enter answer'} name={`${formStartName}1`}
        validate={[required]}
        question={questions[0]}
        component={Input} />
      <Field name={`${formStartName}2`}
        question={questions[1]}
        values={props.pollQuestions[1].values}
        component={Select} />
      <Field placeholder={'Enter answer'} name={`${formStartName}3`}
        question={questions[2]}
        component={Input} />
      <Field name={`${formStartName}4`}
        question={questions[3]}
        values={props.pollQuestions[3].values}
        component={Radio} />
      <Field name={`${formStartName}5`}
        question={questions[4]}
        values={props.pollQuestions[4].values}
        component={Checkbox} />
      <button type='submit' 
      className={style.submit}> Send answers</button>
      <button className={style.clean} onClick={
        function (e) { props.cleanForm('poll'); e.preventDefault(); }
      }> Clean</button>
    </form>
  )
}

const PollReduxForm = reduxForm({
  form: 'poll', touchOnBlur: false,
  shouldValidate: params => {
    if (!params.props.submitting) {
      return false;
    }
    return true;
  }
})(PollForm)

const Poll = (props) => {
  const history = useHistory()
  const onSubmit = (formData) => {
    localStorage.setItem('formData', JSON.stringify(formData));
    let countAnsweredQuestion = Object.keys(formData)
      .map(e => e.match(/\d+/)[0])
      .filter((value, index, self) => self.indexOf(value.trim()) === index);
    if (countAnsweredQuestion.length > props.questionsCount) {
      props.setIsVisible(true);
    } else {
      props.validateAnswer(JSON.parse(localStorage.getItem('formData')));
      props.cleanForm('poll')
      history.push('/result')
    }

  }
  return (<>
    <PollReduxForm {...props} onSubmit={onSubmit} />
  </>
  )
}

export default Poll

