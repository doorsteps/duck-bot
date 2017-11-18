const express = require('express') //node 8.5 native module support does not support libraries.
const debug = require('debug')
const logger = require('morgan')
const bodyParser = require('body-parser')

const app = express()
const log = debug('server')

const port = process.env.PORT

app.use(bodyParser.urlencoded({extended: true}))
app.use(logger('tiny'))


app.listen(port, () => {
  console.log('We are live on ' + port)
  console.log('Let the games begin...')
})

app.get('/', (req, res) => {
  res.status(200).send('Tha duck don\'t cluck! The duck stay ready.')
})

app.post('/message', (req, res) => {
  console.log(`req.body: \n ${req.body.user_name}`)

  const name = req.body.user_name
  const payload = {
    text: `whaddup ${name}...the duck is here for you, and tha duck don\'t cluck! The duck _stay_ ready.\n What's on your mind?`
  }
  res.status(200).json(payload)
  // if (name !== 'slackbot') {
  //   res.status(200).json(payload)
  // } else {
  //   res.status(200).end()
  // }
})





