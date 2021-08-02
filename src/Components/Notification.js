import React, { useContext } from 'react'
import { AppContext } from '../context';

const Notification = () => {

  const { isItemAdded, setIsItemAdded } = useContext(AppContext)

  if (isItemAdded) {
      setTimeout(() => {
        setIsItemAdded(false)
      },500)
      return (
        <div className='message'>item added to cart</div>
      )
  }
  return null
}

export default Notification;
