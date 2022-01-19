const express = require('express');
const ObjectID = require('mongodb').ObjectId;

const createRouter = function (collection) {

    const router = express.Router();

    router.get('/', (request, response) => {
        collection
        .find()
        .toArray()
        .then((docs) => response.json(docs))
        .catch((err) => {
            console.error(err);
            res.status(500);
            res.json({ status: 500, error: err });
    })
});

    return router
};

module.exports = createRouter;