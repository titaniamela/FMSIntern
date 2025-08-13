import React from "react";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted");
  };

  return (
    <section id="contact" className="scroll-mt-20 py-20 px-4 md:px-20 bg-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1A5F7A] mb-12">
        Contact Us
      </h2>

      <div className="max-w-3xl mx-auto bg-blue-50 p-6 rounded-xl shadow-md">
        <div className="grid gap-6">
          <div>
            <label className="block text-sm font-semibold text-[#1A5F7A] mb-1">
              Name
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 text-[#2E86AB] focus:outline-none focus:ring-2 focus:ring-[#2E86AB]"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#1A5F7A] mb-1">
              Email
            </label>
            <input
              type="email"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 text-[#2E86AB] focus:outline-none focus:ring-2 focus:ring-[#2E86AB]"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#1A5F7A] mb-1">
              Message
            </label>
            <textarea
              rows="4"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 text-[#2E86AB] focus:outline-none focus:ring-2 focus:ring-[#2E86AB]"
              placeholder="Your message..."
            ></textarea>
          </div>

          {/* Animated Send Button */}
          <div className="flex justify-center">
            <button
              onClick={handleSubmit}
              className="send-button group relative bg-[#2E86AB] text-white px-6 py-3 flex items-center border-none rounded-lg overflow-hidden transition-all duration-300 cursor-pointer hover:bg-[#046289] hover:shadow-lg active:scale-95 font-medium text-sm min-w-[160px]"
            >
              <div className="svg-wrapper absolute left-4 transition-all duration-300 ease-in-out group-hover:left-1/2 group-hover:-translate-x-1/2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={24}
                  height={24}
                  className="block transition-all duration-300 ease-in-out group-hover:rotate-45 group-hover:scale-110"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path
                    fill="currentColor"
                    d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                  />
                </svg>
              </div>
              <span className="block transition-all duration-300 ease-in-out group-hover:opacity-0 group-hover:translate-x-4 ml-10">
                Send Message
              </span>
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fly-1 {
          from {
            transform: translateY(0.1em);
          }
          to {
            transform: translateY(-0.1em);
          }
        }

        .send-button:hover .svg-wrapper {
          animation: fly-1 0.6s ease-in-out infinite alternate;
        }
      `}</style>
    </section>
  );
}
