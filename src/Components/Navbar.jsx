import React from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";


function Navbar() {
  const cartdata = useSelector(state => state.Allcart.cart)
  console.log(cartdata)
 

  return (
    <>
      <div className="sidebarContainer">
        <div className="logo">
          <Link to="/">
            <img
              className="logoimage"
              src="https://cdn.pixabay.com/photo/2023/10/10/19/46/ai-generated-8307333_640.png"
              alt=""
            />
          </Link>
        </div>
        <div className="ulandcartcontainer">
          <ul className="listcontainer">
            <li>
              <NavLink to="/men" className=" listitem">
                Men
              </NavLink>
            </li>
            <li>
              <NavLink to="/woman" className="listitem">
                Woman
              </NavLink>
            </li>
            <li>
              <NavLink to="/electronics" className="listitem">
                Electronics
              </NavLink>
            </li>
            <li>
              <NavLink to="/jewelery" className="listitem">
                Jewelery
              </NavLink>
            </li>
          </ul>
          <div className="cartLogo">
            <div className="countItem">
              <h1>{cartdata.length}</h1>
            </div>
            <Link to="/cart">
              <i class="fa-solid fa-cart-shopping cartLogo"></i>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
