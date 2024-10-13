import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdateProduct = () => {
  const [name, setName] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [company, setComapny] = React.useState("");
  const params = useParams();
  const navigate = useNavigate();

  useEffect(()=>{
    getProductDetails();
  },[])

  const getProductDetails = async () =>{
    console.log(params);
    let result = await fetch(`http://localhost:5000/product/${params.id}`);
    result = await result.json();
    // console.log(result)
    setName(result.name);
    setPrice(result.price);
    setCategory(result.category);
    setComapny(result.company);
  }


  const UpdateProduct = async () => {
    console.log(name, price, category, company);
    let result = await fetch(`http://localhost:5000/product/${params.id}`, {
      method: "PUT",
      body: JSON.stringify({name, price, category, company}),
      headers: {
        'Content-Type' : 'application/json'
      }
    });
    result = await result.json();
    console.log(result);
    navigate("/");
  };


  return (
    <div className="update-product">
      <h1>Update Product</h1>
      <input
        className="inputfields"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Product Name"
      />

      <input
        className="inputfields"
        type="text"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Product Price"
      />

      <input
        className="inputfields"
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Category"
      />

      <input
        className="inputfields"
        type="text"
        value={company}
        onChange={(e) => setComapny(e.target.value)}
        placeholder="Comapny"
      />

      <button onClick={UpdateProduct} className="update-product-btn" type="button">
        Update Product
      </button>
    </div>
  );
};

export default UpdateProduct;
