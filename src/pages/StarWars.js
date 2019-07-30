import React from "react";
import { RandomNumber, Zonk } from "./Math"
import { Container, Row, Col } from "../components/Grid";
import Yoda from "../images/yoda.jpg";
import Empire from "../images/empire.jpg";
import Rebelion from "../images/rebelion.png";
import StormTrooper from "../images/stormtrooper.jpg";
import StarWars from "../images/starwars.jpg";
import DarthVarder from "../images/darthvader.jpg";
import { TotalPoints, PointBoard } from "./Points";

// export function MissedQuestion () {
//     return (
//         <div className="incorrect">
            
//         </div>
//     )
// }


// points board will have 25 options
 function StarWarsBoard () {
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

export default StarWarsBoard;