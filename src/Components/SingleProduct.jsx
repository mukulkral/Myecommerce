import React, { useEffect, useState } from "react";
import "./SingleProduct.css";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAsync } from "../Store/ProductSlice";
import { addToCart } from "./Cart/CartSlice";

function SingleProduct() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.products.products);
  const cartdata = useSelector((state) => state.products.cartItems);
  console.log(cartdata);

  const [singleitem, setSingleitem] = useState([]);
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    dispatch(fetchAsync());
  }, []);

  localStorage.setItem(
    "singleProduct",
    JSON.stringify({ ...singleitem, quantity: 1 })
  );

  const itemsdata = JSON.parse(localStorage.getItem("singleProduct"));
  console.log(itemsdata);

  useEffect(() => {
    data.find((item) => {
      if (item.id == id) {
        return setSingleitem(item);
      }
    });
  }, [data]);


  const handleClick = ()=>{
    dispatch(addToCart(itemsdata))
    dispatch(quantityincrement())
  }

  return (
    <>
      <div className="singleproductContainer">
        <div className="imageContainer">
          <img src={itemsdata.image} />
        </div>
        <div className="productDetails">
          <div className="productTitle">
            <h1>{itemsdata.title}</h1>
          </div>
          <div className="productDescription">
            <p>{itemsdata.description}</p>
          </div>
          <div className="productPrice">
            <h1>${itemsdata.price}</h1>
          </div>
          <div className="addtoCart">
            <Link>
              <button
                onClick={handleClick}
                className="addtocartBtn"
              >
                add to Cart <i className="fa-solid fa-cart-shopping"></i>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleProduct;
