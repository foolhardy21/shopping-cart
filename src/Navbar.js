import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navigation'>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/shop'>Shop</Link>
                    </li>
                    <li>
                        <Link to='/shop/cart'>Cart</Link>
                    </li>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                </ul>
    </nav>
  );
}

export default Navbar;
