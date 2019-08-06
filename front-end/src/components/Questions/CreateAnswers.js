import React from 'react';
//import './quest.css';

const CreateAnswers = (props) => {

    return (
        <div className="field">
            <input className="answer" type="text" name="question" placeholder="Enter answer text" value={props.children} />
        </div>
    );
};

export default CreateAnswers;