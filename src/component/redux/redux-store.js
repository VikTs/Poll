import { createStore, combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form'
import questionReducer from './question-reducer'

let reducers = combineReducers ({
    question: questionReducer,
    form: formReducer 
})

let store = createStore(reducers);
window.store = store;

export default store;