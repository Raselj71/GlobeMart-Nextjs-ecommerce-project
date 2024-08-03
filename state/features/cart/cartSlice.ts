import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { act } from 'react-dom/test-utils';

export interface propstype {
  id: Number;
  title: String;
  price: String;
  image: String;
  quantity:number;
}
export interface CartState {
  items: propstype[];
  total:number
}

const initialState: CartState = {
  items: [],
  total:0
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<propstype>) => {
        const itemExits=state.items.find((item)=>item.id===action.payload.id)

        if(itemExits){
            itemExits.quantity++;
            state.total=state.total+Number(itemExits.price);
        }else{
          state.items.push(action.payload);
          state.total=state.total+Number(action.payload.price)
        }
      
    
    },
    incrementQuantity: (state, action:PayloadAction<propstype>)=>{
        const item=state.items.find((item)=>item.id===action.payload.id);
        if(item){
            item.quantity++;
            state.total=state.total+Number(action.payload.price);
            
        }

      
    },
      decrementQuantity: (state, action:PayloadAction<propstype>)=>{
        const item=state.items.find((item)=>item.id===action.payload.id);
        if(item){
            if(item.quantity>1){
                item.quantity--

                 state.total=state.total-Number(action.payload.price);
                
            }
          
        }

      
    },
    remove: (state, action: PayloadAction<propstype>) => {
      const itemExits=state.items.find((item)=>item.id===action.payload.id)
      if(itemExits){
         state.total=state.total-itemExits.quantity*Number(itemExits.price)
      }
      state.items = state.items.filter(item => item.id !== action.payload.id);
     
      
    },
    loadCart: (state) => {
      state.items =  [];
    },
  },
});

export const { add, remove,incrementQuantity,decrementQuantity, loadCart } = cartSlice.actions;

export default cartSlice.reducer;
