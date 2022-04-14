import React from "react";
import carosel1 from "../../Pages/Images/carosel1.jpg";
import carosel2 from "../../Pages/Images/carosel2.jpg";
import carosel3 from "../../Pages/Images/carosel3.jpg";

const Baner = () => {
  return (
    <div>
      <div
        id="carouselDarkVariant"
        className="carousel slide carousel-fade carousel-dark relative"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
          <button
            data-bs-target="#carouselDarkVariant"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            data-bs-target="#carouselDarkVariant"
            data-bs-slide-to="1"
            aria-label="Slide 1"
          ></button>
          <button
            data-bs-target="#carouselDarkVariant"
            data-bs-slide-to="2"
            aria-label="Slide 1"
          ></button>
        </div>

        <div className="carousel-inner relative w-full overflow-hidden">
          <div className="carousel-item active relative float-left w-full">
            <img
              src={carosel1}
              className="block w-full"
              alt="Motorbike Smoke"
            />
            <div className="carousel-caption hidden md:block absolute text-center">
              <h5 className="text-3xl text-white">First slide label</h5>
              <p className="text-white text-2xl">
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>

          <div className="carousel-item relative float-left w-full">
            <img src={carosel2} className="block w-full" alt="Mountaintop" />
            <div className="carousel-caption hidden md:block absolute text-center">
              <h5 className="text-3xl">Second slide label</h5>
              <p className="text-2xl">
                Some representative placeholder content for the second slide.
              </p>
            </div>
          </div>

          <div className="carousel-item relative float-left w-full">
            <img
              src={carosel3}
              className="block w-full"
              alt="Woman Reading a Book"
            />
            <div className="text-white carousel-caption hidden md:block absolute text-center">
              <h5 className="text-3xl text-white">Third slide label</h5>
              <p className="text-white text-2xl">
                Some representative placeholder content for the third slide.
              </p>
            </div>
          </div>
        </div>

        <button
          className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
          type="button"
          data-bs-target="#carouselDarkVariant"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
          type="button"
          data-bs-target="#carouselDarkVariant"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Baner;
