const SET_IS_VISIBLE = 'SET-IS-VISIBLE';
const COUNT_ANSWERS = 'COUNT-ANSWERS';

let initialState = {
  isVisible: false,
  //redirect: false,
  warningMessage: `Every uchecked answer is incorrect. Do you want to continue?`
}

const setIsVisibleReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IS_VISIBLE:
      return {
        ...state,
        isVisible: action.isVisible
      };
    case COUNT_ANSWERS:
      alert('count');
      return {
        ...state
      };

      
    default: return state
  }
}

export const setIsVisibleCreator = (isVisible) => {
  return {
    type: SET_IS_VISIBLE,
    isVisible
  }
}

export const countAnswersCreator = () => {
  return {
    type: COUNT_ANSWERS
  }
}



export default setIsVisibleReducer