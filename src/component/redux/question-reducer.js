const VALIDATE_ALL_INPUT = 'VALIDATE-ALL-INPUT';
const SET_AGREE = 'SET-AGREE';

let initialState = {
  pollQuestions: [
    {
      question:
        `The rigid, outermost shell of a terrestrial-type 
          planet, or natural satellite, that is defined by 
          its rigid mechanical properties`, 
      answer: 'lithosphere',
      questionNumber: 1,
      type: 'input'
    },
    {
      question: `The largest city in Europe is ...`, 
      answer: 'Istanbul',
      values: ['Madrid', 'Moscow', 'Istanbul', 'London'],
      questionNumber: 2,
      type: 'select'
    },
    {
      question: `The capital of Scotland is ...`,
      answer: 'Edinburgh',
      questionNumber: 3,
      type: 'input'
    },
    {
      question: `The population of Ukraine is ... mln`,
      answer: '42',
      values: ['38', '40', '42', '44'],
      questionNumber: 4,
      type: 'radio'
    },
    {
      question: `Choose 2 highest mountains in Ukraine`,
      answer: [
        'Hoverla', 'Brebeneskul'
      ],
      values: ['Hoverla', 'Pip Ivan', 'Petros', 'Brebeneskul'],
      questionNumber: 5,
      type: 'checkbox',
      inputAnswer: []
    }
  ],
  isAgree: false,
  countTrueAnswers: 0,
  questionsCount: 0
}

let getQuestionsCount = () => {
  initialState.questionsCount = initialState.pollQuestions.length
}
getQuestionsCount()

const validateAnswerReducer = (state = initialState, action) => {
  switch (action.type) {
    case VALIDATE_ALL_INPUT:
      let values = getValuesWithId(state)
      let input = action.inputValue
      validateCheckbox(input, state)
      validateWithoutCheckbox(input, values)
      return {
        ...state,
        countTrueAnswers: count
      };
    case SET_AGREE:
      return {
        ...state,
        isAgree: true
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

export const setAgreeCreator = () => {
  return {
    type: SET_AGREE
  }
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
  for (let [keyInput, valueInput] of Object.entries(input)) { 
    if (valueInput === true) {
      let newKeyAndVal = keyInput.split(/:\s*/)
      newKeyAndVal[0] = newKeyAndVal[0].replace(/[^0-9]/gim, '')
      for (let [, valueAllQuest] of Object.entries(getQuestions(state))) {
        let inputValue = valueAllQuest.inputAnswer;
        if (valueAllQuest.questionNumber.toString() === newKeyAndVal[0]) { 
          if (inputValue.indexOf(newKeyAndVal[1]) === -1) {
            inputValue.push(newKeyAndVal[1]);
          }
          if (valueAllQuest.answer.filter
            (n => inputValue.indexOf(n) === -1).length === 0) { count++; }
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

export default validateAnswerReducer