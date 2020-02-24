const mongoose = require('mongoose');
const { Schema } = mongoose;

const courtSchema = new Schema({
    court: {type: String, required: true},
    state: {type: Boolean, required: true}
});

module.exports = mongoose.model('Court', courtSchema);