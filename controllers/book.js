const {Book} = require('../models');

exports.list = async function list(req, res) {
    try {
    const books = await Book.find({});
    res.json(books); 
    } catch (e) {
        res.status(500);
    }
};

exports.add = async function addBook(req, res) {
    const book = await Book.create(req.body);
    res.json(book);
};


exports.delete = async function deleteBook(req, res) {
    const { _id } = req.params;
    await Book.remove({ _id });
    res.json({ _id });
};