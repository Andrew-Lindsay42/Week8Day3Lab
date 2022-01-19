use hotel;
db.dropDatabase();

db.bookings.insertMany([
    {
      name: "Gary Bennett",
      email: "big-gaz@gmail.com",
      checked_in: false
    },
    {
        name: "AlexANDER Gregson-MacLeod",
        email: "lil-lex@hotmail.com",
        checked_in: true
    },
    {
        name: "Andrew Lindsay",
        email: "coolest-man-alive@aol.com",
        checked_in: true
    }
  ]);