import { createSlice } from "@reduxjs/toolkit";
import productDataOne from "./productDataOne";
const initialState = {
    productsOne: localStorage.getItem('productsOne') ? JSON.parse(localStorage.getItem('productsOne')) : [],
    items: productDataOne
}
const ProductSliceOne = createSlice({
    name: "productsOne",
    initialState,
    reducers: {

    }
})
export default ProductSliceOne.reducer