import React, { useContext } from 'react'
import { AppContext } from './context';

const Shop = () => {

  const { shopItems, addItemToCart } = useContext(AppContext)

  return (
    <div className="center-align">
      shop component
      <ul>
        {
          shopItems.map(item => {
            const { id, name } = item 
            return <li 
            key={id} 
            onClick={() => addItemToCart(name, id)}>{name}</li>
          })
        }
      </ul>
      
    </div>
  );
}

export default Shop;
