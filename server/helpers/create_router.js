const express = require('express');
const ObjectId = require('mongodb').ObjectId;

const createRouter = function (collection) {

    const router = express.Router();

    router.get('/', (request, response) => {
        collection
        .find()
        .toArray()
        .then(results => response.json(results))
        .catch((err) => {
            console.error(err);
            response.status(500);
            response.json({ status: 500, error: err });
    })
    });

    router.get('/:id', (request, response) => {
        const id = request.params.id
        collection
        .findOne({_id: ObjectId(id)})
        .then(result => response.json(result))
        .catch((err) => {
            console.error(err);
            response.status(500);
            response.json({ status: 500, error: err });
    })
    });

    router.post('/', (request, response) => {
        const newData = request.body;
        collection
        .insertOne(newData)
        .then(result => response.json(result))
        .catch((err) => {
            console.error(err);
            response.status(500);
            response.json({ status: 500, error: err });
    })
    });

    router.delete('/:id', (request, response) => {
        const id = request.params.id
        collection
        .deleteOne({_id: ObjectId(id)})
        .then(result => response.json(result))
        .catch((err) => {
            console.error(err);
            response.status(500);
            response.json({ status: 500, error: err });
    })
    });

    return router
};

module.exports = createRouter;