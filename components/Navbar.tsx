'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="w-full bg-[#1c398e] px-6 py-4">
      <div className="flex flex-row items-center gap-6 w=full">
        {/* Left: Logo + Navigation Links */}

        {/* check other CSS components to make sure that logo on the same line as other elements */}
        <Link href="/">
          <Image
            src="/logo.png"
            alt="IndexPHL Logo"
            width={50}
            height={50}
            className="object-contain inline-block"
          />
        </Link>
        <Link href="/categories" className="text-white font-medium hover:underline">
          Categories
        </Link>
        <Link href="/map" className="text-white font-medium hover:underline">
          Map
        </Link>
        <Link href="/submit" className="text-white font-medium hover:underline">
          Submit a Resource
        </Link>
        <Link href="/about" className="text-white font-medium hover:underline">
          About
        </Link>

        {/* Right: Language Toggle - ml-auto pushes this to the right */}
        <button className="text-white text-sm hover:underline ml-auto">
          ENGLISH | ESPAÑOL
        </button>
      </div>
    </nav>
  );
}
