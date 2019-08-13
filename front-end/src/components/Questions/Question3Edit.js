//=================================================================================
// Dependencies
//=================================================================================

import React, { useState } from 'react';
import axios from 'axios';
import { Button, Modal } from 'semantic-ui-react'
import QuestionForm from './Question1Form';


//=================================================================================
// Configure Edit Modal
//=================================================================================

const QuestionsEdit = () => {

    const [formData, setFormData] = useState({
        searchTopic: ''
    });

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




  //=================================================================================
  // Configure Edit Modal
  //=================================================================================

  return (

    <Modal
        trigger={<Button>Edit</Button>}
        dimmer='inverted'
        size='tiny'
        closeIcon
        >

        <Modal.Header>Edit Question</Modal.Header>

        <Modal.Content>
          <QuestionForm
            buttonSubmitTitle='Submit'
            buttonColor='blue'
            questionID={this.props.questionID}
            onQuestionUpdate={this.props.onQuestionUpdate}
            // server={this.props.server}
            // socket={this.props.socket}
          />
        </Modal.Content>
      
    </Modal>
  );
}


//=================================================================================
// Export
//=================================================================================

export default QuestionsEdit;
