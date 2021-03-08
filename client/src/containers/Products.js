import { useEffect, useState } from 'react'
import productService from '../services/productService'

const Products = ({ category }) => {
    const [products, setProducts] = useState([])

    useEffect(async () => {
        const productsOfCategory = await productService.getProducts(category)
        setProducts(productsOfCategory)
    }, [])

    return <div>
        {category}
    </div>
}

export default Products