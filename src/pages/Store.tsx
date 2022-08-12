import { nanoid } from 'nanoid';

import { StoreItem } from '../components';
import storeItems from '../data/items.json';

function Store() {
      return (
            <div className='store__container'>
                  <h1 className='text-2xl'>Store</h1>

                  <div className='item__container grid grid-cols-1 gap-10 mt-4
                                    sm:grid-cols-2
                                    md:grid-cols-3
                                    xl:grid-cols-4'
                  >
                        {storeItems.map((item)=>{
                              return <StoreItem key={nanoid()}  {...item}/>
                        })}
                  </div>
                  
            </div>
      )
}

export default Store