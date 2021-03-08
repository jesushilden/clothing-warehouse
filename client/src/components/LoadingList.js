import { Fragment } from 'react'
import './LoadingList.css'

const LoadingList = () => {

    let loadingProducts = []

    for (let i = 0; i < 20; i++) {
        loadingProducts.push(
            <Fragment key={i}>
                <div className='ProductLoader'></div>
            </Fragment>
        )
    }

    return loadingProducts
}

export default LoadingList