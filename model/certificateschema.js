const mongoose = require("mongoose");

const certificateSchema = new mongoose.Schema({
    title: { type: "string", required: true },
    about: { type: "string", required: true },
    link: { type: "string", required: true },
})
mongoose.models = {}
const Project = mongoose.model('cdata',certificateSchema);

module.exports = Project;
