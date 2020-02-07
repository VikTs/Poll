import React from 'react';
import './App.css';

let pollQuestions = [
  {
    question:
      `The rigid, outermost shell of a terrestrial-type 
    planet, or natural satellite, that is defined by 
    its rigid mechanical properties`, // input
    answer: 'lithosphere ',
  },
  {
    question: `The largest city in Europe is ...`, // select
    answer: 'Istanbul',
    values: ['Madrid', 'Moscow', 'Istanbul', 'London']
  },
  {
    question: `The capital of Scotland is ...`, // input
    answer: 'Edinburgh '
  },
  {
    question: `The population of Ukraine is ... mln`, // radio
    answer: '42',
    values: ['38', '40', '42', '44']
  },
  {
    question: `Choose 2 highest mountains in Ukraine`, //checkbox
    answer: [
      'Hoverla', 'Brebeneskul'
    ],
    values: ['Hoverla', 'Pip Ivan', 'Petros', 'Brebeneskul']
  }
]

let questions = pollQuestions.map((q, ind) => <p> {ind + 1}.{q.question} </p>)

function App() {
  return (
    <div className="App">
      <h1>Poll</h1>
      <form className='pollBody'>
        <Input question={questions[0]} />
        <Select question={questions[1]} values={pollQuestions[1].values} />
        <Input question={questions[2]} />
        <Radio question={questions[3]} values={pollQuestions[3].values} />
        <Checkbox question={questions[4]} values={pollQuestions[4].values} />
        <button >Send answers</button>
      </form>
    </div>
  );
}


const Input = (props) => {
  return (
    <div>
      {props.question}
      <input type='text'></input>
    </div>
  )
}

const Select = (props) => {
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

const Radio = (props) => {
  let radioValues = props.values.map((e, ind) => <><input type="radio" name="population" /> {e} <br /></>)
  return (
    <div>
      {props.question}
      {radioValues}
    </div>
  )
}

const Checkbox = (props) => {
  let checkboxValues = props.values.map((e, ind) => <><input type="checkbox" name="population" /> {e} <br /></>)
  return (
    <div>
      {props.question}
      {checkboxValues}
    </div>
  )
}

export default App;
