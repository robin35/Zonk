import React from "react";
import { Container, Row, Col } from "../components/Grid";
import { TotalPoints, PointBoard } from "../pages/Points";
import { RandomNumber, Zonk } from "./Math";
import Basketball from "../images/basketball.jpg";
// import NavTabs from "./components/NavTabs/index";




// points board will have 25 options
export default class BasketballTrivia extends React.Component{
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
            <table>
                <tr>
                <th>
                                <button className="getpoints" onClick={this.handleIncrement} ></button>
                           <RandomNumber handleIncrement={this.handleIncrement}>
                                <img src={Basketball} alt="basketball" width="75" height="75"/>
                            </RandomNumber>
                           
                        </th>
                        <th>
                                <button className="getpoints" onClick={this.handleIncrement} ></button>
                           <RandomNumber handleIncrement={this.handleIncrement}>
                                <img src={Basketball} alt="basketball" width="75" height="75"/>
                            </RandomNumber>
                           
                        </th>
                        <th>
                                <button className="getpoints" onClick={this.handleIncrement} ></button>
                           <RandomNumber handleIncrement={this.handleIncrement}>
                                <img src={Basketball} alt="basketball" width="75" height="75"/>
                            </RandomNumber>
                           
                        </th>
                        <th>
                                <button className="getpoints" onClick={this.handleIncrement} ></button>
                           <RandomNumber handleIncrement={this.handleIncrement}>
                                <img src={Basketball} alt="basketball" width="75" height="75"/>
                            </RandomNumber>
                           
                        </th>
                        <th>
                                <button className="getpoints" onClick={this.handleIncrement} ></button>
                           <RandomNumber handleIncrement={this.handleIncrement}>
                                <img src={Basketball} alt="basketball" width="75" height="75"/>
                            </RandomNumber>
                           
                        </th>
                </tr>
                <tr>
                <th>
                                <button className="getpoints" onClick={this.handleIncrement} ></button>
                           <RandomNumber handleIncrement={this.handleIncrement}>
                                <img src={Basketball} alt="basketball" width="75" height="75"/>
                            </RandomNumber>
                           
                        </th>
                        <th>
                                <button className="getpoints" onClick={this.handleIncrement} ></button>
                           <RandomNumber handleIncrement={this.handleIncrement}>
                                <img src={Basketball} alt="basketball" width="75" height="75"/>
                            </RandomNumber>
                           
                        </th>
                        <th>
                                <button className="getpoints" onClick={this.handleIncrement} ></button>
                           <RandomNumber handleIncrement={this.handleIncrement}>
                                <img src={Basketball} alt="basketball" width="75" height="75"/>
                            </RandomNumber>
                           
                        </th>
                        <th>
                                <button className="getpoints" onClick={this.handleIncrement} ></button>
                           <RandomNumber handleIncrement={this.handleIncrement}>
                                <img src={Basketball} alt="basketball" width="75" height="75"/>
                            </RandomNumber>
                           
                        </th>
                        <th>
                                <button className="getpoints" onClick={this.handleIncrement} ></button>
                           <RandomNumber handleIncrement={this.handleIncrement}>
                                <img src={Basketball} alt="basketball" width="75" height="75"/>
                            </RandomNumber>
                           
                        </th>
                   
                </tr>
                <tr>
                <th>
                                <button className="getpoints" onClick={this.handleIncrement} ></button>
                           <RandomNumber handleIncrement={this.handleIncrement}>
                                <img src={Basketball} alt="basketball" width="75" height="75"/>
                            </RandomNumber>
                           
                        </th>
                        <th>
                                <button className="getpoints" onClick={this.handleIncrement} ></button>
                           <RandomNumber handleIncrement={this.handleIncrement}>
                                <img src={Basketball} alt="basketball" width="75" height="75"/>
                            </RandomNumber>
                           
                        </th>
                        <th>
                                <button className="getpoints" onClick={this.handleIncrement} ></button>
                           <RandomNumber handleIncrement={this.handleIncrement}>
                                <img src={Basketball} alt="basketball" width="75" height="75"/>
                            </RandomNumber>
                           
                        </th>
                        <th>
                                <button className="getpoints" onClick={this.handleIncrement} ></button>
                           <RandomNumber handleIncrement={this.handleIncrement}>
                                <img src={Basketball} alt="basketball" width="75" height="75"/>
                            </RandomNumber>
                           
                        </th>
                        <th>
                                <button className="getpoints" onClick={this.handleIncrement} ></button>
                           <RandomNumber handleIncrement={this.handleIncrement}>
                                <img src={Basketball} alt="basketball" width="75" height="75"/>
                            </RandomNumber>
                           
                        </th>
                   
                </tr>
               
            </table>
        </div>
            </Col>
        </Row>
    </Container>
    );
}

}

