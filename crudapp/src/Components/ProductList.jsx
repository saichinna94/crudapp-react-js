import React from 'react'
import { Link } from 'react-router-dom';
const ProductList = ({ product, delPro, addCart }) => {
    return (
        <div className="card col-sm-4 m-1" style={{width: '18rem'}}>
            <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">
                    Price: Rs. {product.price}  <br />
                    Quantity: {product.quantity} 
                </p>
                <button className="btn btn-danger m-1" onClick={()=> delPro(product.id)}>Delete
                </button>
                <Link to={`/editproduct/${product.id}`} className='btn btn-primary'>Edit</Link>
                <button className="btn btn-success m-1" onClick={()=> addCart(product.id)}>Add Cart
                </button>
            </div>
        </div>
    )
}

export default ProductList
