const express = require('express')
const app = express()

const PORT = process.env.PORT || 5000

app.get('/api/hello', (req, res) =>
  res.send({
    message: `Node express proxy on port ${PORT}.`
  })
)

app.use(express.static(`${__dirname}/client/build`))

app.get('*', (req, res) => res.sendFile(`${__dirname}/client/build/index.html`))

app.listen(PORT, () => console.log(`I'm listening on port ${PORT}`))
