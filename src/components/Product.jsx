import ProductOne from "./product/product-one";
import ProductThree from "./product/product-three";
import ProductTwo from "./product/product-two";

const Product = () => {
    return (
        <div>
            <div className="2xl:flex xl:flex lg:flex block px-16 2xl:mr-12 xl:mr-12 lg:mr-12 xs:ml-14 sm:ml-52 2xl:ml-0 4xl:ml-32 5xl:ml-20 xl:ml-0 lg:ml-0 md:ml-72 mt-4 justify-between">

                <div className="text-orange-400 2xl:ml-0 xl:ml-0 lg:ml-0 ml-8">همه محصولات</div>
                <div className="text-white text-3xl dark:text-black">محصولات پرطرفدارم</div>
            </div>
            <div>
                <div id="carouselExampleControls" class="carousel slide relative" data-bs-ride="carousel">
                    <div class="carousel-inner relative w-full overflow-hidden">
                        <div class="carousel-item active relative float-left w-full">
                            <ProductOne />
                        </div>
                        <div class="carousel-item relative float-left w-full">
                            <ProductTwo />
                        </div>
                        <div class="carousel-item relative float-left w-full">
                            <ProductThree />
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