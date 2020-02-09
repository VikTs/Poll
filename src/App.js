import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import PollPage from './component/PollPage/PollPage';
import Result from './component/Result/Result';
import { Redirect } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Redirect to="/poll" />
      <Route path='/poll' component={PollPage} />
      <Route path='/result' component={Result} />
      </BrowserRouter>
    </div>
  );
}


export default App;
