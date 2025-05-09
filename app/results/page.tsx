'use client';

import { useState } from 'react';

export default function ResultsPage() {
  const [view, setView] = useState<'list' | 'map'>('list');

  return (
    <section className="min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Results</h1>
        {/* Toggle Buttons */}
        <div className="flex mb-6">
          <button
            onClick={() => setView('list')}
            className={`px-4 py-2 border border-gray-300 rounded-l-md ${view === 'list' ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'}`}
          >
            List View
          </button>
          <button
            onClick={() => setView('map')}
            className={`px-4 py-2 border border-gray-300 rounded-r-md ${view === 'map' ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'}`}
          >
            Map View
          </button>
        </div>
        {/* Content Area */}
        {view === 'list' ? (
          <div>
            <p className="text-gray-700">Static placeholder for list view results goes here.</p>
            <ul className="mt-4 space-y-3">
              <li className="p-4 bg-gray-100 rounded shadow">Result Item 1</li>
              <li className="p-4 bg-gray-100 rounded shadow">Result Item 2</li>
              <li className="p-4 bg-gray-100 rounded shadow">Result Item 3</li>
            </ul>
          </div>
        ) : (
          <div className="p-6 bg-gray-200 rounded-lg flex justify-center items-center h-64">
            <p className="text-gray-600">Static placeholder for map view results goes here.</p>
          </div>
        )}
      </div>
    </section>
  );
}
