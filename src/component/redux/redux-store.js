import { createStore, combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form'
import questionReducer from './question-reducer'
import warningReducer from './warning-reducer'

let reducers = combineReducers ({
    warning: warningReducer,
    question: questionReducer,
    form: formReducer 
})

let store = createStore(reducers);
window.store = store;

export default store;