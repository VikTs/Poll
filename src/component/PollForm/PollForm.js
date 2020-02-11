import React from 'react';
import { Input } from '../AnswerInputForms/AnswerInputForms'
import { reduxForm, Field } from 'redux-form'
import style from './PollForm.module.css'
import { useHistory } from 'react-router-dom';

const formStartName = 'Question'

const PollForm = (props) => {
  let questions = props.pollQuestions.map((q, i) => {
    return (
      <Field name={`${formStartName}${i + 1}`}
        question={<p> {`${q.questionNumber}. ${q.question}`} </p>}
        component={q.type}
        values={q.values ? q.values : null}
        placeholder={q.type === Input ? 'Enter answer' : null}
        key={i}
      />)
  })

  return (
    <form onSubmit={props.handleSubmit}>
      {questions}
      <button type='submit'
        className={style.submit}> Send answers</button>
      <button className={style.clean} onClick={
        function (e) { props.cleanForm('poll'); e.preventDefault(); }
      }> Clean</button>
    </form>
  )
}

const PollReduxForm = reduxForm({ form: 'poll' })(PollForm)

const Poll = (props) => {
  const history = useHistory()
  const onSubmit = (formData) => {
    localStorage.setItem('formData', JSON.stringify(formData));
    let countAnsweredQuestion = Object.keys(formData)
      .map(e => e.match(/\d+/)[0])
      .filter((value, index, self) => self.indexOf(value.trim()) === index);
    if (countAnsweredQuestion.length < props.questionsCount) {
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

