import { createSlice } from '@reduxjs/toolkit';
import { Cart } from 'models/Cart';
import { RootState } from 'redux/store';
export interface CartState {

    cartProducts: Cart[]
  }
  const initialState: CartState = {

    cartProducts: [],
  };
  
  const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProductToCart(state,action){
          const quantity = 1
          const indexProduct = state.cartProducts.findIndex(item => item.product._id === action.payload._id);
          if(indexProduct>=0){
            state.cartProducts[indexProduct].quantity ++;
          }else{
            state.cartProducts.push(
              {quantity: quantity,
              product: action.payload});
          }
        },
        buyProduct(state){
            state.cartProducts = []
        },
        removeProductInCart(state,action){
          const productRemove = state.cartProducts.findIndex(item => item.product._id === action.payload);
          state.cartProducts.splice(productRemove, 1); 
        },
        changeQuantityProduct(state, action){
          const indexProduct = state.cartProducts.findIndex(item => item.product._id === action.payload._id);
          if(action.payload.typeQuantity === "minus"){
            state.cartProducts[indexProduct].quantity -= 1;
            if(state.cartProducts[indexProduct].quantity<=0){
              state.cartProducts.splice(indexProduct, 1);
            }
          }else if(action.payload.typeQuantity === "plus"){
            state.cartProducts[indexProduct].quantity += 1;
          }else {
            state.cartProducts[indexProduct].quantity=Number(action.payload.typeQuantity)
          }
        },
        removeAllCart(state){
          state.cartProducts=[]
        }
    },
  });

  // Actions
export const cartActions = cartSlice.actions;

export const selectQuantityCart = (state: RootState) => state.cart.cartProducts.reduce((count,item)=>
count+item.quantity,0);
export const selectTotalPrice = (state: RootState) => state.cart.cartProducts.reduce((count,item)=>
count+Math.floor(item.quantity*item.product.price),0);
export const selectProductCart = (state: RootState) => state.cart.cartProducts;

// Reducer
const cartReducer = cartSlice.reducer;
export default cartReducer;

