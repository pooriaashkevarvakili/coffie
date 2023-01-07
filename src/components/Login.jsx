import { Link } from 'react-router-dom'
import React from 'react'
function Login() {

    return (
        <section className="h-screen">
            <div className="container px-6 py-12 h-full">
                <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
                    <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
                        <img
                            src="ghahve.png"
                            className="w-full"

                        />
                    </div>
                    <div className="md:w-8/12 lg:w-5/12 lg:ml-20">

                        <form>
                            <div className='text-white flex items-center justify-center'>ثبت نام</div>

                            <div className="mb-6 mt-6">
                                <input
                                    type="text"
                                    class="form-control direction block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    placeholder="نام ونام خانوادگی"
                                />
                            </div>

                            <div className="mb-6">
                                <input
                                    type="number"
                                    className="form-control direction block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    placeholder="شماره تماس"
                                />
                            </div>
                            <div className="mb-6 mt-6">
                                <input
                                    type="text"
                                    class="form-control direction block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    placeholder="ایمیل"
                                />
                            </div>
                            <div className="mb-6 mt-6">
                                <input
                                    type="password"
                                    class="form-control direction block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    placeholder="رمز"
                                />
                            </div>
                            <Link to="/"

                                class="inline-block text-center  px-7 py-3 bg-orange-400 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-orange-900 hover:shadow-lg focus:bg-orange-900 focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out w-full"

                            >
                                Sign in
                            </Link>


                        </form>
                    </div>
                </div>
            </div>
        </section>

    )
}
export default Login