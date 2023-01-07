import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "./Navbar";
import { remove, clear, decrement, AddToCart, getTotals } from "../redux/featchers/CartSlice"

const Cart = () => {
    const { cart, cartTotalAmount } = useSelector((state) => state.cart)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getTotals())
    }, [cart, dispatch])
    return (
        <div>
            <Navbar />

            {
                cart.length === 0 ? (
                    <div className="flex flex-col  items-center justify-center w-full h-screen">
                        <div className="text-white">cart is empty</div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                        </svg>

                        <Link className="btn bg-black text-white" to="/">Home</Link>
                    </div>
                ) :
                    (
                        <div className="grid 2xl:grid-cols-3 xl:grid-cols-2 grid-cols-1 gap-6">
                            {
                                cart.map((product) => (
                                    <div className="flex justify-center">
                                        <div className="rounded-lg shadow-lg bg-white max-w-sm">
                                            <a href="#!">
                                                <img className="rounded-t-lg w-full" src={product.img} alt="" />
                                            </a>
                                            <div class="p-6">
                                                <div className="flex justify-between">
                                                    <h5 className="text-gray-900 text-xl font-medium mb-2">{product.name}</h5>
                                                    <h5 className="text-gray-900 text-xl font-medium mb-2">{product.price}</h5>

                                                </div>
                                                <p className="text-gray-700 text-base mb-4">
                                                    {product.desc}
                                                </p>
                                                <p className="text-gray-700 text-base mb-4">
                                                    {product.price * product.quantity}
                                                </p>
                                                <div className="flex justify-between">
                                                    <button onClick={() => dispatch(remove(product))} type="button" className=" inline-block  rounded-lg w-32 py-2.5 bg-orange-400 text-black font-medium text-xs leading-tight uppercase  shadow-md hover:bg-yellow-900 hover:shadow-lg focus:bg-orange-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-900 active:shadow-lg transition duration-150 ease-in-out">remove</button>

                                                    <button onClick={() => dispatch(clear(product))} type="button" className=" inline-block  rounded-lg w-32 py-2.5 bg-orange-400 text-black font-medium text-xs leading-tight uppercase  shadow-md hover:bg-yellow-900 hover:shadow-lg focus:bg-orange-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-900 active:shadow-lg transition duration-150 ease-in-out" >clear</button>

                                                </div>
                                                <div className="flex justify-between mt-2">
                                                    <div className="flex space-x-2">
                                                        <button className="btn   w-6 h-6 rounded-md btn-sm  text-black bg-orange-400" onClick={() => dispatch(decrement(product))}>-</button>
                                                        <span>{product.quantity}</span>
                                                        <button className="btn  w-6 h-6 rounded-md btn-sm  text-black bg-orange-400" onClick={() => dispatch(AddToCart(product))}>+</button>
                                                    </div>
                                                    <div>
                                                        <span>{cartTotalAmount}</span></div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    )

            }

        </div>

    );
}

export default Cart;