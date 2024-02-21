const mongoose = require('mongoose');

const expensLogSchema = new mongoose.Schema({
    description: {
        type: String,
        maxlength: 500 // Enforce max length
    },
    tag: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'expenstags'
    },
    amount: {
        type: String,
        required: true // Enforce amount field
    },
    category: {
        type: Number, // Assuming category is a numerical reference
        required: true // Enforce category field
    },
    payto: {
        type: String, 
        required: true 
    },
    method: {
        type: Number, // Assuming method is a numerical reference
        required: true // Enforce method field
    },
    date: {
        type: String,
        required: true // Enforce date field
    },
    trash: {
        type: Number,
        default: 0
    },
    type: {
        type: Number,
        default: 0
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

module.exports = mongoose.model('ExpensLog', expensLogSchema);
