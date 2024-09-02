import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getProductById, updateProduct } from '../services/ProductService';

const EditProduct = () => {
  const [state,setState] = useState({});
  const [errMsg,setErrMsg] = useState("");
  const navigate = useNavigate();
  const {id} = useParams(); //get id from parameter
  useEffect(()=>{
    // behalf of id get products from apis.
      getProductById(id)
      .then(res=>{
        console.log(res.data);
        setState(res.data);
      })
      .catch(err=> console.log(err));
  },[id])
  const handler=(event)=>{
    const {name,value}= event.target;
    setState({...state,[name]:value})
  }
  const handleSubmit=(event)=>{
    event.preventDefault();
    if(state.name!="" && state.price!="" && state.quantity!=""){
      updateProduct(id,state)
      .then(res=>{
        if(res.data){
          alert("Product Item is Updated")
          navigate("/products");
        }
      })
      .catch(err=> console.log(err))
    }
    else{
      setErrMsg("Enter the blank fields!")
    }
  }
  return (
    <div>
      {errMsg!='' && <div className='aler alert-danger'>{errMsg}</div>}
      <h2>Edit Product</h2>
      <form onSubmit={handleSubmit}>
      <div className='form-group'>
        <label>Name</label>
        <input type="text" name="name" className='form-control'value={state.name} onChange={handler}/>
      </div>
      <div className='form-group'>
        <label>Price</label>
        <input type="text" name="price" className='form-control'value={state.price} onChange={handler}/>
      </div>
      <div className='form-group'>
        <label>Quantity</label>
        <input type="text" name="quantity" className='form-control'value={state.quantity} onChange={handler}/>
      </div> <br />
      <input type="submit" value="Update Product" className='btn btn-primary' />
      </form>
    </div>
  )
}

export default EditProduct
