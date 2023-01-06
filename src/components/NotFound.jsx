import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center w-full h-screen text-red-400 dark:text-black">
            <div>404</div>
            <div>این صفحه موجود نمی باشد</div>
            <Link to="/" className="dark:bg-orange-400 text-black mt-4  w-36  flex items-center justify-center  h-16 rounded-xl bg-orange-400 dark:text-white  font-medium text-base leading-tight uppercase  shadow-md hover:bg-orange-400 hover:shadow-lg focus:bg-orange-400 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-400 active:shadow-lg transition duration-150 ease-in-out">Home</Link>
        </div>
    );
}

export default NotFound;