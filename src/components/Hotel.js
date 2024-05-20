import React  , {useState , useRef , useMemo} from "react";
import Navbar1 from "./Navbar/Navbar1";
import Hotel from "../data/Hotels";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import "leaflet/dist/leaflet.css"
import './Map.css'
import { Icon, point } from 'leaflet'
import Mapdetail from "./Mapdetail";

export default function Hotels() {
  const [place , setPlace] = useState(Hotel)
  const [active , setactive] = useState('All')
  const mapRef = useRef(null)
  const markerRef = useRef([]);
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
if (category === 'All') {
    return Hotel;
  }
  return Hotel.filter((curData) => curData.rating >= category);
    //  let result = Hotel.filter((curdata)=>{
    //     return curdata.rating>=category
    //     })
    //     setPlace(result)
       
};

   const handlecatclick = (index)=>{
    setactive(index);
    setPlace(filterdata(index));
   }
   const filteredData = useMemo(() => filterdata(active), [active]);
  return (
    <>
      <Navbar1 />
      <div className='categories'>
     <ul className='categories-item'>
        <li onClick={()=>{
            setPlace(place);
            handlecatclick("All");
        }} className={active === "All" ? "activee" : ""} style={{paddingLeft : "5rem" , paddingRight: "5rem"}}>All</li>
        <li onClick={() => {
                  handlecatclick("4.0");
                }}
                className={active === "4.0" ? "activee" : ""}style={{paddingLeft : "5rem" , paddingRight: "5rem"}}> &gt; 4.0</li>
        <li  onClick={() => {
                  handlecatclick("3.0");
                }}
                className={active === "3.0" ? "activee" : ""}style={{paddingLeft : "5rem" , paddingRight: "5rem"}}>&gt; 3.0</li>
        <li  onClick={() => {
                  handlecatclick("2.0");
                }}
                className={active === "2.0" ? "activee" : ""}style={{paddingLeft : "5rem" , paddingRight: "5rem"}}>&gt; 2.0</li>
     </ul>
   </div>
   <main>
                <div className='list' >
                    <div className='head text-center'>
                        <h4 style={{backgroundColor : "#FFC5C5" , padding : "0.5rem" }}>Hotels</h4>
                    </div>
                    <div className='text-center'>
                        {filteredData.map((val) => {
                            return <Mapdetail key={val.id} val={val} flyToLocation={flyToLocation}  /> 
                        })}
                    </div>
                </div>

                <MapContainer center={[22.71792, 75.833]} zoom={12} style={{ height: "100vh" }} ref={mapRef}> 
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors Indoreinsights'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {filteredData.map((marker ,index) => (
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
