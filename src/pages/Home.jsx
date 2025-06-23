import React, { useContext } from 'react';
import Nav from '../components/Nav';
import Card from '../components/Card';
import { categories } from '../category';
import { food_items } from '../food';
import { dataContext } from '../context/UserContext';
import { RxCrossCircled } from "react-icons/rx";
import Card2 from '../components/card2';
import { useSelector, useDispatch } from 'react-redux'; 
import { toast } from 'react-toastify';
import { ClearCart } from '../redux/cartSlice';
import Heading from '../components/Heading';

function Home() {
  const { cate, setCate, input, showCart, setShowCart } = useContext(dataContext);
  const dispatch = useDispatch();

  function filter(category) {
    const sanitized = category.toLowerCase().trim();
    if (sanitized === 'all') {
      setCate(food_items);
    } else {
      const newList = food_items.filter(
        (item) =>
          item.food_category &&
          item.food_category.toLowerCase().trim() === sanitized
      );
      setCate(newList);
    }
  }

  let items = useSelector((state) => state.cart);
  let subtotal = items.reduce((total, item) => total + item.qyt * item.price, 0);
  let deliveryFee = 20;
  let taxes = subtotal * 0.5 / 100;
  let total = Math.floor(subtotal + deliveryFee + taxes);

  return (
    <div className='bg-slate-300 w-full min-h-screen'>
      <Heading/>
      <Nav />

      {!input && (
        <div className='flex flex-wrap justify-center items-center gap-5 w-full mt-4'>
          {categories.map((item, index) => (
            <div
              key={index}
              className='w-[140px] h-[150px] bg-amber-50 flex flex-col items-start gap-5 p-5 text-[20px] text-gray-800 rounded-b-lg shadow-xl hover:bg-blue-200 cursor-pointer transition-all duration-200'
              onClick={() => filter(item.name)}
            >
              {item.icon}
              {item.name}
            </div>
          ))}
        </div>
      )}

      <div className='w-full flex flex-wrap gap-5 px-5 justify-center items-center pt-8'>
        {cate.length > 1 ? cate.map((item) => (
          <Card
            key={item.id}
            name={item.food_name}
            image={item.food_image}
            price={item.price}
            id={item.id}
            type={item.food_type}
          />
        )) : <div className='text-2xl text-blue-500 font-bold'>No Dish Found</div>}
      </div>

      <div className={`w-full md:w-[40vw] h-[100%] fixed top-0 right-0 bg-white shadow-2xl p-5 overflow-auto transition-all duration-500 ${showCart ? "translate-x-0" : "translate-x-full"}`}>
        <header className='w-[100%] flex justify-between items-center'>
          <span className='text-blue-500 text-[18px] font-semibold'>Order Items</span>
          <RxCrossCircled className='w-[30px] text-blue-500 text-[18px] font-semibold cursor-pointer hover:text-blue-700' onClick={() => setShowCart(false)} />
        </header>

        {items.length > 0 ? (
          <>
            <div className='w-full mt-9 flex flex-col gap-8'>
              {items.map((item) => (
                <Card2
                  key={item.id}
                  name={item.name}
                  price={item.price}
                  image={item.image}
                  id={item.id}
                  qyt={item.qyt}
                />
              ))}
            </div>

            <div className='flex flex-col w-full border-t-2 border-gray-800 gap-2 m-7 p-8 border-b-2'>
              <div className='flex justify-between items-center'>
                <span className='text-gray-800 font-semibold text-lg'>Subtotal</span>
                <span className='text-gray-800 font-semibold text-lg'>Rs {subtotal}/-</span>
              </div>
              <div className='flex justify-between items-center'>
                <span className='text-gray-800 font-semibold text-lg'>Delivery Charges</span>
                <span className='text-gray-800 font-semibold text-lg'>Rs {deliveryFee}/-</span>
              </div>
              <div className='flex justify-between items-center'>
                <span className='text-gray-800 font-semibold text-lg'>Tax Charges</span>
                <span className='text-gray-800 font-semibold text-lg'>Rs {taxes}/-</span>
              </div>
            </div>

            <div className='w-full flex justify-between p-6'>
              <span className='text-gray-800 font-semibold text-2xl'>Total</span>
              <span className='text-gray-800 font-semibold text-2xl'>Rs {total}/-</span>
            </div>

            <button
              className='w-[80%] bg-blue-300 p-3 rounded-lg text-gray-800 hover:bg-blue-500 transition-all duration-100'
              onClick={() => {
                dispatch(ClearCart()); // ✅ This now works
                toast.success("Order Placed");
              }}
            >
              Place Order
            </button>
          </>
        ) : (
          <div className='text-center text-2xl text-blue-500 font-bold pt-5'>Empty Cart</div>
        )}
      </div>
    </div>
  );
}

export default Home;
