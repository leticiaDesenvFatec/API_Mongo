const mongoose = require('mongoose');
const { Schema } = mongoose;

const leadsSchema = new Schema ({
    description: String,
    client: String,
    date: Date,
    status: String,
    classification: String
});

module.exports = mongoose.model('Leads', leadsSchema);