import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { productsApi } from 'api';
import { Product } from 'models';
import { RootState } from 'redux/store';
export interface productState {
    products: Product[];
}
const initialState: productState = {
    products: [],
};
export const getAllProducts = createAsyncThunk('/product', async () => {
    const data = await productsApi.getAll();    
    return data.results;
  });
const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.products = action.payload;
      })
  },
});

// Actions
export const productActions = productSlice.actions;

export const selectProducts = (state: RootState) => state.products;

// Reducer
const productReducer = productSlice.reducer;
export default productReducer;
