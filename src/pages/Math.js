import React from "react";

export function RandomNumber () {
    let num= Math.floor((Math.random() * 500) + 1);
   if (num < 150) {
      return <h5>Zonk</h5>;
   } else {
      return num;
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

