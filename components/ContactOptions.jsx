import React, { useState } from "react";
import SectionTitle from "./SectionTitle";
import Footer from "./Footer"; // import Footer

export default function ContactOptions() {
  const [showEmailPopup, setShowEmailPopup] = useState(false);
  const emailAddress = "contact@fmusson.com";

  const handleOpenEmailApp = () => {
    window.location.href = `mailto:${emailAddress}`;
    setShowEmailPopup(false);
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress);
      alert("Email address copied to clipboard!");
    } catch (err) {
      const textArea = document.createElement("textarea");
      textArea.value = emailAddress;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      alert("Email address copied to clipboard!");
    }
    setShowEmailPopup(false);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Konten utama */}
      <section
        id="contact-options"
        className="flex-1 w-full bg-white relative overflow-hidden flex flex-col justify-start pb-16 px-4 md:px-20"
        style={{ paddingTop: "100px" }}
      >
        <div className="relative z-10 max-w-5xl mx-auto w-full">
          <SectionTitle>Contact Us</SectionTitle>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-6 rounded-xl shadow text-center">
              <h3 className="text-xl font-semibold text-[#1A5F7A] mb-4">
                Via WhatsApp
              </h3>
              <p className="text-sm text-[#2E86AB] mb-4">
                Click the button below to send us a message directly via
                WhatsApp.
              </p>
              <a
                href="https://wa.me/6285179664312?text=Halo%2C%20saya%20melihat%20website%20fmusson.com%20dan%20tertarik%20dengan%20layanan%20Anda.%0ABisakah%20saya%20mendapatkan%20informasi%20lebih%20lanjut%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition font-medium"
              >
                Chat via WhatsApp
              </a>
            </div>

            <div className="bg-blue-50 p-6 rounded-xl shadow text-center relative">
              <h3 className="text-xl font-semibold text-[#1A5F7A] mb-4">
                Via Email
              </h3>
              <p className="text-sm text-[#2E86AB] mb-4">
                Click the button below to choose your preferred email option.
              </p>
              <button
                onClick={() => setShowEmailPopup(true)}
                className="inline-block bg-[#2E86AB] text-white px-6 py-2 rounded-full hover:bg-[#046289] transition font-medium"
              >
                Email Options
              </button>

              {showEmailPopup && (
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 z-50">
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">
                      Email Options
                    </h3>
                    <p className="text-sm text-gray-600 mb-6">{emailAddress}</p>
                    <div className="flex flex-col space-y-3">
                      <button
                        onClick={handleOpenEmailApp}
                        className="w-full px-4 py-3 bg-[#046289] hover:bg-[#2E86AB] text-white rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
                      >
                        Open Email App
                      </button>
                      <button
                        onClick={handleCopyEmail}
                        className="w-full px-4 py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
                      >
                        Copy Email Address
                      </button>
                    </div>
                    <button
                      onClick={() => setShowEmailPopup(false)}
                      className="w-full mt-4 px-4 py-2 text-gray-500 hover:text-gray-700 transition-colors duration-200"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer di bawah */}
      <Footer />
    </div>
  );
}
