import React from "react";

const Footer2 = () => {
  return (
    <footer className="bg-gradient-to-r from-[#E5F4FD] to-[#B8E0F5] text-cyan-900 py-4 px-8">
      <div className="container mx-auto flex justify-between items-start">
        <p className="font-semibold pt-2">
          © 2025 Filard Musson System. All rights reserved.
        </p>

        <div className="text-right">
          <h4 className="font-semibold text-lg">Connect Us</h4>
          <div>
            <p>Depok. Contact: contact@fms.id</p>
            <p>+62 811 2345 678</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer2;
