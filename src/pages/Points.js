import React from "react";
import { RandomNumber, Zonk } from "./Math"
import { Container, Row, Col } from "../components/Grid";


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
                            <button className="getpoints"><img src="https://previews.123rf.com/images/twindesign/twindesign1302/twindesign130200056/18242696-dinosaur-egg.jpg" alt="egg" width="50" height="75"/></button>
                       <RandomNumber/>
                       </div>
                    </th>
                    <th>
                    <button className="getpoints"><img src="https://previews.123rf.com/images/twindesign/twindesign1302/twindesign130200056/18242696-dinosaur-egg.jpg"  alt="egg" width="50" height="75"/></button>
                        <RandomNumber/>
                    </th>
                    <th>
                    <button className="getpoints"><img src="https://previews.123rf.com/images/twindesign/twindesign1302/twindesign130200056/18242696-dinosaur-egg.jpg"  alt="egg" width="50" height="75"/></button>
                        <RandomNumber/>
                    </th>
                    <th>
                    <button className="getpoints"><img src="https://previews.123rf.com/images/twindesign/twindesign1302/twindesign130200056/18242696-dinosaur-egg.jpg"  alt="egg" width="50" height="75"/></button>
                        <RandomNumber/>
                    </th>
                    <th>
                    <button className="getpoints"><img src="https://previews.123rf.com/images/twindesign/twindesign1302/twindesign130200056/18242696-dinosaur-egg.jpg"  alt="egg" width="50" height="75"/></button>
                        <RandomNumber/>
                    </th>
                    <th>
                    <button className="getpoints"><img src="https://previews.123rf.com/images/twindesign/twindesign1302/twindesign130200056/18242696-dinosaur-egg.jpg"  alt="egg" width="50" height="75"/></button>
                        <RandomNumber/>
                    </th>
                </tr>
                <tr>
                    <th>
                    <button className="getpoints"><img src="https://previews.123rf.com/images/twindesign/twindesign1302/twindesign130200056/18242696-dinosaur-egg.jpg"  alt="egg" width="50" height="75"/></button>
                        <RandomNumber/>
                    </th>
                    <th>
                    <button className="getpoints"><img src="https://previews.123rf.com/images/twindesign/twindesign1302/twindesign130200056/18242696-dinosaur-egg.jpg"  alt="egg" width="50" height="75"/></button>
                        <RandomNumber/>
                    </th>
                    <th>
                    <button className="getpoints"><img src="https://previews.123rf.com/images/twindesign/twindesign1302/twindesign130200056/18242696-dinosaur-egg.jpg"  alt="egg" width="50" height="75"/></button>
                        <RandomNumber/>
                    </th>
                    <th>
                    <button className="getpoints"><img src="https://previews.123rf.com/images/twindesign/twindesign1302/twindesign130200056/18242696-dinosaur-egg.jpg"  alt="egg" width="50" height="75"/></button>
                        <RandomNumber/>
                    </th>
                    <th>
                    <button className="getpoints"><img src="https://previews.123rf.com/images/twindesign/twindesign1302/twindesign130200056/18242696-dinosaur-egg.jpg"  alt="egg" width="50" height="75"/></button>
                        <RandomNumber/>
                    </th>
                    <th>
                    <button className="getpoints"><img src="https://previews.123rf.com/images/twindesign/twindesign1302/twindesign130200056/18242696-dinosaur-egg.jpg"  alt="egg" width="50" height="75"/></button>
                        <RandomNumber/>
                    </th>
                </tr>
                <tr>
                    <th>
                    <button className="getpoints"><img src="https://previews.123rf.com/images/twindesign/twindesign1302/twindesign130200056/18242696-dinosaur-egg.jpg"  alt="egg" width="50" height="75"/></button>
                        <RandomNumber/>
                    </th>
                    <th>
                    <button className="getpoints"><img src="https://previews.123rf.com/images/twindesign/twindesign1302/twindesign130200056/18242696-dinosaur-egg.jpg"  alt="egg" width="50" height="75"/></button>
                        <RandomNumber/>
                    </th>
                    <th>
                    <button className="getpoints"><img src="https://previews.123rf.com/images/twindesign/twindesign1302/twindesign130200056/18242696-dinosaur-egg.jpg"  alt="egg" width="50" height="75"/></button>
                        <RandomNumber/>
                    </th>
                    <th>
                    <button className="getpoints"><img src="https://previews.123rf.com/images/twindesign/twindesign1302/twindesign130200056/18242696-dinosaur-egg.jpg"  alt="egg" width="50" height="75"/></button>
                        <RandomNumber/>
                    </th>
                    <th>
                    <button className="getpoints"><img src="https://previews.123rf.com/images/twindesign/twindesign1302/twindesign130200056/18242696-dinosaur-egg.jpg"  alt="egg" width="50" height="75"/></button>
                        <RandomNumber/>
                    </th>
                    <th>
                    <button className="getpoints"><img src="https://previews.123rf.com/images/twindesign/twindesign1302/twindesign130200056/18242696-dinosaur-egg.jpg"  alt="egg" width="50" height="75"/></button>
                        <RandomNumber/>
                    </th>
                </tr>
                <tr>
                    <th>
                    <button className="getpoints"><img src="https://previews.123rf.com/images/twindesign/twindesign1302/twindesign130200056/18242696-dinosaur-egg.jpg"  alt="egg" width="50" height="75"/></button>
                        <RandomNumber/>
                    </th>
                    <th>
                    <button className="getpoints"><img src="https://previews.123rf.com/images/twindesign/twindesign1302/twindesign130200056/18242696-dinosaur-egg.jpg"  alt="egg" width="50" height="75"/></button>
                        <RandomNumber/>
                    </th>
                    <th>
                    <button className="getpoints"><img src="https://previews.123rf.com/images/twindesign/twindesign1302/twindesign130200056/18242696-dinosaur-egg.jpg"  alt="egg" width="50" height="75"/></button>
                        <RandomNumber/>
                    </th>
                    <th>
                    <button className="getpoints"><img src="https://previews.123rf.com/images/twindesign/twindesign1302/twindesign130200056/18242696-dinosaur-egg.jpg"  alt="egg" width="50" height="75"/></button>
                        <RandomNumber/>
                    </th>
                    <th>
                    <button className="getpoints"><img src="https://previews.123rf.com/images/twindesign/twindesign1302/twindesign130200056/18242696-dinosaur-egg.jpg"  alt="egg" width="50" height="75"/></button>
                        <RandomNumber/>
                    </th>
                    <th>
                    <button className="getpoints"><img src="https://previews.123rf.com/images/twindesign/twindesign1302/twindesign130200056/18242696-dinosaur-egg.jpg"  alt="egg" width="50" height="75"/></button>
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

