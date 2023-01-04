const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
    language: { type: "string", required: true },
    title: { type: "string", required: true },
    about: { type: "string", required: true },
    link: { type: "string", required: true },
})

const Project = mongoose.model('pdata',projectSchema);

module.exports = Project;