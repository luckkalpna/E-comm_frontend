import React from "react";

const AddProduct  = () =>{
    const [name, setName] = React.useState("");
    const [price, setPrice] = React.useState("");
    const [category, setCategory] = React.useState("");
    const [company, setComapny] = React.useState("");
    const AddProduct = async () =>{
        console.log(name, price, category, company)
        const userId = JSON.parse(localStorage.getItem("user"))._id;
        // Await the fetch call
    let result = await fetch("http://localhost:5000/add-product", {
        method: "post",
        body: JSON.stringify({ name, price, category, company, userId}),
        headers: {
          "Content-Type": "application/json",
        },
      });

      // Await the result.json() call
      result = await result.json();
      console.log(result);
    //   localStorage.setItem("user", JSON.stringify(result));
    //   if (result) {
    //     navigate("/");
    //   }
    // };
     }
    return(
        <div className="add-product">
      <h1>Add Product</h1>
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

      <button onClick={AddProduct} className="add-product-btn" type="button">
        Add Product
      </button>
    </div>
    )
}

export default AddProduct;