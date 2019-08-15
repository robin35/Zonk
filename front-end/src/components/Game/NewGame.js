//==================================================================================================================================
// Dependencies
//==================================================================================================================================

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

// import { Container, Row, Col } from "../grid/Grid";
import { Container, Grid, Card, Image, Header } from 'semantic-ui-react';



//==================================================================================================================================
// Get the topic and pass it to the server.  The server will return the questions as an object.
// Pass the questions to the appropriate gameboard.
//==================================================================================================================================

class NewGame extends Component {

    state = { 
        searchTopic: 'Select a topic', 
        questions: [], 
        topicLink: ''
      };
    
        onSubmit = async event => {
            event.preventDefault();
        
            try {
                const res = await axios.get(`/api/searchquestions/${this.state.searchTopic}`);
                console.log(res.data);
                const questions = res.data
                this.setState({ questions })
            } catch (err) {
            console.error(err.res.data);
            }
        }
     
      onClick = event => {
        event.preventDefault()
        const { name, value } = event.target
        this.setState({
          [name]: value
        });

        // let topicLink = "";
        // switch (this.state.value) {
        //     case 'Mathematics':
        //         topicLink = '/game/math';
        //         console.log(topicLink);
        //         return topicLink;

        //     case 'Science':
        //         topicLink='/science';
        //         console.log(topicLink);
        //         return topicLink;
                
        //     case 'US History':
        //         topicLink='/socialstudies';
        //         console.log(topicLink);
        //         return topicLink;
                
        //     case 'Baseball':
        //         topicLink='/baseball';
        //         console.log(topicLink);
        //         return topicLink;
                
        //     case 'Football':
        //         topicLink='/basketball';
        //         console.log(topicLink);
        //         return topicLink;
                
        //     case 'Soccer':
        //         topicLink='/soccer';
        //         console.log(topicLink);
        //         return topicLink;
                
        //     case '80s Music':
        //         topicLink='/80music';
        //         console.log(topicLink);
        //         return topicLink;
                
        //     case 'Jurassic Park':
        //         topicLink='/jurassic';
        //         console.log(topicLink);
        //         return topicLink;
                
        //     case 'Star Wars':
        //         topicLink='/starwars';
        //         console.log(topicLink);
        //         return topicLink;

        //     default:
        //         return null;
        //     };
        }





    //==============================================================================================================================
    // The body of the New Game page starts here
    //==============================================================================================================================

    render() {

    return (
 
        <Container >

        <form onSubmit={event => this.onSubmit(event)}>
            <h1 >READY FOR A CHALLENGE??</h1>
            <h1 >Choose a topic!</h1>
            <hr />
            
            <Grid columns={3}>
                <Grid.Row>

                    <Grid.Column>
                        <Card>
                            <Header color='green'><h3><strong>SUBJECTS YOU COGNIZE</strong></h3></Header>
                            <Image size='small' floated='right' src={ require('../../images/study.png' ) } />

                            <Card.Content>
                                <select value={this.state.searchTopic} name="searchTopic" onChange={event => this.onClick(event)}>
                                    <option value='Select a topic'>Select a Subject</option>
                                    <option value='Mathematics'>Mathematics</option>
                                    <option value="Science">Science</option>
                                    <option value="US History">US History</option>                                   
                                </select>
                            </Card.Content>
                        </Card>
                    </Grid.Column>

                    <Grid.Column>
                        <Card>
                            <Header color='yellow'><h3><strong>SPORTS YOU DIG!!</strong></h3></Header>
                            <Image size='small' floated='right' src={ require( '../../images/sports.png' ) } />

                            <Card.Content>
                                <select value={this.state.searchTopic} name="searchTopic" onChange={event => this.onClick(event)}>
                                    <option value='Select a topic'>Select a Sport</option>
                                    <option value="Baseball">Baseball</option>
                                    <option value="Football">Football</option>
                                    <option value="Soccer">Soccer</option>
                                </select>
                            </Card.Content>
                        </Card>
                    </Grid.Column>

                    <Grid.Column>
                        <Card fluid >
                            <Header color='red'><h3><strong>TOPICS YOU KNOW</strong></h3></Header>
                            <Image src={ require('../../images/trivia.png' ) } />

                            <Card.Content>
                                <select value={this.state.searchTopic} name="searchTopic" onChange={event => this.onClick(event)}>
                                    <option value='Select a topic'>Select a Topic</option>
                                    <option value="80s Music">80s Music</option>
                                    <option value="Jurassic Park">Jurassic Park</option>
                                    <option value="Star Wars">Star Wars</option>                                   
                                </select>
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            <br />
            <div className='buttons'>
                {/* <Link to={this.state.topicLink}> */}
                    <button type="submit">New Game</button>
                    {/* </Link> */}
            </div>
            <br />
        </form>
        </Container>
        )
    };
    
}
    export default NewGame;