process.env.NODE_ENV === 'development' && require('dotenv').config()

const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT

const productRouter = require('./routers/productRouter')
const availabilityRouter = require('./routers/availabilityRouter')

app.use(express.static(path.join(__dirname, './client/build')))

app.use('/api/products', productRouter)
app.use('/api/availabilities', availabilityRouter)

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './client/build/index.html'))
})

app.listen(port, () => {
  console.log(`Clothing-warehouse API up and running on PORT:${port}`)
})