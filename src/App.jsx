import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import HeatmapLayer from "react-leaflet-heat-layer";
import addressPoints from "./realworld.10000.js"
import './App.css'

function App() {
    return <MapContainer center={[1.509280, 103.851718]} zoom={13} scrollWheelZoom={true} className='h-screen'>
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[1.509280, 103.851718]}>
        </Marker>
        <HeatmapLayer latlngs={addressPoints.map((p) => [p[0], p[1]])} />
    </MapContainer>
}

export default App
