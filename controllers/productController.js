const productService = require('../services/productService')

exports.getProducts = async (request, response) => {
    const category = request.params.category

    try {
        const products = await productService.getProducts(category)
        response.json(products)
    } catch (exception) {
        console.log(exception)
        response.status(400).json({ error: 'Something went wrong' })
    }
}