import React, {useEffect, useState} from 'react';
import BookingsList from '../components/BookingsList';
import NewBookingForm from '../components/NewBookingForm';
import {getBookings} from './BookingService';

const HotelBookingContainer = function (){

    const [bookings, setBookings] = useState([])

    useEffect(() => {
        getBookings()
        .then(result => setBookings(result))
    }, [])

    return (
        <div className='hotel-booking-container'>
        <h2>Hello from HotelBookingContainer</h2>
        <NewBookingForm/>
        <BookingsList bookings={bookings}/>
        </div>
    )
};

export default HotelBookingContainer