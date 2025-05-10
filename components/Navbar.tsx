'use client'

import Link from "next/link";
import Image from "next/image";

import { T, useLocale, useSetLocale } from "gt-next/client";

export default function Navbar() {
	const locale = useLocale(); // Get the current locale
	const setLocale = useSetLocale(); // Get the function to set the locale

	const handleLocaleChange = (newLocale: string) => {
		setLocale(newLocale); // Set the new locale
	};

	// Define the supported locales and their display names
	const supportedLocales = [
		{ code: 'en', name: 'English' },
		{ code: 'es', name: 'Español' },
		{ code: 'uk', name: 'Українська' },
	];

	return (
		// The T tag might have had an auto-generated ID, ensure it's still there or manage it as per gt-next docs
		<T id="components.navbar.0">
			<nav className="w-full bg-[#1c398e] px-6 py-4">
				<div className="flex flex-row items-center gap-6 w=full">
					{/* Left: Logo + Navigation Links */}
					<Link href="/">
						<Image
							src="/logo.png"
							alt="IndexPHL Logo" // Alt text might need translation too, handle with <T> or dictionaries later
							width={50}
							height={50}
							className="object-contain inline-block"
						/>
					</Link>
					{/* Navigation Links - Text is wrapped by the parent <T> tag */}
					<Link
						href="/categories"
						className="text-white font-medium hover:underline"
					>
						Categories {/* This text is inside <T> and will be translated */}
					</Link>
					<Link href="/map" className="text-white font-medium hover:underline">
						Map {/* This text is inside <T> and will be translated */}
					</Link>
					<Link
						href="/submit"
						className="text-white font-medium hover:underline"
					>
						Submit a Resource {/* This text is inside <T> and will be translated */}
					</Link>
					<Link
						href="/about"
						className="text-white font-medium hover:underline"
					>
						About {/* This text is inside <T> and will be translated */}
					</Link>

					{/* Right: Language Toggle Buttons - ml-auto pushes this to the right */}
					{/* Wrap the toggle buttons in a div */}
					<div className="ml-auto flex items-center space-x-2"> {/* Added space-x-2 for spacing */}
						{supportedLocales.map((supportedLocale) => (
							<button
								key={supportedLocale.code}
								onClick={() => handleLocaleChange(supportedLocale.code)}
								// Add active state styling
								className={`text-sm font-medium ${locale === supportedLocale.code
									? 'text-yellow-400 underline' // Highlight active locale
									: 'text-white hover:underline'
									}`}
							>
								{supportedLocale.name} {/* Display language name */}
							</button>
						))}
					</div>
				</div>
			</nav>
		</T>
	);
}