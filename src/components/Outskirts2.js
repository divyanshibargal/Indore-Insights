import React, { useState , useRef} from 'react'
import outskirts from '../data/Outskirts'
import Navbar1 from './Navbar/Navbar1';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import "leaflet/dist/leaflet.css"
import './Map.css'
import { Icon, point } from 'leaflet'
import Outdetail from './Outdetail';


const Outskirts = () => {
    const  [place , setPlace] = useState(outskirts);
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
                        <h2 style={{backgroundColor : "orange"}}>Outskirts</h2>
                    </div>
                    <div className='text-center'>
                        {place.map((val) => {
                            return <Outdetail key={val.id} val={val} flyToLocation={flyToLocation}  /> // Pass the flyToHospital function as a prop
                        })}
                    </div>

                </div>

                <MapContainer center={[22.9734, 78.6569]} zoom={7} style={{ height: "100vh" }} ref={mapRef}> 
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors Indoreinsights'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {place.map((marker, index) => (
                        <Marker  ref={ref => markerRef.current[index] = ref} position={marker.coordinates} icon={customIcon} key={marker.id} 
                        eventHandlers={{ click: () => {flyToLocation(marker); }
                        }} >
                            <Popup offset={point(0, -10)}  >
                                <div>
                                    <h6 className='fw-bold'>{marker.name}</h6>
                                    <p>{marker.address}</p>
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

export default Outskirts
