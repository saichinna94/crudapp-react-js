import React, { useState } from 'react'
import {addproduct} from '../services/ProductService';
import { useNavigate } from 'react-router-dom';
const AddProduct = () => {
  const [state, setState] = useState({name:'',price:'',quantity:''});
  const navigate = useNavigate();
  const handler=(event)=>{

    const {name,value}=event.target;
    setState({...state,[name]:value});

  }
  const handleSubmit=(event)=>{
    event.preventDefault(); //Stop form Submission
    // console.log(state);
    addproduct(state)

    .then(res=>{
      if(res.data){
        alert("Product Item is Added");
        //redirect to products

        navigate("/products");
      }
    })
    .catch(err=> console.log(err));
    
  }
  return (
    <div>
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
      <div className='form-group'>
        <label>Name</label>
        <input type="text" name="name" className='form-control' onChange={handler} />
      </div>
      <div className='form-group'>
        <label>Price</label>
        <input type="text" name="price" className='form-control' onChange={handler} />
      </div>
      <div className='form-group'>
        <label>Quantity</label>
        <input type="text" name="quantity" className='form-control' onChange={handler} />
      </div> <br />
      <input type="submit" value="Add Product" className='btn btn-success' />
      </form>
    </div>
  )
}

export default AddProduct
