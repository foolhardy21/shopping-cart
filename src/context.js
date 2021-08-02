import React, { useState } from 'react'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
    const [shopItems, setShopItems] = useState([1,2,3,4,5])
    const [cartItems, setCartItems] = useState([])
    
    const addItemToCart = (item) => {
        console.log('item added')
        const newcart = [...cartItems]
        newcart.push(item)
        setCartItems(newcart)
    }
    return (
        <AppContext.Provider
        value = {{
            shopItems, 
            cartItems,
            addItemToCart
        }}
        >
            {children}
        </AppContext.Provider>
    )
}

export { AppContext, AppProvider }