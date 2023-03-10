import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify"
const initialState = {
    cart: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0
}
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        AddToCart: (state, action) => {
            const item = state.cart.findIndex(items => items.id === action.payload.id)
            if (item >= 0) {
                state.cart[item].quantity += 1
                toast.info(`incresed ${state.cart[item].name} cart quantity`, {
                    position: 'bottom-left'
                })
            } else {
                const tempProudct = { ...action.payload, quantity: 1 }
                state.cart.push(tempProudct)
                toast.success(`${action.payload.name} added to cart`, {
                    position: 'bottom-left'
                })
            }
            localStorage.setItem('cart', JSON.stringify(state.cart))
        },
        remove(state, action) {
            const nextItems = state.cart.filter(cart => cart.id !== action.payload.id)
            state.cart = nextItems
            localStorage.setItem('cart', JSON.stringify(state.cart))
            toast.error(`${action.payload.name} remove from to cart`, {
                position: 'bottom-left'
            })
        },
        decrement(state, action) {
            const itemIndex = state.cart.findIndex((cart) => cart.id === action.payload.id)
            if (state.cart[itemIndex].quantity > 1) {
                state.cart[itemIndex].quantity -= 1
                toast.info(`${action.payload.name} decrement from to cart`, {
                    position: 'bottom-left'
                })
            }
        },
        clear(state) {
            state.cart = []
        },
        getTotals(state, action) {
            state.cartTotalQuantity = state.cart.reduce((accumulator, currentValue) =>
                accumulator + currentValue.price * currentValue.quantity, 0)
            state.cartTotalAmount = state.cart.reduce((accumulator, currentValue) =>
                accumulator + currentValue.price * currentValue.quantity, 0)
        },
    }
})
export default cartSlice.reducer
export const { AddToCart, remove, clear, decrement, getTotals } = cartSlice.actions