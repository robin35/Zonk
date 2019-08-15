import React from "react";
import Egg from "../../images/egg.jpg";

export function RandomNumber (props) {
    let num= Math.floor((Math.random() * 500) + 1);
   if (num < 150) {
      return (
      <button onClick={() => {props.handleIncrement("Zonk") }} className="getpoints">
          {props.children ?  props.children : (<img src={Egg} alt="egg" width="50" height="75"/>)}
      </button>
      )
   } else {
      return (
        <button onClick={() => {props.handleIncrement(num) }} className="getpoints">
        {props.children ?  props.children : (<img src={Egg} alt="egg" width="50" height="75"/>)}
        </button>
      );
   }
    // return (
    //     <div>
    //         {num}          
    //     </div>
        
    // );
}

export function Zonk() {
return (
    <h4>Zonk</h4>
);
}

