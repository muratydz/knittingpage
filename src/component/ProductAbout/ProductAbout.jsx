import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getAllKnitting } from '../../redux/slices/apiSlicer';
import "../../css/ProductAbout.css"



function ProductAbout() {

    const dispatch = useDispatch();

    const { id } = useParams();

    const { knitting } = useSelector(store => store.knitting);

    useEffect(() => {
        dispatch(getAllKnitting());
        window.scrollTo(0, 0);
    }, [dispatch])

    const product = knitting?.find(item => item.id === id);


    return (
        <div className='product-about container'>
            {product ? (
                <>
                    <div key={product.id} className='product-main'>
                        <div>
                            <img src={product.img} alt={product.header} />
                        </div>
                        <div>
                            <h2>{product.header}</h2>
                            <p>{product.description}</p>
                        </div>
                    </div>

                    <div className='product-details'>
                        <h2>PRODUCT DETAİLS</h2>
                        <div className='product-contant'>
                            <div>
                                <p>{product.details}</p>
                            </div>
                            <div className='product-slider'>
                                <img src={product.detailsImg[0]} alt="" />
                            </div>
                        </div>
                    </div>
                </>
            ) : (<p>Ürün bulunamadı</p>)}
        </div>
    )
}

export default ProductAbout
