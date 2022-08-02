import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { productsApi } from 'api';
import { FilterProduct, Pagination, Product } from 'models';
import { RootState } from 'redux/store';

export interface ProductState {
  products: Product[];
  pagination: Pagination;
  filter: FilterProduct | null;
}
export interface PaginationPayload {
  page: number | null;
  limit: number | null;
}
const initialState: ProductState = {
  products: [],
  pagination: {
    total: 1,
    page: 1,
    limit: 1,
  },
  filter: null,
};

export const getAllProducts = createAsyncThunk('/product', async (payload: PaginationPayload) => {
  const { results } = await productsApi.getAll(payload);
  return results;
});
export const findProduct = createAsyncThunk('/findProduct', async (payload: FilterProduct) => {
  const { results } = await productsApi.findProduct(payload);
  return results;
});
const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    removeFilterProduct(state) {
      state.filter = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.products = action.payload.products;
        state.pagination = action.payload.pagination;
      })
      .addCase(findProduct.fulfilled, (state, action) => {
        state.pagination = action.payload.pagination;
        state.products = action.payload.products;
        state.filter = action.payload.filter;
      });
  },
});

export const productActions = productSlice.actions;

export const selectProducts = (state: RootState) => state.products;
export const selectPagination = (state: RootState) => state.products.pagination;
export const selectFilter = (state: RootState) => state.products.filter;

// Reducer
const productReducer = productSlice.reducer;
export default productReducer;
