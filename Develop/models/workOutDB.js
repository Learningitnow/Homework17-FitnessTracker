const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day:{
        type: Date,
        default: Date.now()
    },
    exercises:[{
        type: {
            type: String,
            default: ""
        },
        name: {
            type: String,
            default: ""
        },
        duration: {
            type: Number,
            min:0
        },
        weight: {
            type: Number,
            min:0
        },
        reps: {
            type: Number,
            min:0
        },
        sets: {
            type: Number,
            min:0
        },
        distance: {
            type: Number,
            min:0
        }
    }] 
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;