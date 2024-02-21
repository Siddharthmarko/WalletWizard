const mongoose = require('mongoose');

const expensLogTypeSchema = new mongoose.Schema({
    description: {
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

module.exports = mongoose.model('expensloglype', expensLogTypeSchema);
