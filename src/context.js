import React, { useEffect, useState } from 'react'
import data from './data'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
    const [shopItems, setShopItems] = useState([])
    const [cartItems, setCartItems] = useState([])
    const [checkout, setCheckout] = useState(false)
    const [isItemAdded, setIsItemAdded] = useState(false)

    useEffect(() => {
        setShopItems(data)
    },[])

    const addItemToCart = (itemName, itemId) => {
        if (!cartItems.find(item => item.id === itemId)) {
            setIsItemAdded(true)
            const newcart = [...cartItems]
            newcart.push({
                id: itemId,
                name: itemName,
                quantity: 1,
            })
            setCartItems(newcart)
        }
    }
    const increaseQty = (itemid) => {
        let newcart = [...cartItems]
        newcart = newcart.map(item => {
            if (item.id === itemid) {
                return {...item, quantity: item.quantity + 1}
            } else 
            return item
        })
        setCartItems(newcart)
    }
    const decreaseQty = (itemid) => {
        let newcart = [...cartItems]
        const selectedItem = newcart.find(item => item.id === itemid)
        
        if ( selectedItem.quantity === 1 ) {
             newcart = newcart.filter(item => item.id !== itemid)
        } else {
            newcart = newcart.map(item => {
                if (item.id === itemid) {
                    return {...item, quantity: item.quantity - 1}
                } else 
                return item
            })
        }  
        setCartItems(newcart)
    }
    const getCartQuantity = () => {
        
        return cartItems.reduce((total, current) => total + current.quantity
        ,0)
    }
    const getNewSession = () => {
        setCheckout(false)
        setCartItems([])
    }

    return (
        <AppContext.Provider
        value = {{
            shopItems, 
            cartItems,
            checkout,
            isItemAdded, 
            setIsItemAdded,
            setCheckout,
            addItemToCart,
            increaseQty,
            decreaseQty,
            getCartQuantity,
            getNewSession,
        }}
        >
            {children}
        </AppContext.Provider>
    )
}

export { AppContext, AppProvider }