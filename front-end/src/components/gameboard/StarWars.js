//=================================================================================
// Dependencies
//=================================================================================

import React from "react";
import { RandomNumber, Zonk } from "./Math";
import { Container, Row, Col } from "../grid/Grid";
import Yoda from "../../images/yoda.jpg";
import Empire from "../../images/empire.jpg";
import Rebelion from "../../images/rebelion.png";
import StormTrooper from "../../images/stormtrooper.jpg";
import StarWars from "../../images/starwars.jpg";
import DarthVarder from "../../images/darthvader.jpg";

import axios from 'axios';

import { Table, Grid, Icon, Menu } from 'semantic-ui-react';
import '../landing/Landing.css';


//=================================================================================
// Configure Game
//=================================================================================

export default class Starwars extends React.Component {
    // Setting the initial state of the Counter component
    state = {
        point: 0,
        StarWars: 'Star Wars',
        questions: []
    };


    //=================================================================================
    // Questions
    //=================================================================================
      
    componentDidMount() {
        this.getQuestions();
    }

      getQuestions = async event => {
          // event.preventDefault();
      
          try {
            const res = await axios.get(`/api/searchquestions/${this.state.StarWars}`);
            console.log(res.data);
            const questions = res.data
            this.setState({ questions })
       
          } catch (err) {
            console.error(err.res.data);
          }
        };



  //=================================================================================
  // Points Calculation
  //=================================================================================

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

    //=================================================================================
    // Handle Increment
    //=================================================================================

    handleIncrement = (num) => {
        console.log("working");
    // We always use the setState method to update a component's state
    this.setState({ point: num === "Zonk" ? 0 : (this.state.point + num) });
    };


    //=================================================================================
    // Render/Return Functions
    //=================================================================================

    render() {
        return (

            <div className="containerTable ">


{/* //=================================================================================
    // Grid - Headers
    //================================================================================= */}

                <Grid celled>
                        <Grid.Row>
                            <Grid.Column width={16}>
                                <h3>StarWars Quiz</h3>
                            </Grid.Column>
                        </Grid.Row>
   


{/* //=================================================================================
    // Table - Left Side for Questions
    //================================================================================= */}

                    <Grid.Row>
                            <Grid.Column width={7}>
                                <h3> Quiz:</h3>
                  
                                {this.state.questions.map((question, index) => (

                                    <Table>
                                        <Table.Header>
                                            <Table.Row>
                                                <Table.HeaderCell>Question</Table.HeaderCell>
                                                <Table.HeaderCell> A</Table.HeaderCell>
                                                <Table.HeaderCell> B</Table.HeaderCell>
                                                <Table.HeaderCell> C</Table.HeaderCell>
                                                <Table.HeaderCell> D</Table.HeaderCell>
                                            </Table.Row>
                                        </Table.Header>

                                        <Table.Body>
                                            <Table.Row key={question._id} >
                                                <Table.Cell>{question.question}</Table.Cell>
                                                <Table.Cell>{question.answera}</Table.Cell>
                                                <Table.Cell>{question.answerb}</Table.Cell>
                                                <Table.Cell>{question.answerc}</Table.Cell>
                                                <Table.Cell>{question.answerd}</Table.Cell>
                                            </Table.Row>
                                        </Table.Body>
                                    </Table>

                                ))}

                            </Grid.Column>

{/* //=================================================================================
    // Grid - Right Side for Image Points
    //================================================================================= */}


                            <Grid.Column width={9}>
                                    <h3>Get Points or Get Zonked!</h3>
                                    <h3> Total Points {this.totalPoints()} </h3>
                                    <Grid.Column width={16}>

                            </Grid.Column>
                                
                                    <Table>
                                        <Table.Body>
                                            <Table.Row>
                                                <Table.Cell>
                                                    <RandomNumber handleIncrement={this.handleIncrement}>
                                                        <img src={Yoda} alt="yoda" width="75" height="75"/>
                                                    </RandomNumber>
                                                </Table.Cell>

                                                <Table.Cell>
                                                    <RandomNumber handleIncrement={this.handleIncrement}>
                                                        <img src={StormTrooper} alt="stormtrooper" width="75" height="75"/>
                                                    </RandomNumber>
                                                </Table.Cell>

                                                <Table.Cell>
                                                    <RandomNumber handleIncrement={this.handleIncrement}>
                                                        <img src={Empire}  alt="empire" width="75" height="75"/>
                                                    </RandomNumber>
                                                </Table.Cell>
                                            </Table.Row>

                                            <Table.Row>
                                                <Table.Cell>
                                                    <RandomNumber handleIncrement={this.handleIncrement}>
                                                        <img src={Rebelion}  alt="rebelion" width="75" height="75"/>
                                                    </RandomNumber>
                                                </Table.Cell>

                                                <Table.Cell>
                                                    <RandomNumber handleIncrement={this.handleIncrement}>
                                                        <img src={StarWars}  alt="starwars" width="75" height="75"/>
                                                    </RandomNumber>
                                                </Table.Cell>

                                                <Table.Cell>
                                                    <RandomNumber handleIncrement={this.handleIncrement}>
                                                        <img src={DarthVarder} alt="darthvarder" width="75" height="75"/>
                                                    </RandomNumber>
                                                </Table.Cell>
                                            </Table.Row>

                                            <Table.Row>
                                                <Table.Cell>
                                                    <RandomNumber handleIncrement={this.handleIncrement}>
                                                        <img src={StarWars}  alt="starwars" width="75" height="75"/>
                                                    </RandomNumber>
                                                </Table.Cell>

                                                <Table.Cell>
                                                    <RandomNumber handleIncrement={this.handleIncrement}>
                                                        <img src={StormTrooper} alt="stormtrooper" width="75" height="75"/>
                                                    </RandomNumber>
                                                </Table.Cell>

                                                <Table.Cell>
                                                    <RandomNumber handleIncrement={this.handleIncrement}>
                                                        <img src={Yoda} alt="yoda" width="75" height="75"/>
                                                    </RandomNumber>
                                                </Table.Cell>
                                            </Table.Row>
                                            </Table.Body>
                                    </Table>
                                </Grid.Column>
                    </Grid.Row>
         
                </Grid>
            </div>
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


