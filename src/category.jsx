import { TiThSmall } from "react-icons/ti";
import { MdFreeBreakfast } from "react-icons/md";
import { TbSoupFilled } from "react-icons/tb";
import { GiNoodles } from "react-icons/gi";
import { MdFoodBank } from "react-icons/md";
import { FaPizzaSlice } from "react-icons/fa";
import { FaHamburger } from "react-icons/fa";
export const categories=[
    {
        id:1,
         name:"All",
         icon:<TiThSmall  className="w-[60px] h-[60px] text-blue-500"/>

    },
     {
        id:2,
         name:"Breakfast",
         icon:<MdFreeBreakfast className="w-[60px] h-[60px] text-blue-500" />


    },
     {
        id:3,
         name:"Soups",
         icon:<TbSoupFilled className="w-[60px] h-[60px] text-blue-500" />

    }, {
        id:4,
         name:"Pasta",
         icon:<GiNoodles className="w-[60px] h-[60px] text-blue-500" />

    },
     {
        id:5,
         name:"Main Course",
         icon:<MdFoodBank className="w-[60px] h-[60px] text-blue-500"/>

    },
     {
        id:6,
         name:"Pizza",
         icon:<FaPizzaSlice className="w-[60px] h-[60px] text-blue-500" />

    },
     {
        id:7,
         name:"Burger",
         icon:<FaHamburger className="w-[60px] h-[60px] text-blue-500" />

    }
]
export default categories