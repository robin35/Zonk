//=================================================================================
// Dependencies
//=================================================================================

import React from 'react';
import { Button, Modal } from 'semantic-ui-react'

import QuestionForm from './Question1Form';


//=================================================================================
// Configure Add Modal
//=================================================================================

const QuestionsAdd = () => {

  return (

    <Modal
        trigger={<Button>Add Question</Button>}
        dimmer='inverted'
        size='tiny'
        closeIcon='close'
        >

        <Modal.Header>Add Question</Modal.Header>

        <Modal.Content>
          <QuestionForm
            buttonSubmitTitle='Submit'
            buttonColor='green'
            questionID={this.props.questionID}
            onQuestionAdd={this.props.onQuestionAdd}
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

export default QuestionsAdd;
