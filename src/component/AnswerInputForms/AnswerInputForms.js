import React from 'react';


const FormsControl = ({ input, meta, ...props }) => {
  return (
    <div>
      {props.question}
      {props.children}
    </div>
  )
}

export const Input = (props) => {
  const { input, meta, ...restProps } = props;
  return <FormsControl {...props}> <input {...restProps} {...input} /> </FormsControl>
}


export const Select = (props) => {
  let selectValues = props.values.map((q, ind) => <option> {q} </option>)
  return (
    <div>
      {props.question}
      <select>
        {selectValues}
      </select>
    </div>
  )
}

export const Radio = (props) => {
  let radioValues = props.values.map((e, ind) => <><input type="radio" name="population" /> {e} <br /></>)
  return (
    <div>
      {props.question}
      {radioValues}
    </div>
  )
}

export const Checkbox = (props) => {
  let checkboxValues = props.values.map((e, ind) => <><input type="checkbox" name="population" /> {e} <br /></>)
  return (
    <div>
      {props.question}
      {checkboxValues}
    </div>
  )
}

