
import { Link } from "react-router-dom";
export default function Navbar() {


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
                            <Link className="
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
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="shopping-cart"
                                    className="w-4" role="img" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 576 512">
                                    <path fill="currentColor"
                                        d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z">
                                    </path>
                                </svg>
                            </Link>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );

}