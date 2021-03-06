const express = require("express")
require('./db/mongoose')
const User = require('./models/user')
const Task = require('./models/task')

const app = express()
const port = process.env.PORT || 4000

//convert/parse incoming json to object
app.use(express.json())

// app.post('/users', (req, res) => {
//     console.log(req.body)
//     // res.send("testing!")
//     const user = new User(req.body)

//     user.save().then(() => {
//         res.status(201).send(user)
//     }).catch((error) => {
//         console.log(error);
//         res.status(400).send(error)
//         // res.send(error)
//     })
// })

/*******using async-await********/


app.post('/users', async (req, res) => {
    const user = new User(req.body)
    try {
        await user.save()
        res.status(201).send(user)
    } catch (e) {
        res.status(400).send(e)
    }
})


app.get('/users', async (req, res) => {
    try {
        const users = await User.find({})
        res.send(users)

    } catch (e) {
        res.status(500).send()
    }
    // User.find({}).then((users) => {
    //     res.send(users)
    // }).catch((e) => {
    //     res.status(500).send()
    // })
})

app.get('/users/:id', async (req, res) => {
    console.log(req.params)
    const _id = req.params.id

    try {
        const user = await User.findById(_id)

        if (!user)
            return res.status(404).semd()

        res.send(user)

    } catch (e) {
        res.status(500).send()
    }

    // User.findById(_id).then((user) => {
    //     if (!user) {
    //         return res.status(404).send()
    //     }

    //     res.send(user)
    // }).catch((e) => {
    //     res.status(500).send()
    // })

})

app.patch('/users/:id', async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['name', 'email', 'password', 'age']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))
    if (!isValidOperation)
        return res.status(400).send("error:Invalid updates!")
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
        if (!user)
            return res.status(404).send()
        res.send(user)
    } catch (e) {
        res.status(400).send(e)
    }
})

app.delete('/users/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id)
        if (!user)
            return res.status(404).send()
        res.send(user)
    } catch (e) {
        res.status(500).send(e)
    }
})

app.post('/tasks', async (req, res) => {
    // console.log(req.body)
    const task = new Task(req.body)
    try {
        task.save()
        res.status(201).send(task)
    } catch (e) {
        res.status(400).send(e)
    }


    // task.save().then(() => {
    //     res.status(201).send(task)
    // }).catch((e) => {
    //     res.status(400).send(e)
    // })

})

app.get('/tasks', async (req, res) => {

    try {
        const task = await Task.find({})
        res.send(task)
    } catch (e) {
        res.status(404).send()
    }

    // Task.find({}).then((task) => {
    //     res.send(task)
    // }).catch((e) => {
    //     res.status(404).send()
    // })
})

app.get('/task/:id', async (req, res) => {
    console.log(req.params)
    const _id = req.params.id

    try {

        const task = await Task.findById(_id)
        if (!task)
            return res.status(404).send()
        res.send(task)
    } catch (e) {
        res.status(500).send()
    }

    // Task.findById(_id).then((task) => {
    //     if (!task) {
    //         return res.status(404).send()
    //     }

    //     res.send(task)
    // }).catch((e) => {
    //     res.status(500).send()
    // })
})

app.patch('/task/:id', async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['description', 'completed']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))
    if (!isValidOperation)
        return res.status(400).send('error: Invlid updates!')
    try {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
        if (!task)
            return res.status(404).send()
        res.send(task)
    } catch (e) {
        res.status(400).send(e)
    }
})

app.delete('/tasks/:id', async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id)
        if (!task)
            return res.status(404).send()
        res.send(task)
    } catch (e) {
        res.status(500).send(e)
    }
})

app.listen(port, () => {
    console.log("server is up on port " + port)
})