import React, { useContext } from 'react'
import { AppContext } from '../context';
import { Link } from 'react-router-dom'

const Cart = () => {
  const 
  { 
    cartItems, 
    increaseQty, 
    decreaseQty,
    checkout, 
    setCheckout,
    getNewSession,
    getCartQuantity,
   }                  = useContext(AppContext)

    if ( checkout ) {
      return (
          <Link to = '/'>
            <button 
            onClick = {() => getNewSession()}
            >
              Done. Head to Home Page.
            </button>
          </Link>        
      )
    } else if ( getCartQuantity() ) {
      return (
        <div>
          <button 
          onClick = {() => setCheckout(true)}>Checkout</button>
          <ul className='items-grid'>
            {
              cartItems.map(item => {
                const { id, name, quantity } = item
                return (
                  <li 
                  className='grid-item'
                  key={id}
                  >
                    {name} - {quantity}
                    <button className='cart-item-btn' onClick = {() => increaseQty(id)}>+</button>
                    <button className='cart-item-btn' onClick = {() => decreaseQty(id)}>-</button>
                  </li>
                ) 
              })
            }
          </ul>
        </div>
      );
    }
    return null
  
}

export default Cart;
