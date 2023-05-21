import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import L from 'leaflet';
import 'leaflet/dist/leaflet.css'
import Title from '@/components/global/Title';

export default function Map({ position, t }) {
  // set custom marker icon
  const icon = L.icon({
    iconUrl: "/assets/marker.png",
    iconSize:[56, 56]
  });

  return (
    <>
      <Title title={t('saller location')} />
      <MapContainer className='w-full h-72 mb-8 rounded-md' zoomControl={false}  center={position} zoom={10} scrollWheelZoom={false}>
      <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} icon={icon}>
      </Marker>
      </MapContainer>
    </>
  )
}