import React from "react";

export default function Hero() {
  const handleLearnMoreClick = () => {
    const element = document.getElementById("about");
    if (element) {
      const navbarHeight = 64; // h-16 = 64px
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="h-screen bg-gradient-to-r from-[#E5F4FD] to-[#B8E0F5] flex items-center px-4 sm:px-6 md:px-12 lg:px-20"
      style={{ paddingTop: "64px" }}
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1 space-y-4 lg:space-y-6">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#1A5F7A] leading-tight">
              Welcome to <br className="hidden sm:block" />
              Filard Musson System
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#2E86AB] leading-relaxed max-w-xl text-justify">
              Expert subsea cable survey teams delivering precision in placement
              and seamless integration for global marine engineering projects.
            </p>
            {/* Button moved here */}
            <div className="pt-2">
              <button
                onClick={handleLearnMoreClick}
                className=" relative group cursor-pointer text-white overflow-hidden rounded-lg shadow-md bg-[#2E86AB] flex justify-center items-center font-extrabold h-auto w-auto py-2 px-4 sm:py-3 sm:px-6 md:py-4 md:px-8 transition-all duration-300 ease-in-out hover:bg-[#046289] hover:shadow-lg active:bg-[#1A5F7A] active:shadow-inner"
              >
                {/* Lingkaran animasi */}
                <div className="absolute top-[-10px] right-[-40px] group-hover:top-12 group-hover:-right-12 z-10 w-40 h-40 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-[#046289]"></div>
                <div className="absolute top-[-10px] right-[-40px] group-hover:top-12 group-hover:-right-12 z-10 w-32 h-32 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-[#1A5F7A]"></div>
                <div className="absolute top-[-10px] right-[-40px] group-hover:top-12 group-hover:-right-12 z-10 w-24 h-24 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-[#2E86AB]"></div>
                <div className="absolute top-[-10px] right-[-40px] group-hover:top-12 group-hover:-right-12 z-10 w-14 h-14 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-[#5BC0DE]"></div>
                <p className="z-10 relative text-xs sm:text-sm md:text-base">
                  Learn More
                </p>
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end lg:pl-20">
            <div className="relative w-11/12 lg:w-4/5 max-w-lg mx-auto">
              <img
                src="/images/home.jpeg"
                alt="Underwater cables"
                className="rounded-xl shadow-lg w-full h-64 lg:h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
