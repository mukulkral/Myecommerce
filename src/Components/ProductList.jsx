import React, { useEffect } from "react";
import "./ProductList.css";
import { fetchAsync } from "../Store/ProductSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

function ProductList() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.products.products);
  console.log(data);

  useEffect(() => {
    dispatch(fetchAsync());
  }, [dispatch]);

  return (
    <>
      <h1 className="categoryHeading">All Products</h1>
      <div className="productListContainer">
        {data.map((product) => (
          <div className="card" key={product.id}>
            <div className="image">
              <img src={product.image} alt="Denim Jeans" />
            </div>

            <h1>{product.title}</h1>
            <p className="price">${product.price}</p>
            <p>{product.description.slice(0, 50)}...</p>

            <Link className="link" to={`/${product.id}`}>
              <button className="btn">Buy now</button>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

export default ProductList;
