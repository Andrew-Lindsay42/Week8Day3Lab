import React from 'react';

const BookingItem = function({booking}){
    
    let booked = ''

    if (booking.checked_in) {
        booked = 'True'
    } else {
        booked = 'False'
    }

    return (
    <div className='booking_item'>
    <h4>{booking.name}</h4>
    <p>{booking.email} {booked}</p>
    </div>
    )
};

export default BookingItem;