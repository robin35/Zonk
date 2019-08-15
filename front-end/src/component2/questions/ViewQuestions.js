//=================================================================================
// Dependencies
//=================================================================================

import React, { Component } from 'react';
import axios from 'axios';
import { Table, Icon, Menu } from 'semantic-ui-react';

import '../landing/Landing.css';


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

        <div className="containerTable ">
          <form onSubmit={event => this.onSubmit(event)}>
            <h1>Select a question topic:</h1>
            <br />
            <select value={this.state.searchTopic} name="searchTopic" onChange={event => this.onChange(event)}>
              <option value='Select a topic'>Select a Topic</option>
              <option value="80s Music">80s Music</option>
              <option value="Baseball">Baseball</option>
              <option value="Football">Football</option>
              <option value="Jurassic Park">Jurassic Park</option>
              <option value="Mathematics">Mathematics</option>
              <option value="Science">Science</option>
              <option value="Soccer">Soccer</option>
              <option value="Star Wars">Star Wars</option>
              <option value="US History">US History</option>
            </select>
            <br />

            <div className='buttons'>
              <button type="submit">Submit</button>
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
                {this.state.questions.map((question, index) => (

                  <Table.Row key={question._id} >
                    <Table.Cell>{question.topic}</Table.Cell>
                    <Table.Cell>{question.question}</Table.Cell>
                    <Table.Cell>{question.answera}</Table.Cell>
                    <Table.Cell>{question.answerb}</Table.Cell>
                    <Table.Cell>{question.answerc}</Table.Cell>
                    <Table.Cell>{question.answerd}</Table.Cell>
                    <Table.Cell>{question.correct}</Table.Cell>
                  </Table.Row>

                ))}
              </Table.Body>

            </Table>

          </div>
        </div>

    )
  }

  }

  //=================================================================================
  // Export
  //=================================================================================

  export default QuestionDisplay;
