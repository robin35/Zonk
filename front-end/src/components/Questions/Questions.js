//==================================================================================================================================
// Dependencies
//==================================================================================================================================

import React, { useState } from 'react';
import axios from 'axios';
import './question.css';



const Questions = () => {

    // Sets the inital value of the form fields to blank using the React Hook "useState"
    // The useState hook lets you use state and other React features without writing a class.
    const [formData, setFormData] = useState({
        topic: '',
        question: '',
        answera: '',
        answerb: '',
        answerc: '',
        answerd: '',
        correct: ''
    });

    // formData is a javaScript constructor.  It populates the FormData object with the form's current key/value pairs 
    // using the name property of each element for the keys and their submitted value for the values.
    const { topic, question, answera, answerb, answerc, answerd, correct } = formData;

    // React does not detect when a user types in a form.  
    // onChange is an event handler that captures the changes as they happen.
    const onChange = event => setFormData({ ...formData, [event.target.name]: event.target.value });

    // Populates the newUser object with the form data
    const onSubmit = async event => {
        event.preventDefault();
        console.log(formData);
        
        const newQuestion = {
            topic,
            question,
            answera,
            answerb,
            answerc,
            answerd,
            correct
        }

        try {
            // configures the header that will accompany the json body below
            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            }

            // Takes the data populated into the neUser object and stringify's it to json
            // Posts the data to mongoDB Atlas using the server side route
            const body = JSON.stringify(newQuestion);
            const res = await axios.post('/api/questions', body, config);
            console.log(res.data);

        } catch(err) {
            console.error(err.res.data);
        }
    };

    // The body of the form starts here
    return (

        <form className="ui container form" onSubmit={event => onSubmit(event)}>

            <div className="field">
                <div>Enter Topic and Question text here:</div>

                <label>Topic:</label>
                <input 
                    type="text" 
                    name="topic" 
                    placeholder="Topic" 
                    value={topic} 
                    onChange={event => onChange(event)}
                    required />

                <label>Question:</label>
                <input 
                    type="text" 
                    name="question" 
                    placeholder="Question Text" 
                    value={question} 
                    onChange={event => onChange(event)}
                    required />

                <div>Enter answer choices below:</div>

                <label>Answer Choice A:</label>
                <input 
                    type="text" 
                    name="answera" 
                    placeholder="Enter answer A" 
                    value={answera} 
                    onChange={event => onChange(event)}
                    required />

                <label>Answer Choice B:</label>
                <input 
                    type="text" 
                    name="answerb" 
                    placeholder="Enter answer B" 
                    value={answerb} 
                    onChange={event => onChange(event)}
                    required />

                <label>Answer Choice C:</label>
                <input 
                    type="text" 
                    name="answerc" 
                    placeholder="Enter answer C" 
                    value={answerc} 
                    onChange={event => onChange(event)}
                    required />

                <label>Answer Choice D:</label>
                <input 
                    type="text" 
                    name="answerd" 
                    placeholder="Enter answer D" 
                    value={answerd} 
                    onChange={event => onChange(event)}
                    required />

                <div>Enter correct answer below:</div>
                <input 
                    type="text" 
                    name="correct" 
                    placeholder="Correct Answer" 
                    value={correct} 
                    onChange={event => onChange(event)}
                    required />
            </div>
           
            <input 
                type='submit' 
                className='btn btn-primary' 
                value='Add this Question' />  

        </form>
    );
};

export default Questions;