const akses = require("express").Router();
const BukuModel = require("./model.js");

akses.route("/").get((req, res) => {
  BukuModel.find()
    .then((books) => res.status(200).json(books))
    .catch((err) => res.status(400).json("Error: " + err));
});

akses.route("/delete/:id").delete((req, res) => {
  BukuModel.findByIdAndDelete(req.params.id)
    .then(() => res.status(200).json("Buku berhasil dihapus"))
    .catch((err) => res.status(400).json("Error: " + err));
});

akses.route("/update/:id").put((req, res) => {
  BukuModel.findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.status(200).json("Buku berhasil diupdate"))
    .catch((err) => res.status(400).json("Error: " + err));
});

akses.route("/add").post((req, res) => {
  BukuModel.create(req.body)
    .then(() => res.status(200).json("Buku berhasil ditambahkan"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = akses;
