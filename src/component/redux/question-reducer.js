const VALIDATE_ALL_INPUT = 'VALIDATE-ALL-INPUT';

let initialState = {
  pollQuestions: [
    {
      question:
        `The rigid, outermost shell of a terrestrial-type 
          planet, or natural satellite, that is defined by 
          its rigid mechanical properties`, // input
      answer: 'lithosphere',
      inputValue: '',
      questionNumber: 1,
      type: 'input'
    },
    {
      question: `The largest city in Europe is ...`, // select
      answer: 'Istanbul',
      values: ['Madrid', 'Moscow', 'Istanbul', 'London'],
      inputValue: '',
      questionNumber: 2,
      type: 'select'
    },
    {
      question: `The capital of Scotland is ...`, // input
      answer: 'Edinburgh',
      inputValue: '',
      questionNumber: 3,
      type: 'input'
    },
    {
      question: `The population of Ukraine is ... mln`, // radio
      answer: '42',
      values: ['38', '40', '42', '44'],
      inputValue: '',
      questionNumber: 4,
      type: 'radio'
    },
    {
      question: `Choose 2 highest mountains in Ukraine`, //checkbox
      answer: [
        'Hoverla', 'Brebeneskul'
      ],
      values: ['Hoverla', 'Pip Ivan', 'Petros', 'Brebeneskul'],
      inputValue: '',
      questionNumber: 5,
      type: 'checkbox',
      inputAnswer: []
    }
  ],
  isTrue: false,
  //countTrueAnswers: 0
}

var count = 0;

const getQuestions = (state) => {
  return Object.values(state.pollQuestions)
}

const getValuesWithId = (state) => {
  let objectValues = {};
  getQuestions(state).forEach((el) => objectValues["Question" + el.questionNumber] = el.answer)
  return objectValues
}

let validateCheckbox = (input, state) => {
  for (let [keyInput, valueInput] of Object.entries(input)) { //for checkboxes
    if (valueInput === true) {      
      let newKeyAndVal = keyInput.split(/:\s*/)
      newKeyAndVal[0] = newKeyAndVal[0].replace(/[^0-9]/gim, '')
      for (let [, valueAllQuest] of Object.entries(getQuestions(state))) {
        if (valueAllQuest.questionNumber.toString() === newKeyAndVal[0]) { // if question number = 5
          //if (valueAllQuest.inputAnswer.indexOf(newKeyAndVal[1]) === -1) {
            valueAllQuest.inputAnswer.push(newKeyAndVal[1]);
          //}
          if (valueAllQuest.answer.filter
            (n => valueAllQuest.inputAnswer.indexOf(n) === -1).length === 0) { count++;}
        }
      }
    }
  }
}

let validateWithoutCheckbox = (input, values) => {
  for (let [keyInput, valueInput] of Object.entries(input)) {
    for (let [keyTrue, valueTrue] of Object.entries(values)) {
      if (keyInput === keyTrue && valueInput === valueTrue) {
        count++;
      }
    }
  }
}

const validateAnswerReducer = (state = initialState, action) => {
  switch (action.type) {
    case VALIDATE_ALL_INPUT:      

      let values = getValuesWithId(state)
      let input = action.inputValue
      validateCheckbox(input, state)
      validateWithoutCheckbox(input, values)
      console.log('Count: ' + count);

      return {
        ...state,
        pollQuestions: state.pollQuestions.map((u, ind) => {
          let newState = { ...u, inputValue: 'inputAnswers[ind]' }
          return newState;
        })
      };
    default: return state
  }
}




export const saveAllAnswersCreator = (inputValue) => {
  return {
    type: VALIDATE_ALL_INPUT,
    inputValue
  }
}

export default validateAnswerReducer