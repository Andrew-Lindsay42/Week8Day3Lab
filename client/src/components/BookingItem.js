import React from 'react';
import {deleteBooking} from '../containers/BookingService';

const BookingItem = function({booking, removeBooking}){
    
    const handleBinClick = () => {
        deleteBooking(booking._id)
        removeBooking(booking)
    }

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
    <i onClick={handleBinClick} className="far fa-trash-alt"></i>
    </div>
    )
};

export default BookingItem;