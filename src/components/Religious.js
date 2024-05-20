import React  , {useState , useRef ,useMemo}from 'react'
import temple from '../data/Temple'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import Navbar1 from './Navbar/Navbar1'
import "leaflet/dist/leaflet.css"
import './Map.css'
import { Icon, point } from 'leaflet'
import TempleDetail from './TempleDetail'
const Religious = () => {

    const [place , setPlace] = useState(temple);
    const [active , setactive] = useState('All')
    const mapRef = useRef(null)
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
    const filterdata = (category)=>{
    //     let result = place.filter((curdata)=>{
    //     return curdata.cat===ele
    //     })
    //     setPlace(result)
    //    }
    if (category === 'All') {
        return temple;
      }
      return temple.filter((curData) => curData.cat === category);
    };
    
       const handlecatclick = (index)=>{
        setactive(index);
        setPlace(filterdata(index));
       }
       const filtereddata = useMemo(() => filterdata(active), [active]);
  return (
   <>
   <Navbar1/>
   <div className='categories'>
     <ul className='categories-item'>
        <li onClick={()=>{
            setPlace(place);
            handlecatclick("All");
        }} className={active === "All" ? "activee" : ""} >All</li>
        <li onClick={() => {
                //   filterdata("hindu");
                  handlecatclick("hindu");
                }}
                className={active === "hindu" ? "activee" : ""}>Hindu Temples</li>
        <li  onClick={() => {
                //   filterdata("jain");
                  handlecatclick("jain");
                }}
                className={active === "jain" ? "activee" : ""}>Jain Temples</li>
        <li  onClick={() => {
                //   filterdata("mosque");
                  handlecatclick("mosque");
                }}
                className={active === "mosque" ? "activee" : ""}>Mosques</li>
        <li onClick={() => {
                //   filterdata("gurudwara");
                  handlecatclick("gurudwara");
                }}
                className={active === "gurudwara" ? "activee" : ""} >Gurudwaras</li>
        <li  onClick={() => {
                //   filterdata("chruch");
                  handlecatclick("chruch");
                }}
                className={active === "chruch" ? "activee" : ""}>Chruch</li>
     </ul>
   </div>
   <main>
                <div className='list' >
                    <div className='head text-center'>
                        <h4 style={{backgroundColor : "#a0c4ff" , padding : "0.7rem" }}>Religious Places</h4>
                    </div>
                    <div className='text-center'>
                        {filtereddata.map((val) => {
                            return <TempleDetail key={val.id} val={val} flyToLocation={flyToLocation}  /> 
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
                                    <p>Rush Hours : {marker.rush}</p>
                                </div>
                            </Popup>
                        </Marker>
                    ))}
                </MapContainer>

            </main>
   
   
   
   
   
   </>
  )
}

export default Religious
