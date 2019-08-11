import React from 'react';
// import { Link } from 'react-router-dom';
import { Container, Row, Col } from "../Grid";
import Dropdown from "react-bootstrap/Dropdown";

const NewGame = () => {
    return (

        <Container>

            <h1 className="display-4">READY FOR A CHALLENGE??</h1>
            <h1 className="display-4">Choose a topic!</h1>
            <hr className="my-4" />
            
            <Row>
                <Col size="md-4">
                    <h2 className="card-title">SUBJECT YOU COGNIZE</h2>
                    <img src={require('./study.png')} alt="Trivia" width="175" height="100"></img>

                    <div className="card-body">
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">                      
                            Study
                        </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="/math">Math</Dropdown.Item>
                                <Dropdown.Item href="/science">Science</Dropdown.Item>
                                <Dropdown.Item href="/socialstudies">Social Studies</Dropdown.Item>    
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </Col>

                <Col size="md-4">
                    <h2 className="card-title">SPORT YOU DIG!!</h2>
                    <img src={require('./sports.png')} alt="Trivia" width="175" height="175"></img>

                    <div className="card-body">
                        <Dropdown>
                            <Dropdown.Toggle variant="warning" id="dropdown-basic">                      
                                Sports
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                    <Dropdown.Item href="/baseballtrivia">Baseball</Dropdown.Item>
                                    <Dropdown.Item href="/soccertrivia">Soccer</Dropdown.Item>
                                    <Dropdown.Item href="/basketballtrivia">Basketball</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </Col>

                <Col size="md-4">
                    <h2 className="card-title">TOPIC YOU KNOW</h2>
                    <img src={require('./Trivia.png')} alt="Trivia" width="175" height="100"></img>

                    <div className="card-body">
                        <Dropdown>
                            <Dropdown.Toggle variant="danger" id="dropdown-basic">                      
                                Trivia
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="/jurassic" >Jurassic Park</Dropdown.Item>
                                <Dropdown.Item href="/80music">80s Music</Dropdown.Item>
                                <Dropdown.Item href="/starwars">Star Wars</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </Col>

            </Row>
        </Container>
        )
    };
    
    export default NewGame;