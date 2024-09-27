import React, { useEffect, useState } from "react";
import "./Men.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchAsync } from "../../Store/ProductSlice";
import { Link } from "react-router-dom";

function Men() {
  const dispatch = useDispatch();
  const menArray = []; 

  const mendata = useSelector((state) => state.products.products);

  useEffect(() => {
    dispatch(fetchAsync());
  }, []);
  console.log(
    mendata.find((item) => {
      if (item.category == "men's clothing") {
        menArray.push(item);
      }
    })
  );
  console.log(menArray);

  return (
    <>
      <h1 className="categoryHeading">Men</h1>
      <div className="productListContainer">
        {menArray.map((product) => (
          <div className="card" key={product.id}>
            <div className="image">
              <img src={product.image} alt="Denim Jeans" className="productImages"/>
            </div>

            <h1>{product.title}</h1>

            <p className="price">${product.price}</p>
            <p>{product.description.slice(0, 50)}...</p>

            <Link className="link" to={`/${product.id}`}>
              
              <button>Buy now</button>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

export default Men;
