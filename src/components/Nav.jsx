import React, { useContext, useEffect } from 'react';
import { IoFastFoodSharp } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { food_items } from '../food';
import { dataContext } from '../context/UserContext';
import { useSelector } from 'react-redux';

function Nav() {
  const { input, setInput, setCate, showCart, setShowCart } = useContext(dataContext);

  useEffect(() => {
    const search = input.toLowerCase();
    const filtered = food_items.filter(item =>
      item.food_name.toLowerCase().includes(search)
    );
    setCate(filtered);
  }, [input]);
  let items=useSelector(state=>state.cart)

  return (
    <div className='w-full h-[100px] flex justify-between items-center px-5 md:px-8'>
      <div className='w-[60px] h-[60px] bg-amber-50 flex justify-center items-center rounded-b-md shadow-xl'>
        <IoFastFoodSharp className='w-[30px] h-[30px] text-blue-500' />
      </div>

      <form
        className='w-[45%] h-[60%] bg-white flex items-center px-5 gap-5 rounded-b-md shadow-md md:w-[70%]'
        onSubmit={(e) => e.preventDefault()}
      >
        <FaSearch className='text-blue-500' />
        <input
          type="text"
          placeholder='Search here...'
          className='w-full outline-none text-[16px] md:text-[20px]'
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </form>

      <div className='w-[60px] h-[60px] bg-amber-50 flex justify-center items-center rounded-b-md shadow-xl relative' onClick={()=>setShowCart(true)}>
        <span className='absolute top-0 right-2 text-blue-500 font-semibold text-[16px]'>{items.length}</span>
        <FaCartShopping className='w-[30px] h-[30px] text-blue-500 cursor-pointer' />
      </div>
    </div>
  );
}

export default Nav;
