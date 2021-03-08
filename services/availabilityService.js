const axios = require('axios')
const xml2js = require('xml2js')

exports.getAvailability = async (manufacturer, attempts = 0) => {
    const availabilityResponse = await axios.get(`https://bad-api-assignment.reaktor.com/v2/availability/${manufacturer}`)
    const availability = availabilityResponse.data.response

    if (!Array.isArray(availability) && attempts < 5) {
        return this.getAvailability(manufacturer, attempts + 1)
    }

    const formattedAvailabilityPromises = availability.map(async item => ({
        id: item.id,
        DATAPAYLOAD: await xml2js.parseStringPromise(item.DATAPAYLOAD)
    }))


    const formattedAvailability = await Promise.all(formattedAvailabilityPromises)

    return formattedAvailability
}