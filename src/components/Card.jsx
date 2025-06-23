import React from 'react';
import { useDispatch } from 'react-redux';
import { LuLeafyGreen } from 'react-icons/lu';
import { GiChickenOven } from 'react-icons/gi';
import { AddItem } from '../redux/cartSlice';
import { toast } from 'react-toastify';

function Card({ name, image, id, price, type }) {
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(AddItem({ id, name, image, price, type }));
  };

  return (
    <div className='w-[300px] h-[400px] bg-white p-3 rounded-lg flex flex-col gap-3 shadow-lg hover:border-2 border-blue-600'>
      <div className='w-full h-[60%] overflow-hidden rounded-lg'>
        <img src={image} alt='' className='object-cover w-full h-full' />
      </div>
      <div className='text-2xl font-semibold mt-2'>
        {name}
      </div>
      <div className='w-full flex justify-between items-center my-2'>
        <div className='text-xl font-bold text-blue-500'>Rs {price}</div>
        <div className='flex items-center gap-2 text-blue-500'>
          {type === "veg" ? <LuLeafyGreen /> : <GiChickenOven />}
          <span>{type}</span>
        </div>
      </div>
      <button
        className='w-full bg-blue-300 p-3 rounded-lg text-gray-800 hover:bg-blue-500 transition-all duration-100'
        onClick={()=>{dispatch(AddItem({id:id,name:name,price:price,image:image,qyt:1}));
     toast.success("Items Added")}}>
        Add to Dish
      </button>
    </div>
  );
}

export default Card;
