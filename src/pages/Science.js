import React from "react";
import { Container, Row, Col } from "../components/Grid";
import { TotalPoints, PointBoard } from "../pages/Points";
import { RandomNumber, Zonk } from "./Math";
import Science from "../images/science.png";
// import NavTabs from "./components/NavTabs/index";




// points board will have 25 options
function SoccerTrivia () {
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
                            <button className="getpoints"><img src={Science} alt="science" width="75" height="75"/></button>
                       <RandomNumber/>
                       </div>
                    </th>
                    <th>
                    <button className="getpoints"><img src={Science}  alt="science" width="75" height="75"/></button>
                        <RandomNumber/>
                    </th>
                    <th>
                    <button className="getpoints"><img src={Science}  alt="science" width="75" height="75"/></button>
                        <RandomNumber/>
                    </th>
                    <th>
                    <button className="getpoints"><img src={Science}  alt="science" width="75" height="75"/></button>
                        <RandomNumber/>
                    </th>
                    <th>
                    <button className="getpoints"><img src={Science}  alt="science" width="75" height="75"/></button>
                        <RandomNumber/>
                    </th>
                    <th>
                    <button className="getpoints"><img src={Science}  alt="science" width="75" height="75"/></button>
                        <RandomNumber/>
                    </th>
                </tr>
                <tr>
                    <th>
                    <button className="getpoints"><img src={Science}  alt="science" width="75" height="75"/></button>
                        <RandomNumber/>
                    </th>
                    <th>
                    <button className="getpoints"><img src={Science}  alt="science" width="75" height="75"/></button>
                        <RandomNumber/>
                    </th>
                    <th>
                    <button className="getpoints"><img src={Science}  alt="science" width="75" height="75"/></button>
                        <RandomNumber/>
                    </th>
                    <th>
                    <button className="getpoints"><img src={Science}  alt="science" width="75" height="75"/></button>
                        <RandomNumber/>
                    </th>
                    <th>
                    <button className="getpoints"><img src={Science}  alt="science" width="75" height="75"/></button>
                        <RandomNumber/>
                    </th>
                    <th>
                    <button className="getpoints"><img src={Science}  alt="science" width="75" height="75"/></button>
                        <RandomNumber/>
                    </th>
                </tr>
                <tr>
                    <th>
                    <button className="getpoints"><img src={Science}  alt="science" width="75" height="75"/></button>
                        <RandomNumber/>
                    </th>
                    <th>
                    <button className="getpoints"><img src={Science}  alt="science" width="75" height="75"/></button>
                        <RandomNumber/>
                    </th>
                    <th>
                    <button className="getpoints"><img src={Science}  alt="science" width="75" height="75"/></button>
                        <RandomNumber/>
                    </th>
                    <th>
                    <button className="getpoints"><img src={Science}  alt="science" width="75" height="75"/></button>
                        <RandomNumber/>
                    </th>
                    <th>
                    <button className="getpoints"><img src={Science}  alt="science" width="75" height="75"/></button>
                        <RandomNumber/>
                    </th>
                    <th>
                    <button className="getpoints"><img src={Science}  alt="science" width="75" height="75"/></button>
                        <RandomNumber/>
                    </th>
                </tr>
                <tr>
                    <th>
                    <button className="getpoints"><img src={Science}  alt="science" width="75" height="75"/></button>
                        <RandomNumber/>
                    </th>
                    <th>
                    <button className="getpoints"><img src={Science}  alt="science" width="75" height="75"/></button>
                        <RandomNumber/>
                    </th>
                    <th>
                    <button className="getpoints"><img src={Science}  alt="science" width="75" height="75"/></button>
                        <RandomNumber/>
                    </th>
                    <th>
                    <button className="getpoints"><img src={Science}  alt="science" width="75" height="75"/></button>
                        <RandomNumber/>
                    </th>
                    <th>
                    <button className="getpoints"><img src={Science}  alt="science" width="75" height="75"/></button>
                        <RandomNumber/>
                    </th>
                    <th>
                    <button className="getpoints"><img src={Science}  alt="science" width="75" height="75"/></button>
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

export default SoccerTrivia;

