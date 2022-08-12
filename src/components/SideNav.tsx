import { GrClose } from 'react-icons/gr';
import storeItems from '../data/items.json';
import { nanoid } from 'nanoid';
import { useShoppingCart } from '../context/ShoppingCartContext'
import { ShoppingCart } from './index';
import { formatCurrency } from '../utils/formatCurrency';


function SideNav() {
      const { closeSideBar, isSideBarOpen, cartItems } = useShoppingCart();

      return (
            <div className={`side-nav__container absolute  top-0 left-[0%] h-[100%] px-3 py-6 w-[100%] flex flex-col gap-2 bg-white ${!isSideBarOpen &&'hidden'} `}>
                  <header className='flex items-center justify-between'>
                        <h1 className='text-xl font-semibold'>Cart</h1>
                        <h3 onClick={closeSideBar}><GrClose  className=' text-2xl'/></h3>
                  </header>

                  <main className=' flex flex-col gap-6 mt-6'>
                        {cartItems.map(item => <ShoppingCart key={nanoid()} {...item}/>) }
                  </main>

                                    
                  <footer className='flex justify-end'>
                        <h2 className='font-bold'>Total: &nbsp;
                              {formatCurrency(
                                    cartItems.reduce((grandTotalPrice, cartItem)=>{
                                          const itemTotalPrice = ( storeItems.find(storeItem=> storeItem.id === cartItem.id)?.price || 0 ) * cartItem.quantity;
                                          
                                          return grandTotalPrice + itemTotalPrice;
                                    },0)
                              )}
                        </h2>
                  </footer>
            </div>
      )
}

export default SideNav