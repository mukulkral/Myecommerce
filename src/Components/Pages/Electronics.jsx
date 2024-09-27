import React, { useEffect } from "react";
import "./Electronics.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchAsync } from "../../Store/ProductSlice";
import { Link } from "react-router-dom";

function Electronics() {
  const electronicsArray = [];
  const electronicsdata = useSelector((state) => state.products.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAsync());
  }, []);

  electronicsdata.find((item) => {
    if (item.category == "electronics") {
      electronicsArray.push(item);
    }
  });
  console.log(electronicsArray);
  return (
    <>
      <h1 className="categoryHeading">Electronics</h1>
      <div className="productListContainer">
        {electronicsArray.map((product) => (
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

export default Electronics;
