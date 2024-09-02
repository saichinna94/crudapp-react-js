import axios from "axios";
const API_URL = "http://localhost:3001/products";

const getProducts=()=>{
    return axios.get(API_URL);
}
const getProductById=(id)=>{
    return axios.get(`${API_URL}/${id}`)
}
const addproduct=(data)=> {
    return axios.post(API_URL,data);
}
const deleteProduct=(id)=> {
    return axios.delete(`${API_URL}/${id}`)
}
const updateProduct=(id,data)=> {
    return axios.put(`${API_URL}/${id}`,data)
}
export{getProducts,getProductById,addproduct,deleteProduct,updateProduct}