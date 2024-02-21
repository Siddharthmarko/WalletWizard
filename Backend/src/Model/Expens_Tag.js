const mongoose = require('mongoose');

const expensTagSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true 
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('expenstags', expensTagSchema);
