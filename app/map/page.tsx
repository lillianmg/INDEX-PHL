// app/map/page.tsx
'use client';

import dynamic from 'next/dynamic';


const InteractiveMap = dynamic(
  () => import('@/components/InteractiveMap'),
  {
    ssr: false,
    loading: () => <p>Loading map...</p>,
  }
);

export default function MapPage() {
  return (
    <div className="flex flex-col h-screen">

      {/* Map Area */}
      <div className="flex-grow">
        <InteractiveMap />
      </div>
    </div>
  );
}