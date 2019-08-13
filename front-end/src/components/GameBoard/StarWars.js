import React from "react";
import { RandomNumber, Zonk } from "./Math";
import { Container, Row, Col } from "../grid/Grid";
import Yoda from "../images/yoda.jpg";
import Empire from "../images/empire.jpg";
import Rebelion from "../images/rebelion.png";
import StormTrooper from "../images/stormtrooper.jpg";
import StarWars from "../images/starwars.jpg";
import DarthVarder from "../images/darthvader.jpg";


export default class Starwars extends React.Component {
    // Setting the initial state of the Counter component
    state = {
      point: 0
    };

    totalPoints = () => {

        let points;

        if("getpoints"  === RandomNumber) {
           points = points + RandomNumber;
        } else if ("getpoints" === Zonk){
            points = 0;
        } else {
            points = 0;
        }
    
        return (
            <div className="points">
                <h3>{this.state.point}</h3>
            </div>
        ) 
    };

    handleIncrement = (num) => {
        console.log("working");
    // We always use the setState method to update a component's state
    this.setState({ point: num === "Zonk" ? 0 : (this.state.point + num) });
    };

    render() {
        return (
            <Container >

                <Row>
                    <div className="score align-right">
                        Total Points {this.totalPoints()}
                    </div>
                </Row>

                <Row>
                    <Col size="md-6">
                        <h3>Quiz</h3>
                    </Col>

                    <Col size="md-6">
                        <div className="table">

                            <tbody>
                                <tr>
                                    <th>
                                        <button className="getpoints" onClick={this.handleIncrement} ></button>
                                         <RandomNumber handleIncrement={this.handleIncrement}>
                                            <img src={Yoda} alt="yoda" width="75" height="75"/>
                                        </RandomNumber>
                                    </th>

                                    <th>
                                        <button className="getpoints" onClick={this.handleIncrement} ></button>
                                        <RandomNumber handleIncrement={this.handleIncrement}>
                                            <img src={StormTrooper} alt="stormtrooper" width="75" height="75"/>
                                        </RandomNumber>
                                    </th>

                                    <th>
                                        <button className="getpoints" onClick={this.handleIncrement} ></button>
                                        <RandomNumber handleIncrement={this.handleIncrement}>
                                            <img src={Empire}  alt="empire" width="75" height="75"/>
                                        </RandomNumber>
                                    </th>

                                    <th>
                                        <button className="getpoints" onClick={this.handleIncrement} ></button>
                                        <RandomNumber handleIncrement={this.handleIncrement}>
                                            <img src={Rebelion}  alt="rebelion" width="75" height="75"/>
                                        </RandomNumber>
                                    </th>

                                    <th>
                                        <button className="getpoints" onClick={this.handleIncrement} ></button>
                                        <RandomNumber handleIncrement={this.handleIncrement}>
                                            <img src={StarWars}  alt="starwars" width="75" height="75"/>
                                        </RandomNumber>
                                    </th>

                                </tr>

                                <tr>
                                    <th>
                                        <button className="getpoints" onClick={this.handleIncrement} ></button>
                                        <RandomNumber handleIncrement={this.handleIncrement}>
                                            <img src={DarthVarder} alt="darthvarder" width="75" height="75"/>
                                        </RandomNumber>
                                    </th>

                                    <th>
                                        <button className="getpoints" onClick={this.handleIncrement} ></button>
                                        <RandomNumber handleIncrement={this.handleIncrement}>
                                            <img src={StarWars}  alt="starwars" width="75" height="75"/>
                                        </RandomNumber>
                                    </th>

                                    <th>
                                        <button className="getpoints" onClick={this.handleIncrement}></button>
                                        <RandomNumber handleIncrement={this.handleIncrement}>
                                            <img src={StormTrooper} alt="stormtrooper" width="75" height="75"/>
                                        </RandomNumber>
                                    </th>

                                    <th>
                                        <button className="getpoints" onClick={this.handleIncrement}></button>
                                        <RandomNumber handleIncrement={this.handleIncrement}>
                                            <img src={Yoda} alt="yoda" width="75" height="75"/>
                                        </RandomNumber>
                                    </th>

                                    <th>
                                        <button className="getpoints" onClick={this.handleIncrement}></button>
                                        <RandomNumber handleIncrement={this.handleIncrement}>
                                            <img src={Rebelion}  alt="rebelion" width="75" height="75"/>
                                        </RandomNumber>
                                    </th>
                                </tr>

                                <tr>
                                    <th>
                                        <button className="getpoints" onClick={this.handleIncrement}></button>
                                        <RandomNumber handleIncrement={this.handleIncrement}>
                                            <img src={Empire}  alt="empire" width="75" height="75"/>
                                        </RandomNumber>
                                    </th>

                                    <th>
                                        <button className="getpoints" onClick={this.handleIncrement}></button>
                                        <RandomNumber handleIncrement={this.handleIncrement}>
                                            <img src={Rebelion}  alt="rebelion" width="75" height="75"/>
                                        </RandomNumber>
                                    </th>

                                    <th>
                                        <button className="getpoints" onClick={this.handleIncrement}></button>
                                        <RandomNumber handleIncrement={this.handleIncrement}>
                                            <img src={DarthVarder} alt="darthvarder" width="75" height="75"/>
                                        </RandomNumber>
                                    </th>

                                    <th>
                                        <button className="getpoints" onClick={this.handleIncrement}></button>
                                        <RandomNumber handleIncrement={this.handleIncrement}>
                                            <img src={StarWars}  alt="starwars" width="75" height="75"/>
                                        </RandomNumber>
                                    </th>

                                    <th>
                                        <button className="getpoints" onClick={this.handleIncrement}></button>
                                        <RandomNumber handleIncrement={this.handleIncrement}>
                                            <img src={Yoda} alt="yoda" width="75" height="75"/>
                                        </RandomNumber>
                                    </th>
                                </tr>
                            </tbody>
                        </div>
                    </Col>
                </Row>

            </Container>
        );
    }
}




// export function TotalPoints () {
//     let points = 0;
//     if("getpoints"  === RandomNumber) {
//        points = points + RandomNumber;
//     } else if ("getpoints"  === Zonk){
//         points = 0;
//     } else {
//         points = 0;
//     }

//     return (
//         <div className="points">
//             <h3>{points}</h3>
//         </div>
//         ) 
// }
// points board will have 25 options


