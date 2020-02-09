import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import PollPage from './component/PollPage/PollPage';
import ResultContainer from './component/Result/ResultContainer';
import { Redirect } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Redirect to="/poll" />
      <Route path='/poll' component={PollPage} />
      <Route path='/result' component={ResultContainer} />
      </BrowserRouter>
    </div>
  );
}


export default App;
