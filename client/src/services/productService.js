import axios from 'axios'
const baseUrl = '/api/products'

const getProducts = async (category) => {
    const response = await axios.get(`${baseUrl}/${category}`)
    return response.data
}

export default {
    getProducts
}