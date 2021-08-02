import React, { useContext } from 'react'
import { AppContext } from './context';
import { Link } from 'react-router-dom'

const Cart = () => {
  const 
  { cartItems, 
    increaseQty, 
    decreaseQty,
    checkout, 
    setCheckout,
    getNewSession,
    getCartQuantity,
   }                  = useContext(AppContext)

    if(checkout) {
      return (
        <div>
          <Link to='/'>
            <button 
            onClick={() => getNewSession()}
            >
              Shopping Done. Click for Home Page.
            </button>
          </Link>
        </div>
        
      )
    } else if(getCartQuantity()) {
      return (
        <div className="center-align">
          <button onClick={() => setCheckout(true)}>Checkout</button>
          <ul>
            {
              cartItems.map(item => {
                const { id, name, quantity } = item
                if ( !quantity ) return null
                return (<li key={id}>
                  {name}
                  <button onClick={() => increaseQty(id)}>+</button>
                  <button onClick={() => decreaseQty(id)}>-</button>
                  </li>) 
              }
                    
              )
            }
          </ul>
        </div>
      );
    }
    return null
  
}

export default Cart;
