import React from 'react';
import Link from "next/link";

const Header =
 () => {
  return (
    <header className="w-full p-4 bg-gray-800 text-white flex justify-between items-center">
      <h1 className="text-xl font-bold">Crypto Tracker</h1>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link href="/">
              <span className="hover:underline cursor-pointer">Home</span>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <span className="hover:underline cursor-pointer">About</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
