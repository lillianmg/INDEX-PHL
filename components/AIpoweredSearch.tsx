// components/AIpoweredSearch.tsx
"use client";

import { useState, useEffect, useRef } from "react"; // Import useEffect and useRef
import { useRouter } from "next/navigation";
// Import the local JSON data again for client-side filtering as the user types
import searchData from "@/data/search.json";
import { Var, T } from "gt-next";

interface Resource {
	id: string;
	name: string;
	description: string;
	// Add other properties if needed based on your JSON structure later
}

export default function AIpoweredSearch() {
	const [query, setQuery] = useState<string>("");
	const [suggestions, setSuggestions] = useState<Resource[]>([]); // State for autocomplete suggestions
	const [showSuggestions, setShowSuggestions] = useState<boolean>(false); // State to control dropdown visibility
	const router = useRouter();
	const searchContainerRef = useRef<HTMLDivElement>(null); // Ref for the search container

	// Handle clicks outside the search container to hide suggestions
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				searchContainerRef.current &&
				!searchContainerRef.current.contains(event.target as Node)
			) {
				setShowSuggestions(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	const handleSearch = () => {
		// Only navigate if the query is not empty
		if (query.trim()) {
			// Encode the query for the URL and navigate to the results page
			router.push(`/results?query=${encodeURIComponent(query.trim())}`);
			setShowSuggestions(false); // Hide suggestions after search
		}
	};

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const inputValue = e.target.value;
		setQuery(inputValue); // Update the query state immediately

		if (inputValue.trim()) {
			// Filter suggestions based on the current input value
			const lowerCaseQuery = inputValue.toLowerCase();
			const filteredSuggestions = searchData
				.filter(
					(resource) =>
						resource.name.toLowerCase().includes(lowerCaseQuery) ||
						resource.description.toLowerCase().includes(lowerCaseQuery),
				)
				.slice(0, 5); // Limit to, say, 5 suggestions

			setSuggestions(filteredSuggestions);
			setShowSuggestions(true); // Show suggestions if there's input
		} else {
			setSuggestions([]); // Clear suggestions if input is empty
			setShowSuggestions(false); // Hide suggestions
		}
	};

	const handleSuggestionClick = (suggestion: Resource) => {
		setQuery(suggestion.name); // Set input value to suggestion name
		setSuggestions([]); // Clear suggestions
		setShowSuggestions(false); // Hide suggestions
		// Optionally, trigger a full search for the selected suggestion:
		router.push(`/results?query=${encodeURIComponent(suggestion.name)}`);
	};

	// Allow searching when Enter key is pressed
	const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Enter") {
			handleSearch();
		}
	};

	return (
		// Added relative positioning to the container for the absolute positioned suggestions dropdown
		<T id="components.aipoweredsearch.0">
			<div
				className="w-full max-w-2xl mx-auto relative"
				ref={searchContainerRef}
			>
				{" "}
				{/* Added ref */}
				<div className="flex flex-col sm:flex-row items-center">
					<input
						type="text"
						placeholder="Search for resources..."
						value={query}
						onChange={handleInputChange} // Use the new input change handler
						onKeyPress={handleKeyPress}
						onFocus={() => {
							if (query.trim()) setShowSuggestions(true);
						}} // Show suggestions when input is focused if there's text
						className="flex-1 px-4 py-3 rounded-l-lg border border-gray-300 shadow text-black font-bold focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-auto z-10" // Added z-index
					/>
					<button
						onClick={handleSearch}
						className="px-4 py-3 rounded-r-lg bg-[#1c398e] text-white font-medium hover:bg-[#162f6c] transition-colors flex-shrink-0 mt-2 sm:mt-0 sm:ml-[-1px] shadow z-10" // Added z-index
					>
						Search
					</button>
				</div>
				{/* Suggestions Dropdown */}
				<Var>
					{showSuggestions && suggestions.length > 0 && (
						<ul className="absolute top-full left-0 right-0 bg-white border border-gray-300 rounded-md shadow-lg mt-1 z-20 max-h-60 overflow-y-auto">
							{" "}
							{/* Added styling */}
							{suggestions.map((suggestion) => (
								<li
									key={suggestion.id}
									onClick={() => handleSuggestionClick(suggestion)}
									className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-800"
								>
									{/* Display suggestion name and a snippet of description */}
									<h3 className="font-semibold text-sm">{suggestion.name}</h3>
									<p className="text-xs text-gray-600 truncate">
										{suggestion.description}
									</p>{" "}
									{/* Use truncate for long descriptions */}
								</li>
							))}
						</ul>
					)}
				</Var>
			</div>
		</T>
	);
}
