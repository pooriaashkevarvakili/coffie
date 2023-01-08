import { useSelector, useDispatch } from "react-redux";
import { AddToCart } from "../redux/featchers/CartSlice";

const Product = () => {
    const dispatch = useDispatch()


    const data = useSelector((state) => state.products.items)
    return (
        <div>
            <div className="2xl:flex xl:flex lg:flex block px-16 2xl:mr-12 xl:mr-12 lg:mr-12 xs:ml-14 sm:ml-52 2xl:ml-0 4xl:ml-32 5xl:ml-20 xl:ml-0 lg:ml-0 md:ml-72 mt-4 justify-between">

                <div className="text-orange-400 2xl:ml-0 xl:ml-0 lg:ml-0 md:-ml-0">همه محصولات</div>
                <div className="text-white text-3xl dark:text-black 2xl:ml-0 xl:mr-0 lg:mr-0 md:-ml-20">محصولات پرطرفدارم</div>
            </div>
            <div>
                <div id="carouselExampleControls" class="carousel slide relative" data-bs-ride="carousel">
                    <div class="carousel-inner relative w-full overflow-hidden">
                        <div class="carousel-item active relative float-left w-full">
                            <div className="grid mt-4 2xl:grid-cols-4 gap-6 xl:grid-cols-2 lg:grid-cols-2 grid-cols-1 2xl:px-16 xl:px-16 px-0 2xl:mr-2 xl:mr-2 mr-0 ">

                                {
                                    data.map((product) => (
                                        <div key={product.id} class="flex  justify-center">
                                            <div class="rounded-lg shadow-lg bg-white dark:bg-black max-w-sm">

                                                <img className="rounded-t-lg w-full" src={product.img} alt="" />

                                                <div className="p-6">
                                                    <div class="flex  justify-between">
                                                        <div className="text-black dark:text-white">{product.price}</div>
                                                        <div className="text-black dark:text-white">{product.name}</div>

                                                    </div>
                                                    <div class="flex  justify-between">
                                                        <div className="text-black dark:text-white">{product.desc}</div>
                                                    </div>
                                                    <div class="flex justify-end mt-4">



                                                        <button type="button" onClick={() => dispatch(AddToCart(product))} className=" inline-block 2xl:mt-3 xl:mt-3 md:mt-0 sm:mt-2 4xl:mt-0 5xl:mt-0 xs:-mt-3 rounded-lg w-32 py-2.5 bg-orange-400 text-black font-medium text-xs leading-tight uppercase  shadow-md hover:bg-yellow-900 hover:shadow-lg focus:bg-orange-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-900 active:shadow-lg transition duration-150 ease-in-out">افزودن به سبدخرید</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }


                            </div>
                        </div>
                        <div class="carousel-item relative float-left w-full">
                            <div className="grid mt-4 2xl:grid-cols-4 gap-6 xl:grid-cols-2 lg:grid-cols-2 grid-cols-1 2xl:px-16 xl:px-16 px-0 2xl:mr-2 xl:mr-2 mr-0 ">

                                {
                                    data.map((product) => (
                                        <div key={product.id} class="flex  justify-center">
                                            <div class="rounded-lg shadow-lg bg-white dark:bg-black max-w-sm">

                                                <img className="rounded-t-lg w-full" src={product.img} alt="" />

                                                <div className="p-6">
                                                    <div class="flex  justify-between">
                                                        <div className="text-black dark:text-white">{product.price}</div>
                                                        <div className="text-black dark:text-white">{product.name}</div>

                                                    </div>
                                                    <div className="flex  justify-end">
                                                        <div className="text-black dark:text-white">{product.desc}</div>
                                                    </div>
                                                    <div className="flex justify-end mt-4">



                                                        <button type="button" onClick={() => dispatch(AddToCart(product))} className=" inline-block 2xl:mt-3 xl:mt-3 md:mt-0 sm:mt-2 4xl:mt-0 5xl:mt-0 xs:-mt-3 rounded-lg w-32 py-2.5 bg-orange-400 text-black font-medium text-xs leading-tight uppercase  shadow-md hover:bg-yellow-900 hover:shadow-lg focus:bg-orange-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">افزودن به سبدخرید</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }

                            </div>
                        </div>
                        <div class="carousel-item relative float-left w-full">
                            <div className="grid mt-4 2xl:grid-cols-4 gap-6 xl:grid-cols-2 lg:grid-cols-2 grid-cols-1 2xl:px-16 xl:px-16 px-0 2xl:mr-2 xl:mr-2 mr-0 ">

                                {
                                    data.map((product) => (
                                        <div key={product.id} class="flex  justify-center">
                                            <div className="rounded-lg shadow-lg bg-white dark:bg-black max-w-sm">

                                                <img className="rounded-t-lg w-full" src={product.img} alt="" />

                                                <div className="p-6">
                                                    <div class="flex  justify-between">
                                                        <div className="text-black dark:text-white">{product.price}</div>
                                                        <div className="text-black dark:text-white">{product.name}</div>

                                                    </div>
                                                    <div className="flex  justify-between">
                                                        <div className="text-black dark:text-white">{product.desc}</div>
                                                    </div>
                                                    <div className="flex justify-end mt-4">



                                                        <button type="button" onClick={() => dispatch(AddToCart(product))} className=" inline-block 2xl:mt-3 xl:mt-3 md:mt-0 sm:mt-2 4xl:mt-0 5xl:mt-0 xs:-mt-3 rounded-lg w-32 py-2.5 bg-orange-400 text-black font-medium text-xs leading-tight uppercase  shadow-md hover:bg-yellow-900 hover:shadow-lg focus:bg-orange-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-900 active:shadow-lg transition duration-150 ease-in-out">افزودن به سبدخرید</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }


                            </div>
                        </div>
                    </div>
                    <button
                        class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                        type="button"
                        data-bs-target="#carouselExampleControls"
                        data-bs-slide="prev"
                    >
                        <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button
                        class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                        type="button"
                        data-bs-target="#carouselExampleControls"
                        data-bs-slide="next"
                    >
                        <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Product;