import React, { useContext } from 'react'
import { AppContext } from './context';

const Shop = () => {

  const { shopItems, addItemToCart } = useContext(AppContext)

  return (
    <div className="App">
      shop component
      <ul>
        {
          shopItems.map((item, index) => 
            <li key={index} onClick={() => addItemToCart(item)}>{item}</li>
          )
        }
      </ul>
      
    </div>
  );
}

export default Shop;
