import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "./featchers/ProductSlice"
import CartReducer from "./featchers/CartSlice"
import ProductReducerOne from "./featchers/ProductSliceOne"
const store = configureStore({
    reducer: {
        products: ProductReducer,
        cart: CartReducer,
        productsOne: ProductReducerOne
    }
})
export default store