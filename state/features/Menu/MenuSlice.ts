import { createSlice } from '@reduxjs/toolkit';



export interface menuState {
  isOpen: boolean;
}

const initialState: menuState = {
  isOpen: false,
};

export const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    ChangeMenu: (state) => {
        state.isOpen=!state.isOpen
      
    
    },
  
  },
});

export const { ChangeMenu } = menuSlice.actions;

export default menuSlice.reducer;
