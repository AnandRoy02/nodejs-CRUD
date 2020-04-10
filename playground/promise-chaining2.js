require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete("5e8e2a0014d8413c50003553", ({ age: 1 })).then((task) => {
//     console.log(task)
//     return Task.countDocuments(({ completed: false }))
// }).then((count) => {
//     console.log(count)
// }).catch((e) => {
//     console.log(e)
// })


const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: false })
    return count
}

deleteTaskAndCount('5e8f0396deb7b31a70146e62').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})