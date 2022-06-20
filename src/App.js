import React, { useState } from 'react';
import './App.css';
//import TimesForm from './timesForm';
import Inputs from "./inputs";
import TimesForm from './TimesForm';
import Results from "./result";

function App() {
  const [number, setNumber] = useState();
  const [jInp, setJinp] = useState([]);
  const [media, setMedia] = useState();
  const [mediana, setMediana] = useState();
  // const [qtd, setQtd] = useState(number);
  // function updateNumber(){
  //   setNumber(qtd);
  // }

  // const handleChange = event => {
  //   setQtd(event.target.value);
  // };

  if (number>0){
    
    return (
      <div id='main'>
        <div id="containerAll">
        <TimesForm number={number} setNumber={setNumber}/>
        <Inputs number={number} setJinp={setJinp} setMedia={setMedia} setMediana={setMediana}/>  
        <Results jInp={jInp} media={media} mediana={mediana}/>
        </div>
        
      </div>
    );
  } else {
    
    return(
      <div id='main'>
        <div id="containerAll">
          <TimesForm number={number} setNumber={setNumber}/>
          
        </div>
      </div>
    );
  }
  
}

export default App;
