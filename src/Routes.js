import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import App from './App'
import Shop from './Shop'
import About from './About'
import Cart from './Cart'

const Routes = () => {
    return (
        <Router>
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

            <Switch>
                <Route path='/' exact>{App}</Route>
                <Route path='/shop' exact>{Shop}</Route>
                <Route path='/shop/cart'>{Cart}</Route>
                <Route path='/about'>{About}</Route>
            </Switch>
        </Router>
    )
}

export default Routes