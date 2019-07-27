import React from "react";
import { RandomNumber, Zonk } from "./Math"


export function TotalPoints () {
    let points;
    if(RandomNumber) {
       points = points + RandomNumber;
    } else if (Zonk){
        points = 0;
    } else {
        points = 0;
    }

    return (
        <div className="points">
            <h3>{points}</h3>
        </div>
        ) 
}
// points board will have 25 options
export function PointBoard () {
    return (
        <Container>
        <div className="table">
            <table>
                <tr>
                    <th>
                        {RandomNumber}
                    </th>
                    <th>
                        {Zonk}
                    </th>
                    <th>
                        {RandomNumber}
                    </th>
                    <th>
                        {RandomNumber}
                    </th>
                    <th>
                        {RandomNumber}
                    </th>
                </tr>
                <tr>
                    <th>
                        {Zonk}
                    </th>
                    <th>
                        {RandomNumber}
                    </th>
                    <th>
                        {RandomNumber}
                    </th>
                    <th>
                        {RandomNumber}
                    </th>
                    <th>
                        {RandomNumber}
                    </th>
                </tr>
                <tr>
                    <th>
                        {RandomNumber}
                    </th>
                    <th>
                        {RandomNumber}
                    </th>
                    <th>
                        {RandomNumber}
                    </th>
                    <th>
                        {RandomNumber}
                    </th>
                    <th>
                        {Zonk}
                    </th>
                </tr>
                <tr>
                    <th>
                        {RandomNumber}
                    </th>
                    <th>
                        {RandomNumber}
                    </th>
                    <th>
                        {RandomNumber}
                    </th>
                    <th>
                        {Zonk}
                    </th>
                    <th>
                        {RandomNumber}
                    </th>
                </tr>
                <tr>
                    <th>
                        {RandomNumber}
                    </th>
                    <th>
                        {RandomNumber}
                    </th>
                    <th>
                        {Zonk}
                    </th>
                    <th>
                        {RandomNumber}
                    </th>
                    <th>
                        {RandomNumber}
                    </th>
                </tr>
            </table>
        </div>
        </Container>
    );
}

