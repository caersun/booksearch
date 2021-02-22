const db = require("../models");

module.exports = {
    // read all
    findAll: (req, res) => {
        db.Book.find(req.query)
            .sort({ date: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    // real one
    findById: (req, res) => {
        db.Book.find(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    // create
    create: (req, res) => {
        db.Book.create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.json(err)); //.status(422)
    },
    // update
    update: (req, res) => {
        db.Book.findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    // delete
    remove: (req, res) => {
        db.Book.findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
}