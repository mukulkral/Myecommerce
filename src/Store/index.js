import { configureStore } from '@reduxjs/toolkit'
import productReducer from '../Store/ProductSlice'
import cartReducer from '../Components/Cart/CartSlice'
const store = configureStore({
  reducer: {

    products: productReducer,
    Allcart:cartReducer
    
  }
})

export default store;