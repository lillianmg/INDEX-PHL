// 'use client';

// import { useState } from 'react';

// interface Resource {
//   id: string;
//   name: string;
//   description: string;
// }

// export default function AIpoweredSearch() {
//   const [query, setQuery] = useState<string>('');
//   const [results, setResults] = useState<Resource[]>([]);
//   const [loading, setLoading] = useState<boolean>(false);
//   const [error, setError] = useState<string>('');

//   const handleSearch = async () => {
//     if (!query.trim()) return;
//     setLoading(true);
//     setError('');
//     try {
//       // Replace the URL below with the correct endpoint from OpenDataPhilly
//       const response = await fetch(
//         `https://opendataphilly.org/datasets/?query=${encodeURIComponent(query)}`
//       );
//       if (!response.ok) {
//         throw new Error('Failed to fetch resources.');
//       }
//       const data = await response.json();
//       // Assume the returned data is an array of resource objects
//       setResults(data);
//     } catch (err: any) {
//       setError(err.message || 'An error occurred.');
//     }
//     setLoading(false);
//   };

//   return (
//     <div className="p-4 bg-gray-50 rounded-lg shadow-md">
//       <div className="flex flex-col sm:flex-row items-center">
//         <input
//           type="text"
//           placeholder="Search for resources..."
//           value={query}
//           onChange={(e) => setQuery(e.target.value)}
//           className="flex-1 max-w-md px-4 py-3 rounded-lg border border-gray-300 shadow text-black font-bold focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />
//         <button
//           onClick={handleSearch}
//           className="ml-4 mt-2 sm:mt-0 px-4 py-3 rounded-lg bg-[#1c398e] text-white font-medium hover:bg-[#162f6c] transition-colors"
//         >
//           {loading ? 'Searching...' : 'Search'}
//         </button>
//       </div>
//       {error && <p className="mt-4 text-red-500">{error}</p>}
//       <ul className="mt-4 space-y-4">
//         {results.length > 0 ? (
//           results.map((resource) => (
//             <li key={resource.id} className="p-4 bg-white rounded-lg shadow">
//               <h3 className="text-xl font-bold text-blue-800">{resource.name}</h3>
//               <p className="text-gray-600">{resource.description}</p>
//             </li>
//           ))
//         ) : (
//           !loading && query && (
//             <p className="mt-4 text-gray-600">No resources found for "{query}".</p>
//           )
//         )}
//       </ul>
//     </div>
//   );
// }
