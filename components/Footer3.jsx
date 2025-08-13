import React from "react";

const Footer3 = () => {
  return (
    <footer className="bg-gradient-to-r from-[#E5F4FD] to-[#B8E0F5] text-[#046289]">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center">
          {/* Copyright */}
          <div className="text-[#046289] font-semibold">
            <p>© 2025 Filard Musson System. All rights reserved.</p>
          </div>

          {/* Contact Information */}
          <div className="space-y-2">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-[#046289] text-white rounded-lg flex items-center justify-center mr-2">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
              </div>
              <p className="text-[#046289] font-semibold">+62 811 2345 678</p>
            </div>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-[#046289] text-white rounded-lg flex items-center justify-center mr-2">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </div>
              <p className="text-[#046289] font-semibold">
                contact@fmusson.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer3;
