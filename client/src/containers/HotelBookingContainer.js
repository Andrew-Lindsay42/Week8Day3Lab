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

    const addBooking = (id, data) => {
        const newBooking = data
        newBooking._id = id
        const temp = [...bookings, newBooking]
        setBookings(temp)
    };

    const removeBooking = (booking) => {
        const newBookings = bookings.filter(filteredBooking => filteredBooking !== booking)
        setBookings(newBookings)
    };

    return (
        <div className='hotel-booking-container'>
        <h2>Hotels yeah!!!</h2>
        <NewBookingForm addBooking={addBooking}/>
        <BookingsList bookings={bookings} removeBooking={removeBooking}/>
        </div>
    )
};

export default HotelBookingContainer