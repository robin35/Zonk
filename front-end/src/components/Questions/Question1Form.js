//=================================================================================
// Dependencies
//=================================================================================

import React from 'react';
import { Message, Button, Dropdown, Form, Select } from 'semantic-ui-react';


//=================================================================================
// Configure Dropdown Menu Items
//=================================================================================

const topicOptions = [
    { key: 1, text: 'Choice 1', value: 'Baseball' },
    { key: 2, text: 'Choice 2', value: 'Basketball' },
    { key: 3, text: 'Choice 3', value: 'Jurassic' },
    { key: 4, text: 'Choice 4', value: 'Mathematics' },
    { key: 5, text: 'Choice 5', value: 'Music' },
    { key: 6, text: 'Choice 6', value: 'Science' },
    { key: 7, text: 'Choice 7', value: 'Soccer' },
    { key: 8, text: 'Choice 8', value: 'SocialStudies' },
    { key: 9, text: 'Choice 9', value: 'StarWars' }
  ]


//=================================================================================
// Configure Input/Edit Form
//=================================================================================

const QuestionsForm = () => {

    return (

        <Form>

            <Button.Group color='green'>
                <Button>Submit</Button>
                <Dropdown
                    className='button icon'
                    floating
                    options={topicOptions}
                    trigger={<React.Fragment />}
                />
                <Select placeholder='Select a topic' options={topicOptions} />
            </Button.Group>


            <Form.Input
                label='Topic'
                type='text'
                placeholder='Enter a topic'
                name='topic'
                maxLength='40'
                required
                value={this.state.name}
                onChange={this.handleInputChange}
            />
            <Form.Input
                label='Question'
                type='text'
                placeholder='Enter question text'
                name='question'
                maxLength='80'
                required
                value={this.state.question}
                onChange={this.handleInputChange}
            />

            <Form.Group widths='equal'>
                <Form.Input
                    label='Answer A'
                    type='text'
                    placeholder='Enter answer A'
                    name='answera'
                    maxLength='40'
                    required
                    value={this.state.answera}
                    onChange={this.handleInputChange}
                />
                <Form.Input
                    label='Answer B'
                    type='text'
                    placeholder='Enter answer B'
                    name='answerb'
                    maxLength='40'
                    required
                    value={this.state.answera}
                    onChange={this.handleInputChange}
                />
                <Form.Input
                    label='Answer C'
                    type='text'
                    placeholder='Enter answer C'
                    name='answerc'
                    maxLength='40'
                    required
                    value={this.state.answera}
                    onChange={this.handleInputChange}
                />
                <Form.Input
                    label='Answer D'
                    type='text'
                    placeholder='Enter answer D'
                    name='answerd'
                    maxLength='40'
                    required
                    value={this.state.answera}
                    onChange={this.handleInputChange}
                />
            </Form.Group>

            <Form.Input
                label='Correct'
                type='text'
                placeholder='Enter correct answer'
                name='correct'
                maxLength='1'
                required
                value={this.state.correct}
                onChange={this.handleInputChange}
            />          

            <Message
            success
            color='green'
            header='Question added!'
            //   content={formSuccessMessage}
            />
            <Message
            warning
            color='yellow'
            header='There is a problem!'
            //   content={formErrorMessage}
            />

      </Form>
    );
  }


//=================================================================================
// Export
//=================================================================================

export default QuestionsForm;
