const baseUrl = 'http://localhost:5000/api/bookings'

export const getBookings = function () {
    return fetch(baseUrl)
    .then(res => res.json())
};

export const postBooking = function (payload) {
    return fetch(baseUrl, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json'}
    })
    .then(res => res.json())
};

export const deleteBooking = function (id) {
    return fetch(baseUrl + id, {
        method: 'DELETE'
    })
};