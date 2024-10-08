import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () =>{
  const auth = localStorage.getItem("user");
  const navigate = useNavigate();
  const logout = () =>{
    // console.log("apple")
    localStorage.clear();
    navigate("/signup")

  }
    return(
        <div>
          <img className="logo" src="https://img.freepik.com/free-photo/black-friday-elements-assortment_23-2149074075.jpg" alt="logo" />
          { auth ? <ul className="nav-ul">
                <li><Link to="/">Product</Link></li>
                <li><Link to="/add">Add Product</Link></li>
                <li><Link to="/update">Update Product</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link onClick={logout} to="/signup">Logout ({JSON.parse(auth).name})</Link></li>
                </ul>
                :
                <ul  className="nav-ul nav-right">
                  <li> <Link to="/signup">SignUp</Link></li>
                  <li><Link to="/login">Login</Link></li>
                </ul>
            }




        </div>
    )
}

export default Navbar;