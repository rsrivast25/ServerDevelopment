const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const commentScehma = new Schema({

    rating: {
        type: Number,
        min:1,
        mas:5,
        required:true,
    },

    comment: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    }
}, {
    timestamps: true

});

const dishSchema = new Schema({
    name: {
        type: String,
        required : true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    comments: [commentScehma]
},{
        timestamps: true

});

var Dishes = mongoose.model('Dish', dishSchema);

module.exports = Dishes;