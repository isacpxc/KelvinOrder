import React from "react";

export default function Results(props){
  return(
    <div className="AroundInputs">
      <div id="results">
         <h3 style={{display: "inline"}}>Temperaturas ordenadas: </h3>{props.jInp.map((a) => <h3 style={{display: "inline"}}>{a}K </h3>)}
         <br />
         <h3 style={{display: "inline"}}>Média: </h3><h3 style={{display: "inline"}}>{props.media}K</h3>
         <br />
         <h3 style={{display: "inline"}}>Mediana: </h3><h3 style={{display: "inline"}}>{props.mediana}K</h3>

      </div>
    </div>
  );
}