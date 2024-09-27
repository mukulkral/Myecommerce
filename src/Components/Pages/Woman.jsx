import React, { useEffect } from "react";
import "./Woman.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchAsync } from "../../Store/ProductSlice";
import { Link } from "react-router-dom";

function Woman() {
  const womanArray = [];
  const womandata = useSelector((state) => state.products.products);
  const dispatch = useDispatch();
  console.log(womandata);

  womandata.find((item) => {
    if (item.category == "women's clothing") {
      womanArray.push(item);
    }
  });

  useEffect(() => {
    dispatch(fetchAsync());
  }, []);

  console.log(womanArray);

  return (
    <>
      <h1 className="categoryHeading">Woman</h1>
      <div className="productListContainer">
        {womanArray.map((product) => (
          <div className="card" key={product.id}>
            <div className="image">
              <img src={product.image} alt="Denim Jeans" />
            </div>

            <h1>{product.title}</h1>

            <p className="price">${product.price}</p>
            <p>{product.description.slice(0, 50)}...</p>

            <Link className="link" to={`/${product.id}`}>
              <button>Buy now </button>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

export default Woman;
