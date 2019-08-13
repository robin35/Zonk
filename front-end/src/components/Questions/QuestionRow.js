//=================================================================================
// Dependencies
//=================================================================================

import React from 'react';
import { Table } from 'semantic-ui-react'
import QuestionEdit from './Question3Edit';
import QuestionDelete from './Question4Delete';

//=================================================================================
// Configure Row
//=================================================================================

class QuestionRow extends React.Component {

    render () {

        let questions = this.props.state.questions;
       
        let questionList = questions.map((question) => 
        
            <Table.Row >
                <Table.Cell>{question.topic}</Table.Cell>
                <Table.Cell>{question.question}</Table.Cell>
                <Table.Cell>{question.answera}</Table.Cell>
                <Table.Cell>{question.answerb}</Table.Cell>
                <Table.Cell>{question.answerc}</Table.Cell>
                <Table.Cell>{question.answerd}</Table.Cell>
                <Table.Cell>
                        <QuestionEdit />
                        <QuestionDelete />

                </Table.Cell>
            </Table.Row>
        );


        return (
         <div>


                {questionList}


         </div>
        )
    }
}

//=================================================================================
// Export
//=================================================================================

export default QuestionRow;