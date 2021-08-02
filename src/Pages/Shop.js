import React, { useContext } from 'react'
import { AppContext } from '../context';
import Notification from '../Components/Notification';

const Shop = () => {

  const { shopItems, addItemToCart } = useContext(AppContext)

  return (
    <div className = 'items-container'>
      <Notification />      
      <ul className = 'items-grid'>
        {
          shopItems.map(item => {
            const { id, name } = item 
            return <li 
            className = 'grid-item'
            key = {id} 
            onClick = {() => addItemToCart(name, id)}
            >
              {name}
            </li>
          })
        }
      </ul>
    </div>
  );
}

export default Shop;
