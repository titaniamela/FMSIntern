import React from "react";
import SectionTitle from "./SectionTitle";

export default function About() {
  const handleCompanyInsightClick = () => {
    const element = document.getElementById("company-insight");
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
      id="about"
      className="min-h-screen w-full bg-white relative overflow-hidden flex flex-col justify-start pt-10 pb-16 px-4 md:px-20"
    >
      {/* Content container */}
      <div className="relative z-10 max-w-5xl mx-auto w-full">
        <SectionTitle>About Us</SectionTitle>

        <div className="max-w-4xl mx-auto relative">
          {/* Background decorative elements */}
          <div className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-to-br from-[#2E86AB]/20 to-[#2E86AB]/10 rounded-full blur-xl"></div>
          <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-[#2E86AB]/15 to-[#2E86AB]/5 rounded-full blur-xl"></div>

          {/* Main content card */}
          <div className="relative bg-gradient-to-br from-white via-blue-50 to-blue-100 p-8 rounded-xl shadow-lg border border-blue-100">
            {/* Quote decoration */}
            <div className="absolute top-4 left-6 text-6xl text-[#2E86AB]/20 font-serif leading-none">
              "
            </div>

            {/* Content */}
            <div className="relative z-10 text-center pt-6">
              <div className="w-16 h-1 bg-gradient-to-r from-[#2E86AB] to-[#2E86AB] mx-auto mb-6 rounded-full"></div>
              <p className="text-lg text-[#2E86AB] leading-relaxed">
                <span className="font-semibold text-[#1A5F7A]">
                  PT Filard Musson System
                </span>{" "}
                specializes in providing expert services for subsea cable
                operations, with a particular focus on deploying highly skilled
                survey teams. These teams are instrumental in meticulously
                conducting and overseeing cable laying operations.
              </p>
              <div className="w-16 h-1 bg-gradient-to-r from-[#2E86AB] to-[#2E86AB] mx-auto mt-6 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Button positioned at bottom right */}
        <div className="flex justify-end mt-12">
          <button
            onClick={handleCompanyInsightClick}
            className="flex items-center justify-center gap-2.5 font-medium uppercase tracking-wider
                       bg-[#2E86AB] text-white
                       py-3 px-6 rounded-lg shadow-md
                       transition-all duration-200 ease-in-out
                       hover:bg-[#046289] hover:shadow-lg active:shadow-inner active:bg-[#1A5F7A]
                       text-sm cursor-pointer"
          >
            <svg
              viewBox="0 0 24 24"
              width={20}
              height={20}
              stroke="currentColor"
              strokeWidth={2}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-white"
            >
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
            </svg>
            See Company Insight
          </button>
        </div>
      </div>
    </section>
  );
}
