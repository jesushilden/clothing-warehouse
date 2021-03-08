import { Fragment } from 'react'
import './Product.css'

const Product = ({ product }) => {

    const getAvailabilityColor = (availability) => {
        switch (availability) {
            case 'INSTOCK':
                return 'green'
            case 'LESSTHAN10':
                return 'yellow'
            case 'OUTOFSTOCK':
                return 'red'
            default:
                return 'inherit'
        }
    }

    return (
        <div className='Product'>
            <div className='ProductInfoColumn'>
                <div>
                    <span className='ProductName'>{product.name}</span>
                    <span className='ProductManufacturer'> by {product.manufacturer}</span>
                </div>
                <div>
                    <span>colors: </span>
                    {product.color.map(color =>
                        <Fragment key={color}>
                            <span className='ProductColor' style={{ backgroundColor: color }}></span>
                            <span> {color} </span>
                        </Fragment>
                    )}
                </div>
                <div>price: {product.price}€</div>
            </div>
            <div className='ProductAvailabilityColumn' style={{ backgroundColor: getAvailabilityColor(product.availability) }}>
                {product.availability}
            </div>
        </div>
    )
}

export default Product