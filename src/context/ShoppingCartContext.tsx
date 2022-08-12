import { createContext, ReactNode, useContext, useState } from "react";
import useLocalStore from "../hooks/useLocalStore";

interface  ShoppingCartContext {
      cartItems: CartItems[]
      cartQuantity: number
      getItemQuantity: (id: number) => number
      increaseCartQuantity: (id: number) => void
      decreaseCartQuantity: (id: number) => void
      removeFromCart: (id: number) => void

      isSideBarOpen: boolean
      openSideBar:() => void
      closeSideBar:() => void
}

interface ShoppingCartProviderProps{
      children: ReactNode
}

type CartItems = {
      id: number
      quantity: number
}


const ShoppingCartContext = createContext({} as ShoppingCartContext);


export function useShoppingCart(): ShoppingCartContext{
      return useContext(ShoppingCartContext)
}


export function ShoppingCartProvider({children}: ShoppingCartProviderProps){
      const [isSideBarOpen, setIsSideBarOpen] = useState<boolean>(false);
      const [cartItems, setCartItems] = useLocalStore<CartItems[]>("shopping-cart", []);

      const getItemQuantity = (id: number) => {
            return cartItems.find(item => item.id === id)?.quantity || 0
      }

      const increaseCartQuantity = (id: number): void => {
            setCartItems(currItems => {
                  if(currItems.find(item=> item.id === id) == null){
                        return [...currItems, {id, quantity: 1}]
                  }

                  return currItems.map(item=>{

                        if(item.id === id){
                              return { ...item, quantity: item.quantity+1}
                        }

                        return item      
                  })
                  
            })
      }

      const decreaseCartQuantity = (id: number): void => {
            setCartItems(currItems => {
                  if(currItems.find(item => item.id === id)?.quantity=== 1){
                        return currItems.filter(item => item.id !== id )
                  }

                  return currItems.map(item=>{
                        if(item.id === id){
                              return { ...item, quantity: item.quantity-1}
                        }

                        return item
                  })
            })
      }

      const removeFromCart = (id: number) => {
            setCartItems(currItems => {
                  return currItems.filter(item => item.id !== id)
            })
      }

      const cartQuantity: number = cartItems.reduce(
            (quantity: number, item: CartItems): number => item.quantity + quantity,
            0
      )

      const openSideBar = (): void => setIsSideBarOpen(cartQuantity > 0);
      
      const closeSideBar = (): void => setIsSideBarOpen(false);
      

      return (
            <ShoppingCartContext.Provider value={{getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart, cartQuantity, cartItems, 
                                                openSideBar, closeSideBar, isSideBarOpen }}
            >
                  {children}
            </ShoppingCartContext.Provider>
      )
}