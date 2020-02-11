import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom'
import PollPage from './component/PollPage/PollPage';
import ResultContainer from './component/Result/ResultContainer';
import './App.css';

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
