import React from 'react';
import BookingItem from './BookingItem';


const BookingsList = function ({bookings, removeBooking}){
    
    const BookingItems = bookings.map(booking => {
        return <BookingItem booking = {booking} key={booking._id} removeBooking={removeBooking}/>
    });


    return (
    <>
    <h3>Hello from BookingsList</h3>
    {BookingItems}
    </>
    )
};

export default BookingsList;