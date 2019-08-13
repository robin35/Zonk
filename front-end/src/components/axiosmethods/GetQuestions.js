//==================================================================================================================================
// Dependencies
//==================================================================================================================================

import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import axios from './node_modules/axios';



//==================================================================================================================================
// Get Data
//==================================================================================================================================

const GetQuestions = () => {

    const [formData, setFormData] = useState({
        searchTopic: ''
    });

    const { searchTopic } = formData;

    const onChange = event => setFormData({ searchTopic: event.target.value });

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


//=================================================================================
// Get Questions by Topic
//=================================================================================

export const getQuestjionsByTopic = userId => async dispatch => {
    try {
      const res = await axios.get(`/api/profile/user/${userId}`);
  
      dispatch({
        type: GET_PROFILE,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: PROFILE_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
      });
    }
  };