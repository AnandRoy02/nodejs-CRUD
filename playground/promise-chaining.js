require('../src/db/mongoose')
const User = require("../src/models/user")


// User.findByIdAndUpdate("5e8efe19f7a3c51b6c2ad206", { age: 1 }).then((user) => {
//     console.log(user)
//     return User.countDocuments({ age: 1 })
// }).then((count) => {
//     console.log(count)
// }).catch((e) => {
//     console.log(e)
// })

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age })
    const count = await User.countDocuments({ age })
    return count
}

updateAgeAndCount('5e8efe19f7a3c51b6c2ad206', 2).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})