import React from 'react';
import '../../style.css';

const CreateQuestion = (props) => {

    return (
        <form className="ui form">

            <div className="field">
                <div>Enter Question text here:</div>
                <label className="question">{props.children}</label>
                <input type="text" name="question" placeholder="Question Text" />
            </div>


        </form>
    );
};

export default CreateQuestion;