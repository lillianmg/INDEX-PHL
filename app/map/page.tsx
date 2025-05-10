// app/map/page.tsx
'use client';

import { useEffect } from 'react';
import dynamic from 'next/dynamic';

const InteractiveMap = dynamic(() => import('@/components/InteractiveMap'), {
  ssr: false,
  loading: () => <p>Loading map...</p>,
});

export default function MapPage() {
  useEffect(() => {
    const enterFullScreen = () => {
      const elem = document.documentElement;
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if ('webkitRequestFullscreen' in elem) { /* Safari */
        (elem as HTMLElement & { webkitRequestFullscreen: () => void }).webkitRequestFullscreen();
      } else if ('msRequestFullscreen' in elem) { /* IE11 */
        (elem as HTMLElement & { msRequestFullscreen: () => void }).msRequestFullscreen();
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
