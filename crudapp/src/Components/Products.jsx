import React, { useEffect, useState } from 'react'
import {deleteProduct, getProducts} from "../services/ProductService";
import ProductList from './ProductList';

const Products = () => {
  const [proData,setProData] = useState([]);
  useEffect(()=>{
    getProducts()
    .then(res=>{
      // console.log(res.data);
      setProData(res.data);
    })
    .catch(err=> console.log(err));
  },[])
  const delPro=(id)=>{
    if(window.confirm("Do You Want to Delete the Product ?")){
        deleteProduct(id)
        .then(res=>{
          if(res.data){
            let data = proData.filter(pro=> pro.id!=id);
            setProData(data);
            alert("Product Item is Deleted!")
          }
        })
        .catch(err=> console.log(err))
    }
  }
  const addCart=(id)=>{
    alert(id);
  }
  return (
    <div>
      <h1>Latest Products</h1>
      <div className='row'>
          {proData.map(pro=>
              <ProductList key={pro.id} product={pro} delPro={delPro} addCart={addCart}/>
            )}
      </div>
    </div>
  )
}

export default Products
