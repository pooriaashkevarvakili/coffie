import BeveragesOne from "./Beverges/Beverges-one"
import BeveragesTwo from "./Beverges/Beverges-two"
const Beverages = () => {
    return (
        <div className="direction">
            <div className="text-white mr-24 mt-4">محصولات</div>
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
                                    <BeveragesOne />
                                </div>


                            </div>
                            <div class="carousel-item relative float-left w-full">
                                <div className="tab-pane fade text-white" id="tabs-profile" role="tabpanel" aria-labelledby="tabs-profile-tab">
                                    <BeveragesTwo />
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