import { useState } from 'react';
import { GrAdd, GrSubtract } from 'react-icons/gr';
import { useShoppingCart } from '../../context/ShoppingCartContext';
import { formatCurrency } from '../../utils/formatCurrency';

interface ItemProps {
      id: number
      name: string
      price: number
      imageUrl: string
}

function StoreItem({id, name, price, imageUrl}: ItemProps) {
      const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart } = useShoppingCart();

      const quantity = getItemQuantity(id);
      
      return (
            <div className='item'>
                  <div className='w-[100%] h-[10rem]'>
                        <img className='w-[100%] h-[100%] object-cover'
                              src={imageUrl} alt="item-img" 
                        />
                  </div>

                  <article className='flex flex-col gap-2'>
                        <div className='flex justify-between'>
                              <h1 className='text-xl'>{name}</h1>
                              <aside className='text-base text-slate-600'>{formatCurrency(price)}</aside>
                        </div>
                        
                        {quantity === 0 
                              ?     <button className='bg-blue-800 text-white rounded text-base'
                                          onClick={()=> increaseCartQuantity(id)}
                                    >+ Add To Cart</button>

                              :     <div className='flex flex-col justify-center items-center gap-1'>
                                          <div className='flex flex-row gap-1 items-center'>
                                                <h3 className='bg-blue-800 p-1 rounded'
                                                      onClick={()=> increaseCartQuantity(id)}
                                                >
                                                      <GrAdd className='text-white text-sm'/>
                                                </h3>
            
                                                <h3><span>{quantity}</span> in cart</h3>
            
                                                <h3 className='bg-blue-800 p-1 rounded' 
                                                      onClick={()=> decreaseCartQuantity(id)}
                                                >
                                                      <GrSubtract className='text-white text-sm'/>
                                                </h3>
                                          </div>
            
                                          <button className='px-2 py-1 rounded bg-red-600 text-white text-sm'
                                                onClick={()=> removeFromCart(id)}
                                          >Remove</button>
                                    </div>  
                        }
                              
                        
                  </article>
            </div>
      )
}

export default StoreItem