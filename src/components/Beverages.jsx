
import { useSelector, useDispatch } from "react-redux";
import { AddToCart } from "../redux/featchers/CartSlice";
const Beverages = () => {
    const dispatch = useDispatch()
    const data = useSelector(state => state.productsOne.items)
    return (
        <div className="direction">
            <div className="text-white 2xl:mr-24 xl:mr-24 lg:mr-24 md:mr-80 sm:mr-72 4xl:mr-64 5xl:mr-44 xs:mr-36 mt-4">محصولات</div>
            <ul class="nav mr-16 nav-tabs flex flex-col md:flex-row flex-wrap list-none border-b-0 pl-0 mb-4" id="tabs-tab"
                role="tablist">
                <li class="nav-item" role="presentation">
                    <a href="#tabs-home" className="
      nav-link
      block
      font-medium
      text-base
      leading-tight
      uppercase
      text-white
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      py-3
      2xl:mr-0
      xl:mr-0
      lg:mr-0
      4xl:mr-40
      5xl:mr-20
      xs:mr-10
      md:mr-48 sm:mr-48
      my-2
      hover:border-transparent hover:bg-gray-100
      focus:border-transparent
      active
    " id="tabs-home-tab" data-bs-toggle="pill" data-bs-target="#tabs-home" role="tab" aria-controls="tabs-home"
                        aria-selected="true">نوشیدنی سرد</a>
                </li>
                <li className="nav-item" role="presentation">
                    <a href="#tabs-profile" className="
      nav-link
      block
      font-medium
      sm:mr-48
      4xl:mr-40
      2xl:mr-0
      xl:mr-0
      lg:mr-0
      5xl:mr-20
      xs:mr-10
      leading-tight
      uppercase
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      text-white
      text-base
      py-3
      my-2
      hover:border-transparent hover:bg-gray-100
      focus:border-transparent
    " id="tabs-profile-tab" data-bs-toggle="pill" data-bs-target="#tabs-profile" role="tab"
                        aria-controls="tabs-profile" aria-selected="false">نوشیدنی گرم</a>
                </li>
            </ul>
            <div className="tab-content" id="tabs-tabContent">
                <div>
                    <div id="carouselExampleControlsOne" class="carousel slide relative" data-bs-ride="carousel">
                        <div class="carousel-inner relative w-full overflow-hidden">

                            <div class="carousel-item active relative float-left w-full">

                                <div className="tab-pane text-white fade show active" id="tabs-home" role="tabpanel" aria-labelledby="tabs-home-tab">

                                    <div className="grid mt-4  2xl:grid-cols-3 gap-6 xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 2xl:px-2 xl:px-2 px-0  mr-0 2xl:ml-24 xl:ml-24 ">
                                        {
                                            data.map((product) => ((
                                                <div key={product.id} className="flex    justify-center">
                                                    <div className="rounded-lg shadow-lg bg-white dark:bg-black max-w-md">
                                                        <a href="#!">
                                                            <img className="rounded-t-lg w-full" src={product.img} alt="" />
                                                        </a>
                                                        <div className="p-6">
                                                            <div class="flex  justify-between">
                                                                <div className="text-black ">{product.name}</div>
                                                                <div className="text-black ">{product.price}</div>


                                                            </div>
                                                            <div class="flex  justify-between">
                                                                <div className="text-black ">{product.desc}</div>
                                                            </div>
                                                            <div class="flex justify-between    2xl:mt-4 xl:mt-4 lg:mt-4 md:mt-0 sm:mt-0 4xl:mt-0 5xl:mt-0 xs:-mt-2">

                                                                <button onClick={() => dispatch(AddToCart(product))} type="button" class=" inline-block mt-3.5  rounded-lg w-32 py-3  bg-orange-400 text-black font-medium text-xs leading-tight uppercase  shadow-md hover:bg-yellow-900 hover:shadow-lg focus:bg-orange-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">افزودن به سبدخرید</button>


                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )))
                                        }

                                    </div>
                                </div>


                            </div>
                            <div class="carousel-item relative float-left w-full">
                                <div className="tab-pane fade text-white" id="tabs-profile" role="tabpanel" aria-labelledby="tabs-profile-tab">
                                    <div className="grid mt-4  2xl:grid-cols-3 gap-6 xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 2xl:px-2 xl:px-2 px-0  mr-0 2xl:ml-24 xl:ml-24 ">
                                        {
                                            data.map((product) => ((
                                                <div key={product.id} className="flex   justify-center">
                                                    <div className="rounded-lg shadow-lg bg-white dark:bg-black max-w-md">
                                                        <a href="#!">
                                                            <img className="rounded-t-lg w-full" src={product.img} alt="" />
                                                        </a>
                                                        <div className="p-6">
                                                            <div className="flex  justify-between">
                                                                <div className="text-black ">{product.name}</div>
                                                                <div className="text-black ">{product.price}</div>


                                                            </div>
                                                            <div className="flex  justify-between">
                                                                <div className="text-black ">{product.desc}</div>
                                                            </div>
                                                            <div className="flex justify-between    2xl:mt-4 xl:mt-4 lg:mt-4 md:mt-0 sm:mt-0 4xl:mt-0 5xl:mt-0 xs:-mt-2">

                                                                <button onClick={() => dispatch(AddToCart(product))} type="button" className=" inline-block mt-3.5  rounded-lg w-32 py-3  bg-orange-400 text-black font-medium text-xs leading-tight uppercase  shadow-md hover:bg-yellow-900 hover:shadow-lg focus:bg-orange-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">افزودن به سبدخرید</button>


                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )))
                                        }

                                    </div>
                                </div>
                            </div>

                        </div>
                        <button
                            class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                            type="button"
                            data-bs-target="#carouselExampleControlsOne"
                            data-bs-slide="prev"
                        >
                            <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button
                            class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                            type="button"
                            data-bs-target="#carouselExampleControlsOne"
                            data-bs-slide="next"
                        >
                            <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Beverages;