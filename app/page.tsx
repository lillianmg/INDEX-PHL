// import Image from "next/image";

export default function Home() {
  return (
    <section className="min-h-screen px-4 py-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section with Search Bar */}
        <div className="mb-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Welcome to IndexPHL
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            Find local resources across Philadelphia: food, housing, health, transit & more.
          </p>
          <div className="flex justify-center items-center">
            <input
              type="text"
              placeholder="Search for resources..."
              className="flex-1 max-w-md px-4 py-3 rounded-lg border border-gray-300 shadow text-black font-bold focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="ml-4 px-4 py-3 rounded-lg bg-[#1c398e] text-white font-medium hover:bg-[#162f6c] transition-colors">
              Search
            </button>
          </div>
        </div>

        {/* Resource Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
          <div className="p-6 bg-gray-100 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">Housing</h2>
            <p className="text-gray-700">Find safe and affordable housing options.</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">Food</h2>
            <p className="text-gray-700">Locate food banks and pantries near you.</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">Health</h2>
            <p className="text-gray-700">Access local health services and support.</p>
          </div>
          {/* Add additional cards as needed */}
        </div>

        {/* Interactive Map Placeholder */}
        <div className="p-6 bg-gray-200 rounded-lg flex justify-center items-center h-64">
          <p className="text-gray-600">Interactive Map Placeholder</p>
        </div>
      </div>
    </section>
  );
}
