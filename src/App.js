import React from 'react';
import './App.css';
import TimesForm from './timesForm';
import Inputs from "./inputs";
import Results from "./result";

function App() {
  return (
    <div id='main'>
      <div id="containerAll">
        <TimesForm />
        <Inputs/>
        <Results/>
      </div>


    </div>
  );
}

export default App;
