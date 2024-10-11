import React, { useEffect, useState } from "react";

const ProductList = () =>{

  const [product, setProduct] = useState([]);

  useEffect(()=>{
    getProducts();
  }, []);

  const getProducts = async () =>{
    let result = await fetch("http://localhost:5000/products");
    result = await result.json();
    setProduct(result);
  }

  const deleteProduct = async (id) =>{
    let result = await fetch(`http://localhost:5000/${id}`, {
      method:"Delete"
    });
    result  = await result.json();
    if(result){
      getProducts();
    }else{
      alert("Try again");
    }
  }

  return(
    <div className="product-list">
      <h3>Product List</h3>
      <ul>
        <li><b>S.No</b></li>
        <li><b>Name</b></li>
        <li><b>Price</b></li>
        <li><b>Category</b></li>
        <li><b>Operation</b></li>
      </ul>
      {
        product.map((item, index)=>
          <ul key={item._id}>
        <li>{index+1}</li>
        <li>{item.name}</li>
        <li>$ {item.price}</li>
        <li>{item.category}</li>
        <li><button onClick={()=>{deleteProduct(item._id)}}>Delete</button></li>
      </ul>
        )
      }
    </div>
    )
}

export default ProductList;