import React from 'react'
import image1 from "../assets/image1.avif"
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { DecrementQyt, IncrementQyt, RemoveItem } from '../redux/cartSlice';
function card2({name,id,price,image,qyt}) {
    let dispatch=useDispatch()
  return (
    <div className='w-full h-[120px] p-2 shadow-lg flex justify-between bg-blue-200 rounded-lg '>
        <div className='w-[60%] h-full flex gap-5'>
            <div className='w-[60%] h-full overflow-hidden rounded-lg'>
                <img src={image} alt=""className='object-cover' />               
            </div>
            <div className='w-[40%] h-full flex flex-col gap-5'>
                <div className='text-lg text-gray-700 font-bold'>
                    {name}
                </div>
                <div className='w-[100px] h-[50px] bg-slate-500 flex rounded-lg overflow-hidden shadow-lg border-blue-400 font-semibold text-xl'>
                    <button className='w-[30%] h-full bg-amber-50 flex justify-center items-center text-blue-500 hover:bg-cyan-100'onClick={()=>{qyt>1?dispatch(DecrementQyt(id)):1}}>-</button>
                    <span className='w-[40%] h-full bg-slate-500 flex justify-center items-center'>{qyt}</span>
                    <button className='w-[30%] h-full bg-amber-50 flex justify-center items-center text-blue-500 hover:bg-cyan-100'onClick={()=>dispatch(IncrementQyt(id))}>+</button>
                </div>
            </div >
        </div>
        <div className='flex flex-col justify-start items-end gap-7'> 
            <span className='text-xl text-blue-400 font-semibold'>Rs{price}</span>
            <MdDelete className='w-[30px] h-[30px] text-red-600 cursor-pointer'onClick={()=>dispatch(RemoveItem(id))} />
        </div>
    </div>
  )
}

export default card2
