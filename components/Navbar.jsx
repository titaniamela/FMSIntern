import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Us" },
    { id: "services2", label: "Services" },
    { id: "credentials4", label: "Credentials" },
    { id: "contact-options", label: "Contact Us" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const navbarHeight = 64; // Height of navbar (h-16 = 64px)
      const offset = 100; // Additional offset to ensure proper section detection

      menuItems.forEach((item) => {
        const el = document.getElementById(item.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          const elementTop = window.scrollY + rect.top;
          const elementBottom = elementTop + el.offsetHeight;

          // Check if we're within this section with proper offset
          if (
            window.scrollY >= elementTop - navbarHeight - offset &&
            window.scrollY < elementBottom - navbarHeight - offset
          ) {
            setActiveMenu(item.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuClick = (itemId) => {
    setActiveMenu(itemId);
    setIsMenuOpen(false);

    // Smooth scroll with proper offset
    const element = document.getElementById(itemId);
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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a
              href="#home"
              className="font-semibold text-lg lg:text-xl text-[#046289]"
              onClick={(e) => {
                e.preventDefault();
                handleMenuClick("home");
              }}
            >
              Filard Musson System
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <ul className="flex space-x-8">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleMenuClick(item.id);
                    }}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                      activeMenu === item.id
                        ? "bg-[#2E86AB] text-white shadow font-semibold"
                        : "text-[#2E86AB] hover:bg-[#e0f4ff] font-semibold"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-[#2E86AB] hover:text-white hover:bg-[#2E86AB] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#2E86AB] transition-colors duration-200"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isMenuOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isMenuOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-lg">
          {menuItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                handleMenuClick(item.id);
              }}
              className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 ${
                activeMenu === item.id
                  ? "bg-[#2E86AB] text-white shadow"
                  : "text-[#2E86AB] hover:bg-[#e0f4ff]"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
