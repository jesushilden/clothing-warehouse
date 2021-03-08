import { Fragment } from 'react'
import Product from './Product'
import './ProductList.css'

const ProductList = ({ products }) => {
    return (
        <div className='ProductList'>
            {products.map(product =>
                <Fragment key={product.id}>
                    <Product product={product} />
                    <div className='ProductSeparator'></div>
                </Fragment>
            )}
        </div>
    )
}

export default ProductList