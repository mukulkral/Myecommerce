import React, { useEffect } from "react";
import "./Jewelery.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchAsync } from "../../Store/ProductSlice";
import { Link } from "react-router-dom";

function Jewelery() {
  const jeweleryArray = [];
  const jewelerydata = useSelector((state) => state.products.products);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchAsync());
  }, []);
  jewelerydata.find((item) => {
    if (item.category == "jewelery") {
      jeweleryArray.push(item);
    }
  });
  return (
    <>
      <h1 className="categoryHeading">Jewelery</h1>

      <div className="productListContainer">
        {jeweleryArray.map((product) => (
          <div className="card" key={product.id}>
            <div className="image">
              <img src={product.image} alt="Denim Jeans" />
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

export default Jewelery;
