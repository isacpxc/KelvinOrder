import React from "react";
import "./App.css"

export default function timesForm(){
  return (
    <div className="AroundInputs">
      <div id="head"><h2>Quantos inputs?</h2></div>
      <form action="" method="get" id="form1">
        <input type="number" step="0.01" name="integerTimes" className="integerTimes" placeholder='How many inputs do you want?'/>
        <label htmlFor="integerTimes"></label>
        <button type="submit" id="submitTimes">Enviar</button>
      </form>
    </div>
  );
}