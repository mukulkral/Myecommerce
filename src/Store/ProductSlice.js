import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { fetchProducts } from './productsApi'

export const  fetchAsync = createAsyncThunk('products/fetchProduct', async () => {
  const response = await fetchProducts()
  return response.data
})



 

const initialState = {
  products: [],
  status: 'idle',
  error: null,
  cartItems:0
} 
const ProductSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {

    
  },
  extraReducers: (builder) => {
    builder
    .addCase(fetchAsync.pending, (state) => {
      state.status = 'loading'
    })
      .addCase(fetchAsync.fulfilled, (state, action) => {
        state.status = 'succeeded' 
        state.products = action.payload

      })
      .addCase(fetchAsync.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message;
      })
  },
})

// export const { filterProducts } = ProductSlice.actions;


export default ProductSlice.reducer;