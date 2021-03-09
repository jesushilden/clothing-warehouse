const availabilityService = require('../services/availabilityService')

exports.getAvailability = async (request, response) => {
    const manufacturer = request.params.manufacturer

    try {
        const availability = await availabilityService.getAvailability(manufacturer)
        response.json(availability)
    } catch (exception) {
        console.log(exception)
        response.status(400).json({ error: 'Something went wrong' })
    }
}