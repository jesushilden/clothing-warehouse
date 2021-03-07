const axios = require('axios')
const availabilityService = require('./availabilityService')

exports.getProducts = async (category) => {
    const productsResponse = await axios.get(`https://bad-api-assignment.reaktor.com/v2/products/${category}`)
    const products = productsResponse.data

    const manufacturers = products.map(product => product.manufacturer)
    const uniqueManufacturers = [...new Set(manufacturers)]

    const availabilityPromises = uniqueManufacturers.map(manufacturer => availabilityService.getAvailability(manufacturer))
    const availabilities = await Promise.all(availabilityPromises)

    return products
}