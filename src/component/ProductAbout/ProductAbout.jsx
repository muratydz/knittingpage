import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getAllKnitting } from '../../redux/slices/apiSlicer';
import "../../css/ProductAbout.css"



function ProductAbout() {

    const dispatch = useDispatch();

    const { id } = useParams();

    const { knitting } = useSelector(store => store.knitting)

    useEffect(() => {
        dispatch(getAllKnitting());
    }, [dispatch])

    const product = knitting?.find(item => item.id === id);


    return (
        <div className='product-about container'>
            {product ? (
                <div key={product.id} className='product-main'>
                    <div>
                        <img src={product.img} alt={product.header} />
                    </div>
                    <div>
                        <h2>{product.header}</h2>
                        <p>{product.description}</p>
                    </div>
                </div>
            ) : (
                <p>Ürün bulunamadı</p>
            )}
            {product ? (
                <div>
                    <h2>PRODUCT DETAİLS</h2>
                    <div className='product-details'>
                        <div>
                            <p>{product.details}</p>
                        </div>
                        <div className='product-slider'>
                        </div>
                    </div>
                </div>
            ) :
                (
                    null
                )}
        </div>
    )
}

export default ProductAbout
