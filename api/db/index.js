const mongoose = require('mongoose')
const uri = "mongodb+srv://frosted_mikan:Artmadillo0815@artdillo.hpnjn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

mongoose
    .connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })


// mongoose
//     .connect('mongodb://127.0.0.1:27017/artdillo', { useNewUrlParser: true })
//     .catch(e => {
//         console.error('Connection error', e.message)
//     })

const db = mongoose.connection

module.exports = db