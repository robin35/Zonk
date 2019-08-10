//==================================================================================================================================
// Dependencies
//==================================================================================================================================

import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import axios from 'axios';
import './searchquestions.css';


//==================================================================================================================================
// 
//==================================================================================================================================

const Search = () => {

    // Sets the inital value of the form fields to blank using the React Hook "useState"
    // The useState hook lets you use state and other React features without writing a class.
    const [formData, setFormData] = useState({
        searchTopic: ''
    });

    // formData is a javaScript constructor.  It populates the FormData object with the form's current key/value pairs 
    // using the name property of each element for the keys and their submitted value for the values.
    const { searchTopic } = formData;

    // React does not detect when a user types in a form.  
    // onChange is an event handler that captures the changes as they happen.
    const onChange = event => setFormData({ searchTopic: event.target.value });

    // Populates the newSearch object with the form data
    const onSubmit = async event => {
        event.preventDefault();
        console.log(formData);

        try {
            const res = await axios.get(`/api/searchquestions/${searchTopic}`);
            
            console.log(res.data);

        } catch(err) {
            console.error(err.res.data);
        }



    };



    return (

        <div className="container" id="container">
            <div className="sign-up-container ">
                <form onSubmit={event => onSubmit(event)}>

                    <h1>Select a question topic:</h1>
                    <br />
                    <select onChange={ event => onChange(event) }>
                        {/* <option value="none" selected disabled hidden> 
                            -- Select a Topic -- 
                        </option> */}
                        <option value="80s Music">80s Music</option>
                        <option value="Baseball">Baseball</option>
                        <option value="Football">Football</option>
                        <option value="Jurassic Park">Jurassic Park</option>
                        <option value="Mathematics">Mathematics</option>
                        <option value="Science">Science</option>
                        <option value="Soccer">Soccer</option>
                        <option value="Star Wars">Star Wars</option>
                        <option value="US History">US History</option>
                    </select>
                    <br />
                                    
                    <div className='buttons'>
                        {/* <Link to='/questions'> */}
                            <button>Submit</button>
                        {/* </Link> */}
                    </div>

                </form>

                <br /><br />
                <div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                        <th scope="col">Topic</th>
                        <th scope="col">Question</th>
                        <th scope="col">ChoiceA</th>
                        <th scope="col">ChoiceB</th>
                        <th scope="col">ChoiceC</th>
                        <th scope="col">ChoiceD</th>
                        <th scope="col">Correct Choice</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row"></th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        </tr>

                    </tbody>
                    </table>
                    </div>

            </div>
        </div>


        )
    };
    
export default Search;