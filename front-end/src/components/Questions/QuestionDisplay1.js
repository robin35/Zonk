//=================================================================================
// Dependencies
//=================================================================================

import React, { useState } from 'react';
import axios from 'axios';
import { Table } from 'semantic-ui-react';

import QuestionAdd from './Question2Add';
import QuestionEdit from './Question3Edit';
import QuestionDelete from './Question4Delete';
import './searchquestions.css';




//=================================================================================
// Configure Table
//=================================================================================

const SearchQuestions = () => {

  const [formData, setFormData] = useState({
    searchTopic: '', 
});

  // componentDidMount() {

    let initialResults = [];
    const { searchTopic } = dropDownSelection;

    const onChange = event => setFormData({ searchTopic: event.target.value });

    // Populates the newSearch object with the form data
    const onSubmit = async event => {
        event.preventDefault();

        try {
            const res = await axios.get(`/api/searchquestions/${searchTopic}`);
            
            console.log(res.data);

        } catch(err) {
            console.error(err.res.data);
        }
      }


  // }






    //=================================================================================
    // Render
    //=================================================================================

    render() {

      let questions = this.props.questions;

      questions = questions.map((question) => 
        <Table.Row key={questions._id}>
          <Table.Cell>{questions.topic}</Table.Cell>
          <Table.Cell>{questions.question}</Table.Cell>
          <Table.Cell>{questions.answera}</Table.Cell>
          <Table.Cell>{questions.answerb}</Table.Cell>
          <Table.Cell>{questions.answerc}</Table.Cell>
          <Table.Cell>{questions.answerd}</Table.Cell>
          <Table.Cell>{questions.correct}</Table.Cell>
          <Table.Cell>

          <QuestionAdd
              questionID={question._id}
              onQuestionUpdated={this.props.onQuestionUpdated}
              server={this.props.server}
            />

            <QuestionEdit
              questionID={question._id}
              onQuestionUpdated={this.props.onQuestionUpdated}
              server={this.props.server}
            />

            <QuestionDelete
              questionID={question._id}
              onQuestionDeleted={this.props.onQuestionDeleted}
              server={this.props.server}
            />
          </Table.Cell>
        </Table.Row>
      );

      // Make every new Question appear on top of the list
      questions =  [...questions].reverse();

      return (
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
            {questions}
          </Table.Body>
        </Table>
      );
    }
}



//=================================================================================
// Export
//=================================================================================

export default QuestionDisplay;
