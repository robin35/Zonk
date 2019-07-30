import React from "react";
import { RandomNumber, Zonk } from "./Math"
import { Container, Row, Col } from "../components/Grid";
import Yoda from "../images/yoda.jpg";
import Empire from "../images/empire.jpg";
import Rebelion from "../images/rebelion.png";
import StormTrooper from "../images/stormtrooper.jpg";
import StarWars from "../images/starwars.jpg";
import DarthVarder from "../images/darthvader.jpg";

export function MissedQuestion () {
    return (
        <div className="incorrect">
            
        </div>
    )
}

export function TotalPoints () {
    let points = 0;
    if("getpoints" === RandomNumber) {
       points = points + RandomNumber;
    } else if ("getpoints" === Zonk){
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
        <Container >
            <Row>
        
             <div className="score align-right">
                Total Points <TotalPoints/>
            </div>
        </Row>
        <Row>
            <Col size="md-6">
                <h3>Quiz</h3>
            </Col>
            <Col size="md-6">
        <div className="table">
            <table>
                <tr>
                    <th>
                        <div className="hide-on-click">
                            <button className="getpoints"><img src={Yoda} alt="yoda" width="75" height="75"/></button>
                       <RandomNumber/>
                       </div>
                    </th>
                    <th>
                    <button className="getpoints"><img src={StormTrooper} alt="stormtrooper" width="75" height="75"/></button>
                        <RandomNumber/>
                    </th>
                    <th>
                    <button className="getpoints"><img src={Empire}  alt="empire" width="75" height="75"/></button>
                        <RandomNumber/>
                    </th>
                    <th>
                    <button className="getpoints"><img src={Rebelion}  alt="rebelion" width="75" height="75"/></button>
                        <RandomNumber/>
                    </th>
                    <th>
                    <button className="getpoints"><img src={StarWars}  alt="starwars" width="75" height="75"/></button>
                        <RandomNumber/>
                    </th>
                    <th>
                    <button className="getpoints"><img src={DarthVarder} alt="darthvarder" width="75" height="75"/></button>
                        <RandomNumber/>
                    </th>
                </tr>
                <tr>
                    <th>
                    <button className="getpoints"><img src={DarthVarder} alt="darthvarder" width="75" height="75"/></button>
                        <RandomNumber/>
                    </th>
                    <th>
                    <button className="getpoints"><img src={StarWars}  alt="starwars" width="75" height="75"/></button>
                        <RandomNumber/>
                    </th>
                    <th>
                    <button className="getpoints"><img src={StormTrooper} alt="stormtrooper" width="75" height="75"/></button>
                        <RandomNumber/>
                    </th>
                    <th>
                    <button className="getpoints"><img src={Yoda} alt="yoda" width="75" height="75"/></button>
                        <RandomNumber/>
                    </th>
                    <th>
                    <button className="getpoints"><img src={Rebelion}  alt="rebelion" width="75" height="75"/></button>
                        <RandomNumber/>
                    </th>
                    <th>
                    <button className="getpoints"><img src={Empire}  alt="empire" width="75" height="75"/></button>
                        <RandomNumber/>
                    </th>
                </tr>
                <tr>
                    <th>
                    <button className="getpoints"><img src={Empire}  alt="empire" width="75" height="75"/></button>
                        <RandomNumber/>
                    </th>
                    <th>
                    <button className="getpoints"><img src={Rebelion}  alt="rebelion" width="75" height="75"/></button>
                        <RandomNumber/>
                    </th>
                    <th>
                    <button className="getpoints"><img src={DarthVarder} alt="darthvarder" width="75" height="75"/></button>
                        <RandomNumber/>
                    </th>
                    <th>
                    <button className="getpoints"><img src={StarWars}  alt="starwars" width="75" height="75"/></button>
                        <RandomNumber/>
                    </th>
                    <th>
                    <button className="getpoints"><img src={Yoda} alt="yoda" width="75" height="75"/></button>
                        <RandomNumber/>
                    </th>
                    <th>
                    <button className="getpoints"><img src={StormTrooper} alt="stormtrooper" width="75" height="75"/></button>
                        <RandomNumber/>
                    </th>
                </tr>
                <tr>
                    <th>
                    <button className="getpoints"><img src={StormTrooper} alt="stormtrooper" width="75" height="75"/></button>
                        <RandomNumber/>
                    </th>
                    <th>
                    <button className="getpoints"><img src={Yoda} alt="yoda" width="75" height="75"/></button>
                        <RandomNumber/>
                    </th>
                    <th>
                    <button className="getpoints"><img src={Empire} alt="empire" width="75" height="75"/></button>
                        <RandomNumber/>
                    </th>
                    <th>
                    <button className="getpoints"><img src={Rebelion}  alt="rebelion" width="75" height="75"/></button>
                        <RandomNumber/>
                    </th>
                    <th>
                    <button className="getpoints"><img src={DarthVarder} alt="darthvarder" width="75" height="75"/></button>
                        <RandomNumber/>
                    </th>
                    <th>
                    <button className="getpoints"><img src={StarWars}  alt="starwars" width="75" height="75"/></button>
                        <RandomNumber/>
                    </th>
                </tr>
            </table>
        </div>
            </Col>
        </Row>
    </Container>
    );
}

