import React, {useState} from 'react';

import {postBooking} from '../containers/BookingService.js'

const NewBookingForm = function ({addBooking}){
   
    const [formData, setFormData] = useState({})

    const onChange = (event) =>{
        formData[event.target.id] = event.target.value;
        setFormData(formData);
    }

    const onSubmit = (event) =>{
        event.preventDefault();
        postBooking(formData)  
        .then((data)=>{
            addBooking(data.insertedId, formData);
        })
    }

    return (
        <div className='booking-form'>
        <form onSubmit={onSubmit}>
            <label htmlFor='name'>Name: </label>
            <input onChange={onChange} id='name' type='text'></input>
            <label htmlFor='email'>Email: </label>
            <input onChange={onChange} id='email' type='email'></input>
            <label htmlFor='checked_in'>Checked In? </label>
            <select onChange={onChange} id='check_in'>
                <option value='true'>Yes</option>
                <option value='false'>No</option>
            </select>
            <input type='submit' value='Save' id='save'></input>
            

        </form>
        </div>
    )
};
export default NewBookingForm