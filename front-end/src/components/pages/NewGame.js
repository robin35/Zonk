import React from "react";
import { Container, Row, Col } from "../components/Grid";
import Dropdown from "react-bootstrap/Dropdown";
// import Jurassic from "../pages/Jurassic";

function NewGame() {
    return (
        <Container>
            <Row>
                <Col size="md-4">
                    <p><h2>WHAT SUBJECT WOULD YOU LIKE TO STUDY?</h2></p>
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
                </Col>
                <Col size="md-4">
                    <p><h2>WHAT SPORT DO YOU KNOW THE MOST ABOUT!!</h2></p>
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
                </Col>
                <Col size="md-4">
                    <p><h2>WHAT TOPIC DO YOU WANT TO TEST YOUR SKILLS WITH??</h2></p>
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
                </Col>
            </Row>
        </Container>
    );
}

export default NewGame;