import React from 'react';
import BookingItem from './BookingItem';


const BookingsList = function ({bookings, removeBooking}){
    
    const BookingItems = bookings.map(booking => {
        return <BookingItem booking = {booking} key={booking._id} removeBooking={removeBooking}/>
    });


    return (
    <>
    {BookingItems}
    </>
    )
};

export default BookingsList;