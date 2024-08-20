import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { BsChevronCompactDown } from 'react-icons/bs';

function Map() {
  const position = [-6.888888843197497, 107.6206316104626];
  const Red_MARKER = `data:image/svg+xml;utf8,${encodeURIComponent(`<?xml version="1.0" encoding="iso-8859-1"?>
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
width="48" height="48"
viewBox="0 0 48 48"
style=" fill:#11afee;"><path fill="#ad1dda" d="M44.212,18.135L26.68,2.993c-1.527-1.319-3.832-1.319-5.359,0L3.788,18.135	c-0.703,0.607-0.948,1.562-0.625,2.433C3.487,21.438,4.297,22,5.226,22H7v16c0,2.757,2.243,5,5,5h24c2.757,0,5-2.243,5-5V22h1.774	c0.929,0,1.738-0.562,2.062-1.433C45.16,19.697,44.915,18.742,44.212,18.135z"></path><path fill="#4484e6" d="M29,44c-0.553,0-1-0.448-1-1V33c0-0.551-0.448-1-1-1h-6c-0.552,0-1,0.449-1,1v10c0,0.552-0.447,1-1,1	s-1-0.448-1-1V33c0-1.654,1.346-3,3-3h6c1.654,0,3,1.346,3,3v10C30,43.552,29.553,44,29,44z"></path><path fill="#4484e6" d="M37,22H11c-0.553,0-1-0.448-1-1s0.447-1,1-1h26c0.553,0,1,0.448,1,1S37.553,22,37,22z"></path><path fill="#4484e6" d="M38,15.228c-0.553,0-1-0.448-1-1V5h-3v5.909c0,0.552-0.447,1-1,1s-1-0.448-1-1V5c0-1.103,0.897-2,2-2	h3c1.103,0,2,0.897,2,2v9.228C39,14.78,38.553,15.228,38,15.228z"></path></svg>
    `)}`;
  const BoatIcon = L.icon({
    iconUrl: Red_MARKER,
    iconSize: [50, 50],
    iconAnchor: [10, 10],
    popupAnchor: [0, 0],
  });
  return (
    <>
      <MapContainer
        style={{
          width: '100%',
          height: 'calc(100vh - 80px)',
          overflow: 'hidden',
          position: 'relative',
        }}
        center={position}
        zoom={55}
        scrollWheelZoom={false}
        Marker={true}
      >
        <TileLayer
          attribution=' <a href="https://ryza.inkara.id">ryza.inkara.id</a> '
          Popup={true}
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={position} icon={BoatIcon}>
          <Popup>
            This My Home Bro <br />
            Jl. sekeloa tengah no.123/152C
          </Popup>
        </Marker>
      </MapContainer>
    </>
  );
}

export default Map;
