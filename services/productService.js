const axios = require('axios')
const availabilityService = require('./availabilityService')

exports.getProducts = async (category) => {
    const productsResponse = await axios.get(`https://bad-api-assignment.reaktor.com/v2/products/${category}`)
    const products = productsResponse.data
    return products
}