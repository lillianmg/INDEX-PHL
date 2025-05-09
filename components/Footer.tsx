'use client';

export default function Footer() {
  return (
    <footer className="w-full bg-[#1c398e] px-6 py-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <h2 className="text-xl font-bold text-white">IndexPHL</h2>
          <p className="text-sm text-white">
            Your guide to navigating Philly, one resource at a time.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 text-center">
          <a href="/about" className="text-white hover:underline">
            About
          </a>
          <a href="/categories" className="text-white hover:underline">
            Categories
          </a>
          <a href="/map" className="text-white hover:underline">
            Map
          </a>
          <a href="/submit" className="text-white hover:underline">
            Submit a Resource
          </a>
        </div>
      </div>
      <div className="mt-4 border-t border-gray-400 pt-4 text-center text-white text-xs">
        © {new Date().getFullYear()} IndexPHL. All rights reserved.
      </div>
    </footer>
  );
}
