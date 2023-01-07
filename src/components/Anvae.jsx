const Anvae = () => {
    return (
        <>
            <div className="grid 2xl:grid-cols-3 xl:grid-cols-2 grid-cols-1  mr-12 px-16 gap-6 mt-4">
                <div className="carousel-item active relative float-left w-full">
                    <img
                        src="ghahve9.png"
                        class="block w-full"

                    />
                    <div className="carousel-caption  md:block 4xl:hidden 5xl:hidden xs:hidden absolute text-center">
                        <h5 className="text-3xl relative bottom-48">انواع دستگاه قهوه ساز</h5>
                    </div>
                </div>
                <div className="carousel-item active relative float-left w-full">
                    <img
                        src="ghahve12.png"
                        className="block w-full"

                    />
                    <div className="carousel-caption  md:block absolute 4xl:hidden 5xl:hidden xs:hidden text-center">
                        <h5 className="text-3xl relative bottom-48">لوازم جانبی</h5>
                    </div>
                </div>
                <div class="carousel-item active relative float-left w-full">
                    <img
                        src="ghahve10.png"
                        className="block w-full"

                    />
                    <div className="carousel-caption 4xl:hidden 5xl:hidden xs:hidden md:block absolute text-center">
                        <h5 className="text-3xl relative bottom-48 ">انواع ماگ وکاپ</h5>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Anvae;
