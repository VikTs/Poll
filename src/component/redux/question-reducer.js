const VALIDATE_ALL_INPUT = 'VALIDATE-ALL-INPUT';

let initialState = {
  pollQuestions: [
    {
      question:
        `The rigid, outermost shell of a terrestrial-type 
          planet, or natural satellite, that is defined by 
          its rigid mechanical properties`, // input
      answer: 'lithosphere ',
      inputValue: ''
    },
    {
      question: `The largest city in Europe is ...`, // select
      answer: 'Istanbul',
      values: ['Madrid', 'Moscow', 'Istanbul', 'London'],
      inputValue: ''
    },
    {
      question: `The capital of Scotland is ...`, // input
      answer: 'Edinburgh ',
      inputValue: ''
    },
    {
      question: `The population of Ukraine is ... mln`, // radio
      answer: '42',
      values: ['38', '40', '42', '44'],
      inputValue: ''
    },
    {
      question: `Choose 2 highest mountains in Ukraine`, //checkbox
      answer: [
        'Hoverla', 'Brebeneskul'
      ],
      values: ['Hoverla', 'Pip Ivan', 'Petros', 'Brebeneskul'],
      inputValue: ''
    }
  ],
  isTrue: false
}

const validateAnswerReducer = (state = initialState, action) => {
  switch (action.type) {
    case VALIDATE_ALL_INPUT:
    let inputValue = action.inputValue;
      return {
        ...state,
        pollQuestions: state.pollQuestions.map(u => {
          // if (u.id === action.userId) {
          //     return { ...u, followed: true }
          // }
          let newState = { ...u, inputValue: 'inputValue' }
          // console.log(state)
          // debugger;
          return newState;
        })
      };

  }
  return state
}




export const validateAllAnswersCreator = (inputValue) => {
  return {
    type: VALIDATE_ALL_INPUT,
    inputValue
  }
}



// store.dispatch(changeAge)
// console.log(state)

export default validateAnswerReducer