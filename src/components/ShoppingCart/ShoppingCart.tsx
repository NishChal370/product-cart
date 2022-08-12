import { IoClose } from 'react-icons/io5';
import { useShoppingCart } from '../../context/ShoppingCartContext';
import storeItems from '../../data/items.json';
import { formatCurrency } from '../../utils/formatCurrency';

interface ShoppingCartProps{
      id: number
      quantity: number
}

function ShoppingCart({id, quantity}: ShoppingCartProps) {
      const { removeFromCart } = useShoppingCart();
      
      const items = storeItems.find( item => item.id === id);

      if (items == null  ) return null

      return (
            <div className='cart__container flex justify-between'>
                  <div className='cart__img flex flex-col gap-1'>
                        <div className='w-[11rem] h-[6rem]'>
                              <img className='w-[100%] h-[100%] object-cover' src={items?.imageUrl} alt=" cart-img" />   
                        </div>

                        <article>
                              <h1 className='text-lg'>
                                    {items?.name}
                                    <span className='text-slate-600 text-sm'> x{quantity}</span>
                              </h1>
                              <h6 className='text-slate-600 text-base'>{formatCurrency(items?.price)}</h6>
                        </article>
                  </div>

                  <aside className='flex flex-col'>
                        <h3 className='text-slate-600 text-base'>{formatCurrency(items?.price * quantity)}</h3>

                        <div className='group border border-red-400 w-fit self-end hover:bg-red-500'
                              onClick={()=>removeFromCart(id)}
                        >
                              <IoClose className='text-xl text-red-500 group-hover:text-white'/>
                        </div>
                  </aside>
            </div>
      )
}

export default ShoppingCart