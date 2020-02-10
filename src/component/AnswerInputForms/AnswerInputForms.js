import React from 'react';
import { Field } from 'redux-form';
import { required } from '../validators/validators'
import style from './AnswerInput.module.css'

const FormsControl = ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error
  return (
    <div className={style.formControl + " " + (hasError ? style.error : "")}>
      {props.question}
      <div>
        {props.children}
      </div>
      {hasError && <span> {`Error: ${meta.error}`} </span>}
    </div>
  )
  // return (
  //   <div>
  //     {props.question}
  //     {props.children}
  //   </div>
  // )
}

export const Input = (props) => {
  const { input, meta, ...restProps } = props;
  return <FormsControl {...props}> <input type="text" {...restProps} {...input} /> </FormsControl>
}

export const Select = (props) => {
  let selectValues = props.values.map((q, ind) => <option key={ind + 1}> {q} </option>)
  selectValues.unshift(<option hidden key={0}> Choose your variant </option>)
  const { input, meta, ...restProps } = props;
  return <FormsControl {...props}> <select {...restProps} {...input}>{selectValues}</select> </FormsControl>
}

export const Radio = (props) => {
  const { input, meta, ...restProps } = props;
  let radioValues = props.values.map((e, ind) =>
    <React.Fragment key={ind}>
      <input type="radio" name="population" {...restProps} {...input} value={e} /> {e} <br />
    </React.Fragment>)
  return (<FormsControl {...props}> {radioValues} </FormsControl>)
}


export const Checkbox = (props) => {
  const { input } = props;
  let parrentName = input.name;
  let checkboxValues = props.values.map((e, ind) => <React.Fragment key={ind}>
    <Field
      name={`${parrentName}: ${e}`}
      component="input"
      type="checkbox"
      label={e}
      // onChange={value => console.log(value.target.value)}
    />
    <label htmlFor={e}> {e} </label><br />
  </React.Fragment>
  )
  return (<FormsControl {...props}> {checkboxValues} </FormsControl>)
}



