import "./Cart.css";
import { useDispatch, useSelector } from "react-redux";
import { decrement, deletefromCart, increment } from "./CartSlice";
function Cart() {
  const dispatch = useDispatch();

  const { cart, totalQuantity, totalPrice } = useSelector(
    (state) => state.Allcart
  );
  console.log(totalQuantity);

  return (
    <>
      <div className="maincontainer">
        {cart.map((item, index) => (
          <div key={index}>
            <div className="cartcontainer">
              <div className="imageanddetails">
                <div className="image">
                  <img src={item.image} alt="" />
                </div>
                <div className="cartItemDetails">
                  <div className="cartitemtitle">
                    <h1>{item.title}</h1>
                  </div>
                  <div className="cartitemprice">
                    <h1>${item.price}</h1>
                  </div>
                  <div
                    className="deleteitem"
                    onClick={() => dispatch(deletefromCart(item.id))}
                  >
                    <i class="fa-solid fa-trash"></i>
                  </div>
                </div>
              </div>
              <div className="itemQuantity">
                <div className="button">
                  <button
                    className="cartbtn"
                    onClick={() => dispatch(increment(item.id))}
                  >
                    +
                  </button>
                  <input type="text" value={item.quantity} />
                  <button
                    className="cartbtn"
                    onClick={() => dispatch(decrement(item.id))}
                  >
                    -
                  </button>
                </div>
                <div className="totalPrice">
                  <h1>{item.price * item.quantity}</h1>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="summary">
          <h1 className="summaryheading">Summary</h1>
          <hr />
          <hr />
          <hr />
          <hr />
          <div className="quantity">
            <h1 className="summarytitle">TotalQuantity:</h1>
            <p>{totalQuantity}</p>
          </div>
          <hr />
          <div className="price">
            <h1 className="summarytitle">TotalPrice:</h1>
            <p>${totalPrice}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
