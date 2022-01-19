import React from 'react';
import BookingsList from '../components/BookingsList';
import NewBookingForm from '../components/NewBookingForm';

const HotelBookingContainer = function (){

    return (
        <div className='hotel-booking-container'>
        <h2>Hello from HotelBookingContainer</h2>
        <NewBookingForm/>
        <BookingsList/>
        </div>
    )
};

export default HotelBookingContainer