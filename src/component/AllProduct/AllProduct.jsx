import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllKnitting } from '../../redux/slices/apiSlicer';
import "../../css/AllProduct.css"
import { useNavigate } from 'react-router-dom';

function AllProduct() {
    const dispatch = useDispatch();

    const { knitting } = useSelector(store => store.knitting);

    useEffect(() => {
        dispatch(getAllKnitting());
    }, [])

    const navigate = useNavigate();

    return (
        <div className='all-product' >
            <div className='knitting-body' >
                {knitting && knitting.map((item) => (
                    <div className='card' key={item.id} onClick={() => navigate("/product-about/" + item.id)}>
                        <div className='card-header'>
                            <img src={item.img} alt={item.header} />
                        </div>
                        <div className='card-body'>
                            <h2>{item.header}</h2>
                            <p>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AllProduct
