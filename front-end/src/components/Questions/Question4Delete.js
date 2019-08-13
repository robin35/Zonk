//=================================================================================
// Dependencies
//=================================================================================

import React from 'react';
import { Button, Modal } from 'semantic-ui-react';


//=================================================================================
// Configure Delete Button
//=================================================================================

const QuestionsDelete = () => {

  return (

    <Modal
        trigger={<Button>Delete</Button>}
        dimmer='inverted'
        size='tiny'
        closeIcon
        >

        <Modal.Header>Delete Question</Modal.Header>

        <Modal.Content>
          <p>Are you sure you want to delete this question?</p>
        </Modal.Content>
        
        <Modal.Actions>
          <Button onClick={this.handleSubmit} data-questionID={this.props.question._id} color='red'>Yes</Button>
          <Button onClick={this.handleClose} color='black'>No</Button>
        </Modal.Actions>

      </Modal>
  );

}


//=================================================================================
// Export
//=================================================================================

export default QuestionsDelete;
