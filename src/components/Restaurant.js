import React, { useState , useRef , useMemo } from "react";
import Navbar1 from "./Navbar/Navbar1";
import Restaurant from "../data/Restaurant";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { Icon, point } from 'leaflet'
import "./Map.css";
import "leaflet/dist/leaflet.css"
import Mapdetail from "./Mapdetail";

export default function Restaurants() {
  const [place, setPlace] = useState(Restaurant);
  const [Aactive, setactive] = useState("All");
  const mapRef = useRef(null);
  const markerRef =  useRef([]);
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
const filterdata = (category)=>{
//     let result = place.filter((curdata)=>{
//     return curdata.cat===ele
//     })
//     setPlace(result)
//    }
if (category === 'All') {
    return Restaurant;
  }
  return Restaurant.filter((curData) => curData.cat === category);
};

   const handlecatclick = (index)=>{
    setactive(index);
    setPlace(filterdata(index));
   }
   const filtereddata = useMemo(() => filterdata(Aactive), [Aactive]);
  return (
    <>
      <Navbar1 />
      <div className='categories'>
     <ul className='categories-item'>
        <li onClick={()=>{
            setPlace(place);
            handlecatclick("All");
        }} className={Aactive === "All" ? "activee" : ""} style={{paddingLeft : "4rem" , paddingRight: "4rem"}}>All</li>
        <li onClick={() => {
                  handlecatclick("Veg");
                }}
                className={Aactive === "Veg" ? "activee" : ""}style={{paddingLeft : "4rem" , paddingRight: "4rem"}}> Pure Veg</li>
        <li  onClick={() => {
                  handlecatclick("LocalEats");
                }}
                className={Aactive === "LocalEats" ? "activee" : ""}style={{paddingLeft : "4rem" , paddingRight: "4rem"}}>Local Eats</li>
        <li  onClick={() => {
                  handlecatclick("Non-Veg");
                }}
                className={Aactive === "Non-Veg" ? "activee" : ""}style={{paddingLeft : "4rem" , paddingRight: "4rem"}}>Non-Veg</li>
     </ul>
   </div>
   <main>
                <div className='list' >
                    <div className='head text-center'>
                        <h4 style={{backgroundColor : "#FED480" , padding : "0.4rem" }}>Restaurants</h4>
                    </div>
                    <div className='text-center'>
                        {filtereddata.map((val) => {
                            return <Mapdetail key={val.id} val={val} flyToLocation={flyToLocation}  /> 
                        })}
                    </div>

                </div>

                <MapContainer center={[22.71792, 75.833]} zoom={12} style={{ height: "100vh" }} ref={mapRef}> 
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors Indoreinsights'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {filtereddata.map((marker ,index) => (
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
                                    <p> {marker.rating} <i className="fa-solid fa-star" style={{color: "#FFD43B" ,}}></i></p>
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
  );
}
