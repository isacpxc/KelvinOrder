import React, {useState, useEffect} from "react";
import './App.css';

export default function Inputs(){
  const [inputs, setInputs] = useState([]);
  useEffect(() => {
    let arr=[];
    for(let i=0;i<5;i++){
      arr.push(i);
    }
    setInputs(arr);
  },[]);

  return (
    <div className="AroundInputs">
      <div id="containerTempInput">
        <h2 id="titles">Insira as temperaturas abaixo:</h2>
        <form action="" method="get" id="form2">
          
          {
            inputs.map((id)=><input placeholder={id+"ª Temperatura"} className="integerTimes" key={id}/>)
          }
          <button type="submit" id="submitTemp">Converter</button>
          
        </form>
      </div>

    </div>
  );
}