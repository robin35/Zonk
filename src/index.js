import React from 'react';
import ReactDOM from 'react-dom';

import CreateQuestion from './pages/CreateQuestion';
import CreateAnswers from './pages/CreateAnswers';
import '../src/pages/style.css';


const App = () => {

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

ReactDOM.render(<App />,document.querySelector('#root'));