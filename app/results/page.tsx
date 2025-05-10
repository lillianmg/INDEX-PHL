// app/results/page.tsx
"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import searchData from "@/data/search.json";
import { Var, T } from "gt-next";

interface Resource {
  id: string;
  name: string;
  description: string;
}

export default function ResultsPage() {
  // Removed the 'view' state and setView
  const [searchResults, setSearchResults] = useState<Resource[]>([]); // State to hold search results

  const searchParams = useSearchParams(); // Get search parameters from the URL
  const query = searchParams.get("query") || ""; // Get the 'query' parameter

  // Effect to perform search when the component mounts or query changes
  useEffect(() => {
    if (!query.trim()) {
      setSearchResults([]); // Clear results if query is empty
      return;
    }

    // Perform the search filtering on the local data
    const lowerCaseQuery = query.toLowerCase();
    const filteredResults = searchData.filter(
      (resource) =>
        resource.name.toLowerCase().includes(lowerCaseQuery) ||
        resource.description.toLowerCase().includes(lowerCaseQuery),
    );

    setSearchResults(filteredResults); // Update the results state
  }, [query]); // Re-run effect when the query changes

  return (
    <T id="results.page.3">
      <section className="min-h-screen p-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Search Results
            <Var>
              {query && (
                <T id="results.page.0">
                  <span className="text-gray-600">
                    {" "}
                    for &quot;<Var>{query}</Var>&quot;
                  </span>
                </T>
              )}
            </Var>
          </h1>

          {/* Removed the Toggle Buttons div */}

          {/* Content Area - Only List View */}
          <div>
            {/* Display actual search results or messages */}
            <Var>
              {query.trim() === "" ? (
                <T id="results.page.1">
                  <p className="text-gray-700">Please enter a search query.</p>
                </T>
              ) : searchResults.length > 0 ? (
                <ul className="mt-4 space-y-4">
                  {searchResults.map((resource) => (
                    // Display each search result
                    <li
                      key={resource.id}
                      className="p-4 bg-gray-100 rounded shadow"
                    >
                      <h3 className="text-xl font-bold text-blue-800">
                        {resource.name}
                      </h3>
                      <p className="text-gray-600">{resource.description}</p>
                      {/* Add other resource details here later */}
                    </li>
                  ))}
                </ul>
              ) : (
                <T id="results.page.2">
                  {/* Message for no results found */}
                  <p className="text-gray-700">
                    No resources found for &quot;<Var>{query}</Var>&quot;.
                  </p>
                </T>
              )}
            </Var>
          </div>
        </div>
      </section>
    </T>
  );
}
