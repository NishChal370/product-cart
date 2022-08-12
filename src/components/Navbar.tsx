import { Link } from 'react-router-dom';
import  { AiOutlineShoppingCart } from 'react-icons/ai';
import { useShoppingCart } from '../context/ShoppingCartContext';

function Navbar() {
      const { cartQuantity, openSideBar }  = useShoppingCart();

      return (
            <div className='nav__container mb-3 bg-white shadow-sm'>
                  <nav className='nav-wrapper p-2 flex justify-between item-center'>
                        
                        <div className='flex gap-3 items-center '>
                              <Link to='/'><h2>Home</h2></Link>
                              <Link to='/store'><h2>Store</h2></Link>
                              <Link to='/about'><h2>About</h2></Link>
                        </div>

                        <aside onClick={openSideBar} className='group w-13 border border-blue-800 p-2 rounded-[50%] item-center flex justify-center relative hover:bg-blue-800'>
                              <h3><AiOutlineShoppingCart className='text-3xl text-blue-800 group-hover:text-white'/></h3>

                              <div className='cart__count  absolute bg-red-700 text-white px-2 rounded-[50%] left-7 top-7 text-[0.8rem]'>{cartQuantity}</div>
                        </aside>
                  </nav>
            </div>
      )
}

export default Navbar