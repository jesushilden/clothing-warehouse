
const productRouter = require('express').Router()
const productController = require('../controllers/productController')

productRouter.get('/:category', productController.getProducts)

module.exports = productRouter
