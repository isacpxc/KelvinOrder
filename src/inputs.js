import React, {useState, useEffect} from "react";
import './App.css';

export default function Inputs(props){
  const [inputs, setInputs] = useState([]);
  useEffect(() => {
    let arr=[];
    for(let i=0;i<props.number;i++){
      arr.push(i+1);
    }
    setInputs(arr);
  },[]);

  function sendInp(e){
    e.preventDefault();
    let arr = [];
    let mediana=0;
    let media=0;
    for (let i=0;i<props.number;i++){
      arr.push(document.getElementById((i+1)).value);
      media+=arr[i]/props.number;
    }
    arr.sort((function(a,b){
      return a - b;
    }));
    if (props.number%2 == 0) mediana = (parseFloat(arr[props.number/2]) + parseFloat(arr[(props.number/2)-1]))/2;
    else mediana = parseFloat(arr[Math.ceil(props.number/2)]);

    props.setJinp(arr);
    props.setMediana(mediana.toFixed(2));
    props.setMedia(media.toFixed(2));
  }

  return (

    <div className="AroundInputs">
      <div id="containerTempInput">
        <h2 id="titles">Insira as temperaturas abaixo:</h2>
        <div action="" method="get" id="form2">
          
          {
            inputs.map((id)=><input placeholder={id+"ª Temperatura"} min="0" className="integerTimes" key={id} id={id}/>)
          }
          <button type="submit" id="submitTemp" onClick={sendInp}>Ordenar</button>
          
        </div>
      </div>

    </div>
  );
}