import { Link } from "react-router-dom";
const Carousel = () => {
    return (
        <div className="2xl:flex xl:flex lg:flex md:block direction 2xl:mr-24 xl:mr-24 lg:mr-24 mr-0">
            <div className="2xl:w-6/12 xl:w-6/12 lg:w-6/12 w-full text-white dark:text-black">
                <div className="mt-4 2xl:mr-0 xl:mr-0 lg:mr-0 md:mr-96 sm:mr-72 4xl:mr-56 5xl:mr-44 xs:mr-36">قهوه ام</div>
                <div className="mt-4 2xl:mr-0 xl:mr-0 lg:mr-0 md:mr-80 sm:mr-52 4xl:mr-36 5xl:mr-24 xs:mr-20">تجربه ای <span className="text-orange-400">لذت بخش</span> از قهوه باما</div>
                <div>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                </div>
                <Link type="button" class=" text-black mt-4  w-36  flex items-center justify-center  2xl:mr-0 xl:mr-0 lg:mr-0 md:mr-72 sm:mr-56 4xl:mr-44 5xl:mr-28 xs:mr-28  h-16 rounded-xl bg-orange-400 dark:bg-black  dark:text-white  font-medium text-base leading-tight uppercase  shadow-md hover:bg-orange-400 hover:shadow-lg focus:bg-orange-400 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-400 active:shadow-lg transition duration-150 ease-in-out">مشاهده منو</Link>
            </div>
            <div className="2xl:w-6/12 xl:w-6/12 lg:w-6/12 w-full ml-16 mt-4 text-white dark:text-black">
                <div
                    id="carouselExampleCrossfade"
                    class="carousel slide carousel-fade relative"
                    data-bs-ride="carousel"
                >
                    <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
                        <button
                            type="button"
                            data-bs-target="#carouselExampleCrossfade"
                            data-bs-slide-to="0"
                            class="active"
                            aria-current="true"
                            aria-label="Slide 1"
                        ></button>
                        <button
                            type="button"
                            data-bs-target="#carouselExampleCrossfade"
                            data-bs-slide-to="1"
                            aria-label="Slide 2"
                        ></button>
                        <button
                            type="button"
                            data-bs-target="#carouselExampleCrossfade"
                            data-bs-slide-to="2"
                            aria-label="Slide 3"
                        ></button>
                    </div>
                    <div class="carousel-inner relative w-full overflow-hidden">
                        <div class="carousel-item active float-left w-full">
                            <img
                                src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp"
                                class="block w-full"
                                alt="Wild Landscape"
                            />
                        </div>
                        <div class="carousel-item float-left w-full">
                            <img
                                src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp"
                                class="block w-full"
                                alt="Camera"
                            />
                        </div>
                        <div class="carousel-item float-left w-full">
                            <img
                                src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp"
                                class="block w-full"
                                alt="Exotic Fruits"
                            />
                        </div>
                    </div>
                    <button
                        class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                        type="button"
                        data-bs-target="#carouselExampleCrossfade"
                        data-bs-slide="prev"
                    >
                        <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button
                        class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                        type="button"
                        data-bs-target="#carouselExampleCrossfade"
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

export default Carousel;
