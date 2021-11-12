// const express = require('express')

// const app = express()
// app.use(express.json())
// app.use(express.urlencoded({ extended: false }))

// app.get('/test', function (req, res) {
//   res.send('Test successful')
// })


// export default {
//   path: '/api',
//   handler: app
// }

const express = require('express')
const cors = require('cors')

const db = require('./db')
const userRouter = require('./routes/user-router')
const listingRouter = require('./routes/listing-router')

const app = express()
const apiPort = 3000

app.use(cors())
app.use(express.json())

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

// app.get('/test', (req, res) => {
//     res.send('Hello World!')
// })

// app.use('/api', userRouter)
// app.use('/api', listingRouter)

const User = require('./models/user-model')

app.post('/user', (req, res) => {
  const body = req.body
  if (!body) {
      return res.status(400).json({
          success: false,
          error: 'Create a user',
      })
  }
  const user = new User(body)
  if (!user) {
      return res.status(400).json({ success: false, error: err })
  }
  user
      .save()
      .then(() => {
          return res.status(201).json({
              success: true,
              id: user._id,
              message: 'User created',
          })
      })
      .catch(error => {
          return res.status(400).json({
              error,
              message: 'Failed to create user',
          })
      })
})

export default {
  path: '/api',
  handler: app
}

// app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))