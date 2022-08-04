import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { cartUserApi } from 'api';
import { Product } from 'models';
import { Cart } from 'models/Cart';
import { RootState } from 'redux/store';
export interface CartState {
  cartProducts: Cart[];
}
export interface CartUser {
  quantity: number;
  product: Product;
}
const initialState: CartState = {
  cartProducts: [],
};
export const updateCartUser = createAsyncThunk('user/updateCartUser', async (payload: CartUser) => {
  const  results  = await cartUserApi.updateCartUser(payload);
  return results;
});
export const addCartUser = createAsyncThunk('user/addCartUser', async (payload: CartUser) => {
  const results = await cartUserApi.addCartUser(payload);
  return results;
});
export const removeProductInCart = createAsyncThunk('user/deleteCartToUser', async (payload: string) => {
  const  results  = await cartUserApi.removeProductInCart(payload);
  return results;
});
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    removeAllCart(state) {
      state.cartProducts = [];
    },
    removeToCart(state, action) {
      const productIndex = state.cartProducts.findIndex(
        (item) => item.product._id === action.payload
      );
      state.cartProducts.splice(productIndex,1);
    },
    addToCart(state, action) {
      const productIndex = state.cartProducts.findIndex(
        (item) => item.product._id === action.payload.product._id
      );
      if (productIndex >= 0) {
        state.cartProducts[productIndex].quantity += action.payload.quantity;
      } else {
        state.cartProducts.push(action.payload);
      }
    },
    updateToCart(state, action) {
      const productIndex = state.cartProducts.findIndex(
        (item) => item.product._id === action.payload.product._id
      );
      state.cartProducts[productIndex].quantity = action.payload.quantity;
    },
    setCartUser(state, action) {
      state.cartProducts = action.payload.cart;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(updateCartUser.fulfilled, (state, action) => {
        if (action.payload.message === 'ok') {
          state.cartProducts = action.payload.results;
        }
      })
      .addCase(addCartUser.fulfilled, (state, action) => {
        if (action.payload.message === 'ok') {
          state.cartProducts = action.payload.results;
        }
      })
      .addCase(removeProductInCart.fulfilled, (state, action) => {
        if (action.payload.message === 'ok') {
          state.cartProducts = action.payload.results;
        }
      });
  },
});

// Actions
export const cartActions = cartSlice.actions;
export const selectQuantityCart = (state: RootState) =>
  state.cart.cartProducts.reduce((count, item) => count + item.quantity, 0);
export const selectTotalPrice = (state: RootState) =>
  state.cart.cartProducts.reduce((count, item) => count + Math.floor(item.quantity * item.product.price), 0);
export const selectProductCart = (state: RootState) => state.cart.cartProducts;

// Reducer
const cartReducer = cartSlice.reducer;
export default cartReducer;
