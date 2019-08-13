//=================================================================================
// Dependencies
//=================================================================================

import React, { Component } from 'react';
import axios from 'axios';
import { Table, Icon, Label, Menu } from 'semantic-ui-react';

// import QuestionAdd from './Question2Add';
// import QuestionEdit from './Question3Edit';
import QuestionRow from './QuestionRow';
import './searchquestions.css';


//=================================================================================
// Configure Table
//=================================================================================

class QuestionDisplay extends Component {

  state = { 
    searchTopic: 'Select a topic', 
    questions: [] 
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
  };

  // onChange = event => (this.setState({ searchTopic: event.target.value }));
  onChange = event => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  //=================================================================================
  // Render
  //=================================================================================

  render() {
    return (
      < div className="container" id="container" >
        <div className="sign-up-container ">
          <form onSubmit={event => this.onSubmit(event)}>
            <h1>Select a question topic:</h1>
            <br />
            <select value={this.state.searchTopic} name="searchTopic" onChange={event => this.onChange(event)}>
              <option value='Select a topic'>Select a Topic</option>
              <option value="80s Music">80s Music</option>
              <option value="Baseball">Baseball</option>
              <option value="Football">Football</option>
              <option value="Jurassic Park">Jurassic Park</option>
              <option value="Mathematics">Math</option>
              <option value="Science">Science</option>
              <option value="Soccer">Soccer</option>
              <option value="Star Wars">Star Wars</option>
              <option value="US History">US History</option>
            </select>
            <br />

            <div className='buttons'>
              {/* <Link to='/questions'> */}
              <button type="submit">Submit</button>
              {/* </Link> */}
            </div>
          </form>

          <br /><br />


          <div>
            <Table singleLine>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Topic</Table.HeaderCell>
                  <Table.HeaderCell>Question</Table.HeaderCell>
                  <Table.HeaderCell>Answer A</Table.HeaderCell>
                  <Table.HeaderCell>Answer B</Table.HeaderCell>
                  <Table.HeaderCell>Answer C</Table.HeaderCell>
                  <Table.HeaderCell>Answer D</Table.HeaderCell>
                  <Table.HeaderCell>Correct</Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                {/* <QuestionRow /> */}
                {this.state.questions.map((question, index) => (

                  <Table.Row>
                    <Table.Cell>{question.topic}</Table.Cell>
                    <Table.Cell>{question.question}</Table.Cell>
                    <Table.Cell>{question.answera}</Table.Cell>
                    <Table.Cell>{question.answerb}</Table.Cell>
                    <Table.Cell>{question.answerc}</Table.Cell>
                    <Table.Cell>{question.answerd}</Table.Cell>
                    <Table.Cell>{question.answere}</Table.Cell>
                    <Table.Cell>{question.correct}</Table.Cell>
                  </Table.Row>

                ))}
              </Table.Body>

              <Table.Footer>
                <Table.Row>
                  <Table.HeaderCell colSpan='3'>
                    <Menu floated='right' pagination>
                      <Menu.Item as='a' icon>
                        <Icon name='chevron left' />
                      </Menu.Item>
                      <Menu.Item as='a'>1</Menu.Item>
                      <Menu.Item as='a'>2</Menu.Item>
                      <Menu.Item as='a'>3</Menu.Item>
                      <Menu.Item as='a'>4</Menu.Item>
                      <Menu.Item as='a' icon>
                        <Icon name='chevron right' />
                      </Menu.Item>
                    </Menu>
                  </Table.HeaderCell>
                </Table.Row>
              </Table.Footer>
            </Table>

          </div>
        </div>
      </div >
    )
  }

  }

  //=================================================================================
  // Export
  //=================================================================================

  export default QuestionDisplay;
