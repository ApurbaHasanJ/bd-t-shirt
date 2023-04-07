import React from "react";
import './Cart.css'

const Cart = ({ cart, handleRemoveFromCart }) => {
    let message;
    if(cart.length === 0){
        message = <p>Please Add Some Products</p>
    }
    else{
        message = <div>
            <p>tnx 4 wasting ur mny</p>
        </div>
    }
  return (
    <div>
      <h2 className={cart.length === 1 ? 'blue' : 'red'}>Order Summary: {cart.length}</h2>
      <p className={`bold  ${cart.length === 3 ? 'yellow' : 'red'}`}>Something</p>
      {cart.length > 2 ? <span className="purple">Borolox</span> : <span>Goribs</span>}
      {message}
      {
        cart.map((tshirt) => (
            <p key={tshirt._id}>
              {tshirt.name}{" "}
              <button onClick={() => handleRemoveFromCart(tshirt._id)}>Remove</button>
            </p>
          ))
      }
      {
        cart.length === 2 && <p>Double bonanza!!!</p>
      }
      {
        cart.length === 3 || <h3>3 ta to hoilo na!!</h3>
      }
    </div>
  );
};

export default Cart;

/**
 * CONDITIONAL RENDERING
 * 1. use if else to set a variable that will contain an element, components
 * 2. ternary operator : condition ? 'for true' : 'for false'
 * 3. logical &&: (if the condition is true then the next thing will be displayed)
 * 4. logical || (if the condition is false then the next thing will be displayed)
 * 
 */

/**
 * CONDITIONAL CSS Class
 * 1. use ternary
 * 2. ternary inside template string
 */