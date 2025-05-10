// components/InteractiveMap.tsx
'use client';

import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

import 'leaflet/dist/leaflet.css';

export default function InteractiveMap() {
  const [position, setPosition] = useState<{ lat: number; lng: number } | null>(null);

  useEffect(() => {
    delete (L.Icon.Default.prototype as unknown as { _getIconUrl?: () => void })._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
      iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
      shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
    });

    const fetchData = async () => {
      try {
        const response = await fetch('https://wanderdrone.appspot.com/');
        const data = await response.json();
        if (data && data.geometry && data.geometry.coordinates) {
          const [lng, lat] = data.geometry.coordinates;
          setPosition({ lat, lng });
        } else {
          console.error('Invalid data structure from wanderdrone:', data);
        }
      } catch (error) {
        console.error('Error fetching live data:', error);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 5000);
    return () => clearInterval(interval);
  }, []);

  const defaultCenter = { lat: 39.9526, lng: -75.1652 };

  return (
    <MapContainer
      center={position || defaultCenter}
      zoom={13}
      scrollWheelZoom={true}
      className="w-full h-full rounded-lg shadow-md"
      style={{ height: '500px', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {position && (
        <Marker position={position}>
          <Popup>
            Current Location:
            <br />
            Lat: {position.lat.toFixed(4)}, Lng: {position.lng.toFixed(4)}
          </Popup>
        </Marker>
      )}
    </MapContainer>
  );
}
