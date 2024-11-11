import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getAllKnitting } from '../../redux/slices/apiSlicer';
import "../../css/AllProduct.css"

function ProductAbout() {

    const dispatch = useDispatch();

    const { id } = useParams();

    const { knitting } = useSelector(store => store.knitting)

    useEffect(() => {
        dispatch(getAllKnitting());
    }, [])

    return (
        <div className='product-about'>
            {knitting && knitting.map((item) => (
                item.id == id ? (
                    <div key={item.id}>
                        <img src={item.img} alt={item.header} />
                        <h2>{item.header}</h2>
                        <p>{item.description}</p>

                    </div>
                ) : null
            ))}
        </div>
    )
}

export default ProductAbout
