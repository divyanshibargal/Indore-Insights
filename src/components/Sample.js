// import React, { useEffect, useRef } from 'react';
// import { MapContainer, Marker, TileLayer , Popup } from 'react-leaflet';
// import L from 'leaflet';
// import 'leaflet-routing-machine';

// const Sample = () => {
//   const mapRef = useRef(null);

//   useEffect(() => {
//     if (mapRef.current) {
//       const map = mapRef.current.leafletElement;

//       // Create a new routing machine instance
//       const routingMachine = L.Routing.control({
//         waypoints: [
//           L.latLng(22.71792, 75.833), // Start point
//           L.latLng(23.1765, 75.7885) // End point
//         ],
//         router: new L.Routing.osrm({
//           serviceUrl: 'https://route.openstreetmap.de/'
//         })
//       });

//       // Add the routing machine to the map
//       map.addControl(routingMachine);
//       const startMarker = L.marker([22.71792, 75.833]).addTo(map);
//       startMarker.bindPopup("Start point").openPopup();

//       // Add a marker to the end point
//       const endMarker = L.marker([23.1765, 75.7885]).addTo(map);
//       endMarker.bindPopup("End point").openPopup();
//     }
//   }, []);

//   return (
//     <MapContainer
//       center={[22.71792, 75.833]}
//       zoom={13}
//       style={{ height: '400px' }}
//       ref={mapRef}
//     >
//       <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
//       <Marker position={[22.71792, 75.833]}>
//         <Popup>
//          Indore city
//         </Popup>
//       </Marker>
//     </MapContainer>
//   );
// };

// export default Sample;
import React from 'react';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import Routing from './Routing';

function Sample() {
  const userLocation = [22.71792, 75.833]; // Replace with the user's current location
  const destination = [23.1765, 75.7885]; // Replace with the destination coordinates

  return (
    <div style={{ height: '100vh' }}>
      <MapContainer center={userLocation} zoom={10}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={[22.71792, 75.833]}>
        <Routing waypoints={[userLocation, destination]} />
        </Marker>
      </MapContainer>
    </div>
  );
}

export default Sample;