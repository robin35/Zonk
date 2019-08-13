//==================================================================================================================================
// Dependencies
//==================================================================================================================================
import React from 'react';
// import React, { Component } from 'react';
// import React, { useState } from 'react';


import { Button, Modal } from 'semantic-ui-react'
// import { Container } from 'semantic-ui-react';
// // import { Link } from 'react-router-dom';
// import axios from 'axios';
import './searchquestions.css';


//==================================================================================================================================
// Function Component
//==================================================================================================================================

const ModalExampleShorthand = () => (
    <Modal
      trigger={<Button>Show Modal</Button>}
      header='Reminder!'
      content='Call Benjamin regarding the reports.'
      actions={['Snooze', { key: 'done', content: 'Done', positive: true }]}
    />
  )
  


  


//==================================================================================================================================
// Export
//==================================================================================================================================

  export default ModalExampleShorthand