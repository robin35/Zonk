import React from "react";

export function RandomNumber () {
    let num= Math.floor((Math.random() * 500) + 1);
    return (
        <div>
          {num}          
        </div>
    );
}

export function Zonk() {
return (
    <h4>Zonk</h4>
);
}

