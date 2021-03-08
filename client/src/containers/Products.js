import { useEffect, useState } from 'react'
import LoadingList from '../components/LoadingList'
import ProductList from '../components/ProductList'
import productService from '../services/productService'
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
            {amount < products.length && <div onClick={() => setAmount(amount + 20)} className='LoadMoreButton'>Load more</div>}
        </div>
    )
}

export default Products