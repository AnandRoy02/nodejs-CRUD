// const mongodb = require("mongodb")
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

const { MongoClient, ObjectID } = require("mongodb")
// mongoose.set('useUnifiedTopology', true);
const connectionURL = "mongodb://127.0.0.1:27017"
const databaseName = "task-manager"

// const id = new ObjectID()
// console.log(id);
// console.log(id.getTimestamp())

MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
    if (error) {
        return console.log("unable to connect to database");
    }
    console.log("connectd succssfully");

    const db = client.db(databaseName);


    /****Create****/

    // db.collection('users').insertOne({
    //     _id: id,
    //     name: "anand",
    //     age: 27
    // }, (error, result) => {
    //     if (error)
    //         return console.log("unable to insert user");
    //     console.log(result.ops);
    // });

    // db.collection('task').insertMany(
    //     [{
    //         description: "learn node",
    //         completed: true
    //     },
    //     {
    //         description: "learn mongoDB",
    //         completed: true
    //     },
    //     {
    //         description: "say Hello to Rajat",
    //         completed: false
    //     }
    //     ], (error, result) => {
    //         if (error)
    //             return console.log("unable to process");
    //         console.log(result.ops);
    //     }
    // )
    // db.collection('users').findOne({ _id: new ObjectID("5e8deb0d2fc54540600d4f75") }, (error, user) => {
    //     if (error)
    //         return console.log("unable to fetch");
    //     console.log(user)
    // })

    /****Read****/

    // db.collection('users').find({ name: "anand" }).toArray((error, users) => {
    //     console.log(users);
    // });
    // db.collection('users').find({ name: "anand" }).count((error, count) => {
    //     console.log(count);
    // })


    /****Update****/

    //to use callback use callbak function as third arg else it will be promise by default
    // const updatePromise = db.collection('users').updateOne({
    //     _id: new ObjectID("5e8decc076565e08ace7f76f")
    // }, {
    //     $set: {
    //         name: "gade"
    //     }
    // })
    // updatePromise.then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })
    // db.collection('users').updateOne({
    //     _id: new ObjectID("5e8decc076565e08ace7f76f")
    // }, {
    //     $set: {
    //         name: "gade"
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    /*****Deleting*****/
    db.collection('users').deleteOne(
        {
            _id: new ObjectID("5e8decc076565e08ace7f76f")
        }
    ).then((resolve) => {
        console.log(resolve)
        console.log("successfully deleted");
    }).catch((error) => {
        console.log(error);
    })
});