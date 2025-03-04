import React from "react";
const Footer = () => {
  return (
    <footer className="w-full p-4 bg-gray-800 text-white text-center mt-8">
      <p>© {new Date().getFullYear()} Crypto Tracker. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
