import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import App from './App'
import Shop from './Shop'
import About from './About'
import Cart from './Cart'
import Navbar from './Navbar'

const Routes = () => {
    
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path='/' exact>
                    <App />
                </Route>
                <Route path='/shop' exact>
                    <Shop />
                </Route>
                <Route path='/shop/cart'>
                    <Cart />
                </Route>
                <Route path='/about'>
                    <About />
                </Route>
            </Switch>
        </Router>
    )
}

export default Routes