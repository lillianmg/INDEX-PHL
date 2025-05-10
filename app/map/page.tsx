// app/map/page.tsx
"use client";

import { useEffect } from "react";
import dynamic from "next/dynamic";
import { T } from "gt-next";

const InteractiveMap = dynamic(() => import("@/components/InteractiveMap"), {
	ssr: false,
	loading: () => (
		<T id="map.page.0">
			<p>Loading map...</p>
		</T>
	),
});

export default function MapPage() {
	useEffect(() => {
		const enterFullScreen = () => {
			const elem = document.documentElement;
			if (elem.requestFullscreen) {
				elem.requestFullscreen();
			} else if ("webkitRequestFullscreen" in elem) {
				/* Safari */
				(
					elem as HTMLElement & { webkitRequestFullscreen: () => void }
				).webkitRequestFullscreen();
			} else if ("msRequestFullscreen" in elem) {
				/* IE11 */
				(
					elem as HTMLElement & { msRequestFullscreen: () => void }
				).msRequestFullscreen();
			}
		};

		enterFullScreen();
	}, []);

	return (
		<div className="flex flex-col h-screen">
			<div className="flex-grow">
				<InteractiveMap />
			</div>
		</div>
	);
}
