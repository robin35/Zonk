import React from 'react';

import CreateQuestion from './CreateQuestion';
import CreateAnswers from './CreateAnswers';
import '../../style.css';


const AddQuestions = () => {

    return (
        <form className="ui container form">

            <CreateQuestion>
            </CreateQuestion>
            <br/>
            <div className="field">Enter Answer text below:
                <CreateAnswers answer="A. This" />
                <CreateAnswers answer="B. That" />
                <CreateAnswers answer="C. This" />
                <CreateAnswers answer="D. That" />
            </div>
            <br/>
            <button className="ui button" type="submit">Add this Question</button>
        </form>

    );
};

export default AddQuestions;