import { useSelector } from "react-redux";

import { Link } from "react-router-dom";
export default function Navbar() {
    const { cart } = useSelector(state => state.cart)
    return (
        <div >

            <div>
                <div className="2xl:flex 2xl:px-20 xl:px-20 lg:px-10 md:px-0 px-0 xl:flex lg:flex block 2xl:ml-0 xl:ml-0 lg:ml-0 sm:ml-60 4xl:ml-48 5xl:ml-32 xs:ml-24  md:ml-80  justify-between  ">
                    <div className="2xl:flex xl:flex lg:flex block">
                        <Link to="/login" type="button" class=" text-black 2xl:mt-4 xl:mt-4 lg:mt-4 mt-0  w-36  flex items-center justify-center  h-16 rounded-xl bg-orange-400 dark:bg-black  dark:text-white  font-medium text-base leading-tight uppercase  shadow-md hover:bg-orange-400 hover:shadow-lg focus:bg-orange-400 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-400 active:shadow-lg transition duration-150 ease-in-out">ثبت نام</Link>
                        <Link to="/login" type="button" class="  2xl:mt-4 xl:mt-4 lg:mt-4 mt-0  w-36  flex items-center justify-center  h-16 rounded-xl   text-white  font-medium text-base leading-tight uppercase  shadow-md  hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out">ورود</Link>
                    </div>


                    <Link to="/" className="">
                        <img className="h-14 2xl:mt-4 xl:mt-4 lg:mt-4 mt-0 2xl:ml-0 xl:ml-0 lg:ml-0 md:ml-14 ml-14" src="ghahve-logo.png" alt="" />
                    </Link>
                </div>
                <hr className="w-11/12 text-black dark:text-white ml-16 2xl:mt-4 xl:mt-4 lg:mt-4 mt-0 hidden 2xl:block xl:block" />
                <nav className="
  relative
  2xl:w-11/12
  xl:w-11/12
  w-full
  2xl:ml-16
  xl:ml-16
  ml-0
  mt-4
  flex flex-wrap
  items-center
  justify-between
  direction
  py-4
  
  
  text-gray-500
  hover:text-gray-700
  focus:text-gray-700
  shadow-lg
  navbar navbar-expand-lg navbar-light
  ">
                    <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
                        <button className="
      navbar-toggler
      text-gray-500
      border-0
      hover:shadow-none hover:no-underline
      py-2
      px-2.5
      bg-transparent
      focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline
    " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars"
                                className="w-6" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <path fill="currentColor"
                                    d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z">
                                </path>
                            </svg>
                        </button>
                        <div className="collapse  navbar-collapse flex-grow items-center" id="navbarSupportedContent">
                            <Link to="/" className="
        flex
        items-center
        text-white
         dark:hover:text-orange-400
        hover:text-orange-400
        focus:text-orange-400
        dark:text-white
        mt-2
        lg:mt-0
        
      " href="#">

                                صفحه اصلی
                            </Link>
                            <Link className="
       flex
       items-center
       
        dark:hover:text-orange-400
       hover:text-orange-400
       focus:text-orange-400
       text-white
       mt-2
       lg:mt-0
       2xl:mr-3
       xl:mr-3
       lg:mr-3
       mr-0
      " href="#">

                                راهنمای خرید
                            </Link>
                            <Link className="
      flex
      items-center
      
       dark:hover:text-orange-400
      hover:text-orange-400
      focus:text-orange-400
      text-white
      mt-2
      lg:mt-0
      2xl:mr-3
      xl:mr-3
      lg:mr-3
      mr-0
      " href="#">

                                فروشگاه
                            </Link>
                            <Link className="
      flex
      items-center
      
       dark:hover:text-orange-400
      hover:text-orange-400
      focus:text-orange-400
      text-white
      mt-2
      lg:mt-0
      2xl:mr-3
      xl:mr-3
      lg:mr-3
      mr-0
      " href="#">

                                درباره ما
                            </Link>
                            <Link className="
      flex
      items-center
      
       dark:hover:text-orange-400
      hover:text-orange-400
      focus:text-orange-400
      text-white
      mt-2
      lg:mt-0
      2xl:mr-3
      xl:mr-3
      lg:mr-3
      mr-0
      " href="#">

                                منو
                            </Link>
                        </div>
                        <div className="flex items-center relative">
                            <Link to="/cart" className="text-gray-500 hover:text-gray-700 focus:text-gray-700 2xl:mr-4 xl:mr-4 lg:mr-4 mr-0" href="#">
                                <div className="m-6 inline-flex relative w-fit">
                                    <div className="absolute inline-block top-0 right-0 bottom-auto left-auto translate-x-2/4 -translate-y-1/2 rotate-0 skew-x-0 skew-y-0 scale-x-100 scale-y-100 p-2.5 text-xs bg-red-600 rounded-full text-white z-10">{cart.length}</div>
                                    <div className="w-12 h-12 bg-gray-400 flex items-center justify-center text-center rounded-lg shadow-lg">
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-white">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                            </svg>

                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );

}