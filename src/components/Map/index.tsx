import 'leaflet/dist/leaflet.css'

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

type Place = {
  id: string
  name: string
  location: {
    latitude: number
    longitude: number
  }
}

type MapProps = {
  places: Place[]
}

const Map = ({ places }: MapProps) => {
  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={3}
      style={{ height: '100vh', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {places.map(({ id, name, location }) => {
        const { latitude, longitude } = location

        return (
          <Marker
            key={`place-${id}`}
            position={[latitude, longitude]}
            title={name}
          >
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        )
      })}
    </MapContainer>
  )
}

export default Map
