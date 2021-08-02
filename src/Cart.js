import React, { useContext } from 'react'
import { AppContext } from './context';

const Cart = () => {
  const { cartItems } = useContext(AppContext)

  return (
    <div className="App">
      cart component {cartItems.length}
      <ul>
        {
          cartItems.map((item, index) =>
            <li key={index}>{item}</li>    
          )
        }
      </ul>
    </div>
  );
}

export default Cart;
