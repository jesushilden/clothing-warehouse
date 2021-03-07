process.env.NODE_ENV === 'development' && require('dotenv').config()

const express = require('express')
const app = express()
const port = process.env.PORT

const productRouter = require('./routers/productRouter')

app.use('/api/products', productRouter)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})