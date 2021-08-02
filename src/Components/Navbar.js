import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import { AppContext } from '../context';

const Navbar = () => {
    const { getCartQuantity } = useContext(AppContext)

  return (
    <nav className='navigation'>
        <Link to='/'>
            <div className='logo'>shopit</div>
        </Link>
        <ul>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/shop'>Shop</Link>
            </li>
            <li>
                <Link to='/cart'>
                    Cart <span>{`${getCartQuantity()> 0 ? `${getCartQuantity()}` : ''}`}</span>
                </Link>
            </li>
            <li>
                <Link to='/about'>About</Link>
                </li>
        </ul>
    </nav>
  );
}

export default Navbar;
