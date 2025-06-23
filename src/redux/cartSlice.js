import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    AddItem: (state, action) => {
      let existItem=  state.find((item)=>item.id===action.payload.id)
      if(existItem){
        return state.map((item)=>(item.id===action.payload.id?{...item,qyt:item.qyt+1}:item))
      }else{
            state.push(action.payload);
      }
      
    },
    RemoveItem:(state,action)=>{
        return state.filter((item)=>item.id!==action.payload)
    },
    IncrementQyt:(state,action)=>{
          return state.map((item)=>(item.id===action.payload?{...item,qyt:item.qyt+1}:item))
          
    },
    DecrementQyt:(state,action)=>{
          return state.map((item)=>(item.id===action.payload?{...item,qyt:item.qyt-1}:item))
          
    },
    ClearCart: () => {
  return [];
}

  }
});

export const { AddItem,RemoveItem,IncrementQyt,DecrementQyt,ClearCart } = cartSlice.actions;
export default cartSlice.reducer;
