import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import 'leaflet-defaulticon-compatibility'
import React, { useState } from 'react'
import { LatLng, LatLngExpression, LatLngTuple } from 'leaflet'
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from 'react-leaflet'

const MarkerPosition = () => {
  const [position, setPosition] = useState<LatLng | null>(null)

  const map = useMapEvents({
    click: (e) => {
      setPosition(e.latlng)
    },

    locationfound(e) {
      map.flyTo(e.latlng, map.getZoom())
    },
  })

  return (
    <>
      {position && (
        <Marker position={position}>
          <Popup>{position.toString()}</Popup>
        </Marker>
      )}
    </>
  )
}

type MapProps = {
  posx: LatLngExpression | LatLngTuple
  zoom?: number
}

const Map = (Map: MapProps) => {
  return (
    <MapContainer
      center={Map.posx}
      zoom={Map.zoom}
      scrollWheelZoom={true}
      wheelPxPerZoomLevel={100}
      style={{ height: '100vh', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MarkerPosition />
    </MapContainer>
  )
}

export default Map
