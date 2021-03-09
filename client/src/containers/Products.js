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
            let productsOfCategory = await productService.getProducts(category)
            setProducts(productsOfCategory)
            setLoading(false)

            const manufacturers = productsOfCategory.map(product => product.manufacturer)
            const uniqueManufacturers = [...new Set(manufacturers)]
            uniqueManufacturers.map(async manufacturer => {
                try {
                    const manufacturerAvailability = await availabilityService.getAvailability(manufacturer)

                    const productsWithAvailability = productsOfCategory.map(product => {
                        if (product.manufacturer !== manufacturer) return product

                        const productAvailability = manufacturerAvailability.find(availability => availability.id === product.id.toUpperCase())

                        return {
                            ...product,
                            availability: productAvailability.availability
                        }
                    })

                    productsOfCategory = productsWithAvailability

                    setProducts(productsOfCategory)
                } catch (exception) {

                    const productsWithFailedAvailability = productsOfCategory.map(product => {
                        if (product.manufacturer !== manufacturer) return product

                        return {
                            ...product,
                            availability: 'FAILED'
                        }
                    })

                    productsOfCategory = productsWithFailedAvailability

                    setProducts(productsOfCategory)
                }
            })
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