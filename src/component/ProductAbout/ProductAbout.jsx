import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getAllKnitting } from '../../redux/slices/apiSlicer';

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
                    <>
                        <div className='card-header'>
                            <img src={item.img} alt={item.header} />
                        </div>
                        <div className='card-body'>
                            <h2>{item.header}</h2>
                            <p>{item.description}</p>
                        </div>
                    </>
                ) : null
            ))}
        </div>
    )
}

export default ProductAbout
