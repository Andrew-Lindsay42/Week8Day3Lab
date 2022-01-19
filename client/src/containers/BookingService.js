const baseurl = 'http://localhost:5000/api/bookings'

export const getBookings = function () {
    return fetch(baseurl)
    .then(res => res.json())
}