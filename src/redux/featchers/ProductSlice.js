import { createSlice } from "@reduxjs/toolkit";
import productData from "./productData";
const initialState = {
    products: localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')) : [],
    items: productData,
    quantity: 0
}
const ProductSlice = createSlice({
    name: "products",
    initialState,
    reducer: {

    }
})
export default ProductSlice.reducer