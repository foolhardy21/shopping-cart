import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './Pages/Home'
import Shop from './Pages/Shop'
import About from './Pages/About'
import Cart from './Pages/Cart'
import Navbar from './Components/Navbar'

const Routes = () => {
    
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path='/' exact>
                    <Home />
                </Route>
                <Route path='/shop' exact>
                    <Shop />
                </Route>
                <Route path='/cart'>
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