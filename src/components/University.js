import React, { useState , useRef } from "react";
import Navbar1 from "./Navbar/Navbar1";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { Icon, point } from 'leaflet'
import "./Map.css";
import "leaflet/dist/leaflet.css"
import Education from "../data/Education";
import Edudetail from "./Edudetail";
 const University = () => {
  const [place, setPlace] = useState(Education);
  const mapRef = useRef(null);
  const markerRef = useRef([])
  const customIcon = new Icon({
      iconUrl: require("../components/images/marker.png"),
      iconSize: [38, 38]
  })
  const flyToLocation = (data) => {
      const lat = data.coordinates[0];
      const lng = data.coordinates[1];
      mapRef.current.flyTo([lat,lng], 17, {
          duration: 3
      });
      const index = place.findIndex(Education => Education.id === data.id)
      const mark = markerRef.current[index];
      if(mark){
          mark.openPopup();
             
      }
     
     
  };
  return (
   <>
   <Navbar1/>
   <main style={{top :"6rem"}}>
                <div className='list' >
                    <div className='head text-center'>
                        <h2>Academia</h2>
                    </div>
                    <div className='text-center'>
                        {place.map((val) => {
                            return <Edudetail key={val.id} val={val} flyToLocation={flyToLocation}  /> // Pass the flyToHospital function as a prop
                        })}
                    </div>

                </div>

                <MapContainer center={[22.71792, 75.8333]} zoom={12} style={{ height: "100vh" }} ref={mapRef}> 
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors Indoreinsights'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {place.map((marker , index) => (
                        <Marker ref={ref=> markerRef.current[index] = ref} position={marker.coordinates} icon={customIcon} key={marker.id} 
                        // eventHandlers={{ // Add eventHandlers to Marker
                        //     click: () => {
                        //         flyToLocation(marker); // Call flyToHospital function with marker data
                        //     }
                        // }} 
                        >
                            <Popup offset={point(0, -10)}>
                                <div>
                                    <h6 className='fw-bold'>{marker.name}</h6>
                                    <p>{marker.address}</p>
                                    <p>{marker.website}</p>
                                    <div className="phone-number">
                                        <a href={`tel:${marker.phone}`}>{marker.phone}</a>
                                    </div>
                                </div>
                            </Popup>
                        </Marker>
                    ))}
                </MapContainer>

            </main>
   </>
  )
}
export default University;