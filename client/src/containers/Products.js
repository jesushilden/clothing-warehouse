import { useEffect, useState } from 'react'
import LoadingList from '../components/LoadingList'
import ProductList from '../components/ProductList'
import productService from '../services/productService'
import availabilityService from '../services/availabilityService'
import './Products.css'

const Products = ({ category }) => {
    const [products, setProducts] = useState([])
    const [amount, setAmount] = useState(20)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchProducts = async () => {
            const productsOfCategory = await productService.getProducts(category)
            setProducts(productsOfCategory)
            setLoading(false)

            const manufacturers = productsOfCategory.map(product => product.manufacturer)
            const uniqueManufacturers = [...new Set(manufacturers)]
            const availabilityPromises = uniqueManufacturers.map(async manufacturer => {
                try {
                    return await availabilityService.getAvailability(manufacturer)
                } catch (exception) {
                    return []
                }
            })
            const availabilities = await Promise.all(availabilityPromises)

            const productsWithAvailability = productsOfCategory.map(product => {
                const availabilityIndex = uniqueManufacturers.indexOf(product.manufacturer)
                const productAvailability = availabilities[availabilityIndex].find(availability => availability.id === product.id.toUpperCase())

                return {
                    ...product,
                    availability: productAvailability ? productAvailability.availability : 'FAILED'
                }
            })

            setProducts(productsWithAvailability)
        }

        fetchProducts()
    }, [])

    if (loading) {
        return (
            <div className='Products'>
                <LoadingList />
            </div>
        )
    }

    return (
        <div className='Products'>
            <ProductList products={products.slice(0, amount)} />
            {amount < products.length && <div onClick={() => setAmount(amount + 20)} className='LoadMoreButton'>Show more</div>}
        </div>
    )
}

export default Products