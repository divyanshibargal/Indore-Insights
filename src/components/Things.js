import React, { useState , useRef} from 'react'
import Navbar1 from './Navbar/Navbar1';
import Thing from "../data/Thingstodo";
import Pdetail from './Pdetail'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import "leaflet/dist/leaflet.css"
import './Map.css'
import { Icon, point } from 'leaflet'
const Things = () => {
   
    const  [place , setPlace] = useState(Thing);
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
        const index = place.findIndex(place => place.id === data.id);
        const mark = markerRef.current[index];
        if(mark){
            mark.openPopup();     
        }
    };

  return (
    <>
    <Navbar1 />
             <main style={{top:"6rem"}}>
                 <div className='list' >
                     <div className='head text-center'>
                         <h4 style={{backgroundColor : "#6da8a3" , padding : "0.7rem"}}>Things to do</h4>
                     </div>
                     <div className='text-center'>
                         {place.map((val) => {
                             return <Pdetail key={val.id} val={val} flyToLocation={flyToLocation}  /> 
                         })}
                     </div>
 
                 </div>
 
                 <MapContainer center={[22.71792, 75.833]} zoom={10} style={{ height: "100vh" }} ref={mapRef}> 
                     <TileLayer
                         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors Indoreinsights'
                         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                     />
                     {place.map((marker ,index) => (
                         <Marker  ref={ref => markerRef.current[index] = ref} position={marker.coordinates} icon={customIcon} key={marker.id} 
                        /* eventHandlers={{ // Add eventHandlers to Marker
                             click: () => {
                                 flyToLocation(marker); // Call flyToLocation function with marker data
                             }
                         }} */>
                             <Popup offset={point(0, -8)}  >
                             <div>
                                     <h6 className='fw-bold'>{marker.name}</h6>
                                     <p>{marker.address}</p>
                                     <p className='mx-2'> {marker.rating} <i className="fa-solid fa-star" style={{color: "#FFD43B" ,}}></i></p>
                                 </div>
                             </Popup>
                         </Marker>
                     ))}
                 </MapContainer>
 
             </main>
         </>
  )
}

export default Things
