import React, { useState } from "react";
import "./App.css"

function TimesForm(props){
  const [qtd, setQtd] = useState(0);
  function updateNumber(){
    props.setNumber(document.getElementById('qtd').value);
  }

  function changeDef(e){
    props.setNumber(0);
  }
  return (
    <div className="AroundInputs">
            <div id="head"><h2>Quantas Temperaturas?</h2></div>
            <div id="form1">
              <input type="number" name="integerTimes" className="integerTimes" placeholder='Insira aqui' id="qtd" onChange={changeDef}/>
              <button id="submitTimes" onClick={updateNumber}>Enviar</button>
            </div>
          </div>
  );
}

export default TimesForm;