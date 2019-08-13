//==================================================================================================================================
// Dependencies
//==================================================================================================================================

import React, { useState } from 'react';
import axios from 'axios';

import { Container, Row, Col } from "../grid/Grid";
import Dropdown from "react-bootstrap/Dropdown";



//==================================================================================================================================
// Get the topic and pass it to the server.  The server will return the questions as an object.
// Pass the questions to the appropriate gameboard.
//==================================================================================================================================

const NewGame = () => {

    const [formData, setFormData] = useState({ searchTopic: '' });
    const { searchTopic } = formData;
    const onChange = event => setFormData({ searchTopic: event.target.value }); 

    const onSubmit = async event => {
        event.preventDefault();
        console.log(formData);

        try {
            const res = await axios.get(`/api/searchquestions/${searchTopic}`);
            console.log(res.data);

            

        } catch(err) {
            console.error(err.res.data);
        }
    };


    //==============================================================================================================================
    // The body of the New Game page starts here
    //==============================================================================================================================

    return (

        <Container onSubmit={ event => onSubmit(event) } >

            <h1 className="display-4">READY FOR A CHALLENGE??</h1>
            <h1 className="display-4">Choose a topic!</h1>
            <hr className="my-4" />
            
            <Row>
                <Col size="md-4">
                    <h2 className="card-title">SUBJECT YOU COGNIZE</h2>
                    <img src={require('./study.png')} alt="Trivia" width="175" height="100"></img>

                    <div className="card-body">
                    <Dropdown onChange={ event => onChange(event) }>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">                      
                            Study
                        </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="/game/math">Math</Dropdown.Item>
                                <Dropdown.Item href="/game/science">Science</Dropdown.Item>
                                <Dropdown.Item href="/game/socialstudies">Social Studies</Dropdown.Item>    
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </Col>

                <Col size="md-4">
                    <h2 className="card-title">SPORT YOU DIG!!</h2>
                    <img src={require('./sports.png')} alt="Trivia" width="175" height="175"></img>

                    <div className="card-body">
                        <Dropdown onChange={ event => onChange(event) }>
                            <Dropdown.Toggle variant="warning" id="dropdown-basic">                      
                                Sports
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                    <Dropdown.Item href="/game/baseballtrivia">Baseball</Dropdown.Item>
                                    <Dropdown.Item href="/game/soccertrivia">Soccer</Dropdown.Item>
                                    <Dropdown.Item href="/game/basketballtrivia">Basketball</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </Col>

                <Col size="md-4">
                    <h2 className="card-title">TOPIC YOU KNOW</h2>
                    <img src={require('./Trivia.png')} alt="Trivia" width="175" height="100"></img>

                    <div className="card-body">
                        <Dropdown onChange={ event => onChange(event) }>
                            <Dropdown.Toggle variant="danger" id="dropdown-basic">                      
                                Trivia
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="/game/jurassic" >Jurassic Park</Dropdown.Item>
                                <Dropdown.Item href="/game/80music">80s Music</Dropdown.Item>
                                <Dropdown.Item href="/game/starwars">Star Wars</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </Col>

            </Row>
        </Container>
        )
    };
    
   
    export default NewGame;