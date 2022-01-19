import React from 'react';
import BookingItem from './BookingItem';


const BookingsList = function ({bookings}){

    console.log(bookings);
    
    const BookingItems = bookings.map(booking => {
        return <BookingItem booking = {booking} key={booking._id}/>
    });


    return (
    <>
    <h3>Hello from BookingsList</h3>
    {BookingItems}
    </>
    )
};

export default BookingsList;