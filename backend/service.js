const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({

    title : {
        type: String,
        required: [true,"title must be provided"],
    },
    description: {
        type: String,
        required: [true,"description must be provided"],
    }
});

module.exports = mongoose.model('services',serviceSchema);