import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import { useRef } from "react";

const Carousel = () => {
  const swiperRef = useRef();
  return (
    <div className="flex items-center px-40">
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        spaceBetween={30}
        modules={[Pagination, Navigation]}
      >
        {/* 00 */}
        <SwiperSlide>
          <div className="grid md:grid-cols-2 grid-cols-1 d: sm:gad-4 gap-1  py-10">
            <div className="div1">
              <div className="right-dest">
                <img
                  className="  rounded"
                  alt="hero"
                  width={500}
                  src="https://dummyimage.com/720x600"
                />
              </div>
            </div>
            <div className="lift-dest  flex justify-center flex-col">
              <h1 className="flex justify-start text-3xl font-samibold py-2">
                Many desktop publishing packages and editors now as use thier{" "}
              </h1>
              <p className="py-1">
                It is a long established fact that a reader will be distracted
                by the readable content of page when looking at its layout point
                of using is that it has more-or-less normal distribution of
                letters, as opposed to using Content here, content here, making
                look like readable English.
              </p>
              <button className="text-white rounded-full py-1 px-2 bg-cora hover:bg-cora2 w-28">
                Feature
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="grid md:grid-cols-2 grid-cols-1 d: sm:gad-4 gap-1  py-10">
            <div className="div1">
              <div className="right-dest">
                <img
                  className="  rounded"
                  alt="hero"
                  width={500}
                  src="https://dummyimage.com/720x600"
                />
              </div>
            </div>
            <div className="lift-dest  flex justify-center flex-col">
              <h1 className="flex justify-start text-3xl font-samibold py-2">
                Many desktop publishing packages and editors now as use thier{" "}
              </h1>
              <p className="py-1">
                It is a long established fact that a reader will be distracted
                by the readable content of page when looking at its layout point
                of using is that it has more-or-less normal distribution of
                letters, as opposed to using Content here, content here, making
                look like readable English.
              </p>
              <button className="text-white rounded-full py-1 px-2 bg-cora hover:bg-cora2 w-28">
                Feature
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="grid md:grid-cols-2 grid-cols-1 d: sm:gad-4 gap-1  py-10">
            <div className="div1">
              <div className="right-dest">
                <img
                  className="  rounded"
                  alt="hero"
                  width={500}
                  src="https://dummyimage.com/720x600"
                />
              </div>
            </div>
            <div className="lift-dest  flex justify-center flex-col">
              <h1 className="flex justify-start text-3xl font-samibold py-2">
                Many desktop publishing packages and editors now as use thier{" "}
              </h1>
              <p className="py-1">
                It is a long established fact that a reader will be distracted
                by the readable content of page when looking at its layout point
                of using is that it has more-or-less normal distribution of
                letters, as opposed to using Content here, content here, making
                look like readable English.
              </p>
              <button className="text-white rounded py-1 px-2 bg-cora hover:bg-cora2 w-28">
                Feature
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="grid md:grid-cols-2 grid-cols-1 d: sm:gad-4 gap-1  py-10">
            <div className="div1">
              <div className="right-dest">
                <img
                  className="  rounded"
                  alt="hero"
                  width={500}
                  src="https://dummyimage.com/720x600"
                />
              </div>
            </div>
            <div className="lift-dest  flex justify-center flex-col">
              <h1 className="flex justify-start text-3xl font-samibold py-2">
                Many desktop publishing packages and editors now as use thier{" "}
              </h1>
              <p className="py-1">
                It is a long established fact that a reader will be distracted
                by the readable content of page when looking at its layout point
                of using is that it has more-or-less normal distribution of
                letters, as opposed to using Content here, content here, making
                look like readable English.
              </p>
              <button className="text-white rounded py-1 px-2 bg-cora hover:bg-cora2 w-28">
                Feature
              </button>
            </div>
          </div>
        </SwiperSlide>

        <div className="btn  flex sm:justify justify-center">
          <span
            className="icon h-4 w-4 bg-cora rounded-full"
            onClick={() => swiperRef.current.slidePrev()}
          ></span>
          <span
            className="icon h-4 w-4 mx-1 bg-cora rounded-full"
            onClick={() => swiperRef.current.slideNext()}
          ></span>
          <span
            className="icon h-4 w-4  bg-cora rounded-full"
            onClick={() => swiperRef.current.slideNext()}
          ></span>
        </div>
      </Swiper>
    </div>
  );
};

export default Carousel;
