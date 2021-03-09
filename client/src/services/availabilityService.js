import axios from 'axios'
const baseUrl = '/api/availabilities'

const getAvailability = async (manufacturer) => {
    const response = await axios.get(`${baseUrl}/${manufacturer}`)
    return response.data
}

const availabilityService = { getAvailability }

export default availabilityService