import React, { useEffect } from 'react'
import "../../css/KnittingList.css"
import { useDispatch, useSelector } from 'react-redux'
import { getAllKnitting } from '../../redux/slices/apiSlicer';
import { Link, useNavigate } from 'react-router-dom';

function Knitting() {
  const dispatch = useDispatch();

  const { knitting } = useSelector(store => store.knitting);

  useEffect(() => {
    dispatch(getAllKnitting());
  }, [])

  const navigate = useNavigate();

  return (
    <div className='container main-knitting'>
      <div className='knitting-title'>
        <h2>ALL PRODUCT</h2>
      </div>
      <div className='knitting-list'>
        <div className='knitting-header'>
          {knitting && knitting.slice(0, 1).map((item) => (
            <div className='card' key={item.id} onClick={() => navigate("/product-about/" + item.id)}>
              <div className="card-header">
                <img src={item.img} alt="img1" />
              </div>
              {/* <div className="card-body">
                <h2>{item.header}</h2>
                <p>{item.description}</p>
              </div> */}
            </div>
          ))}
        </div>
        <div className='knitting-body'>
          {knitting && knitting.slice(1, 5).map((item) => (
            <div className='card' key={item.id} onClick={() => navigate("/product-about/" + item.id)}>
              <div className='card-header'>
                <img src={item.img} alt={item.header} />
              </div>
              <div className='card-body'>
                <h2>{item.header}</h2>
                <p>{item.description.substring(0,25) + "..."}</p>
              </div>
            </div>
          ))}
          <Link to={"/product"}>All Product</Link>
        </div>
      </div>

    </div>
  )
}

export default Knitting
