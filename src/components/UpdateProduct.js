import React from "react";

const UpdateProduct = () => {
  const [name, setName] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [company, setComapny] = React.useState("");
  const UpdateProduct = async () => {
    console.log(name, price, category, company);
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
