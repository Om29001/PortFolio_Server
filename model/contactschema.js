const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
    name: { type: "string", required: true },
    mail: { type: "string", required: true },
    message: { type: "string", required: true },
})

const Contact = mongoose.model('mdata',contactSchema); //mdata = message data

module.exports = Contact;