const mongoose = require('mongoose')

const Task = mongoose.model('Task', {
    description: {
        type: String,
        trim: true,
        required: true

    },
    completed: {
        type: Boolean,
        default: false
    }
})

// const task1 = new Tasks({
//     description: "      learn mongoose yay",
//     complete: true

// })
// task1.save().then(() => {
//     console.log(task1);
// }).catch((error) => {
//     console.log("Error!!!", error)
// })

module.exports = Task