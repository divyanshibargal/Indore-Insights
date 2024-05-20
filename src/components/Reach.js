import React from 'react'
import gandhihall from './images/gandhihall.jpg'
import Navbar1 from './Navbar/Navbar1'
export default function Reach() {
    return (
        <>
            <Navbar1 />
            <div className='container'>
                <div className='secondplace'>
                    <div className='fimage'>
                        <img src={gandhihall} className='img' alt='...' />
                    </div>
                    <div className='secondtext te'> <h2 className='heading '>How to Reach Indore </h2>
                        <h3> <i className='fas fa-map-marker-alt'></i> Indore , Madhya Pradesh , India </h3>
                        <p>Indore is well connected to the rest of India by rail, road and air. Regular rail and bus services ply to and fro the city of Indore. The nearest airport here is the Devi Ahilya Bai Holkar Airport, which is 7 km. away from the city centre, accessible in the fastest time via Airport Road.</p>

                    </div>
                </div>
            </div>
            <div className='container my-5'>
                <h2> Most frequently searched routes to Indore</h2>
                <table className=" table table-hover my-5">
                    <thead>
                        <tr>
                            <th scope="col">Route Name</th>
                            <th scope="col">Distance</th>
                            <th scope="col">Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th > Mumbai to Indore</th>
                            <td>583 KM</td>
                            <td>9 hours 31 mins</td>
                        </tr>
                        <tr>
                           
                            <th> Pune to Indore</th>
                            <td>606 KM</td>
                            <td>11 hours 8 mins</td>
                        </tr>
                        <tr>
                            <th>Delhi to Indore</th>
                            <td >845 KM</td>
                            <td>14 hours 37 mins</td>
                        </tr>
                        <tr>
                            <th>Ahmedabad to Indore</th>
                            <td >397 KM</td>
                            <td>7 hours 36 mins</td>
                        </tr>
                        <tr>
                            <th>Chennai to Indore</th>
                            <td >1492 KM</td>
                            <td>1 day 1 hour</td>
                        </tr>
                        <tr>
                            <th>Bangalore to Indore</th>
                            <td >1416 KM</td>
                            <td>22 hours 55 mins</td>
                        </tr>
                        <tr>
                            <th>Hyderabad to Indore</th>
                            <td >867 KM</td>
                            <td>16 hours 21 mins</td>
                        </tr>
                        <tr>
                            <th>Kolkata to Indore</th>
                            <td >1572 KM</td>
                            <td>1 day 4 hours</td>
                        </tr>
                        <tr>
                            <th>Goa to Indore</th>
                            <td >1023 KM</td>
                            <td>16 hours 45 mins</td>
                        </tr>
                    </tbody>
                </table>
               <div className='container'>
                <h3>How to reach Indore by flight</h3>
                <p style={{ marginTop : "2.5rem",marginRight : "4rem" , fontSize : "1.3rem"}}>Regular flight services ply to and fro Indore. 7 km away from the main city is the nearest airport, Devi Ahilya Bai Holkar Airport, which serves regular domestic flights to her customers.</p>

                <p style={{fontSize : "1.2rem", marginTop :"2.2rem", marginBottom :"2.2rem"}}><strong>Nearest Airport</strong> :  Devi Ahilyabai Holkar Airport (IDR)</p>
                {/* <a style={{textDecoration : "underlinex" , color : "black" , fontSize : "1.2rem" ,}}href='https://www.air.irctc.co.in/' target='_blank' rel="noopener noreferrer"><strong>Book your Flights to Indore Now!</strong></a> */}

                <a className="btn btn-primary my-4" href='https://www.air.irctc.co.in/' target='_blank'
                rel="noreferrer" 
                style={{  fontSize : "1.2rem" ,}} 
                role="button"><strong>Book your Flights to Indore Now!</strong></a>
                   

                <h3 style={{marginTop : "5rem" }}>How to reach Indore by road</h3>
                <p style={{fontSize : "1.3rem", marginTop : "2.5rem" , marginRight : "4rem"}}>Regular bus services ply to and fro Indore. Buses, in a range from affordable to slightly expensive rates, are available from places like New Delhi, Bhopal, Jaipur as the list goes on. You can also take a shared taxi or cab for the same route.</p>

                {/* <a style={{textDecoration : "underlinex" , color : "black" , fontSize : "1.2rem" ,}} href='https://www.bus.irctc.co.in/home' target='_blank' rel="noopener noreferrer"><strong>Book your Bus ride to Indore Now  !</strong></a> */}

                <a className="btn btn-primary my-4" href="https://www.bus.irctc.co.in/home" target='_blank'
                rel="noreferrer"
                style={{  fontSize : "1.2rem" ,}} 
                role="button"><strong>Book your Bus ride to Indore Now  !</strong></a>


                <h3 style={{marginTop : "5rem"}}>How to reach Indore by Train</h3>
                <p style={{fontSize : "1.3rem", marginTop : "2.5rem" , marginRight : "4rem"}}>Regular rail services ply to and fro Indore. <strong>Indore Junction railway station</strong> is the principal station that connects Indore to the rest of India via railways.</p>
             
                
                <a className="btn btn-primary my-4" href="https://www.irctc.co.in/nget/train-search" target='_blank'
                rel="noreferrer"
                style={{  fontSize : "1.2rem" ,}} 
                role="button"><strong>Book your Train to Indore Now!</strong></a>


                {/* <a style={{textDecoration : "underlinex" , color : "black" , fontSize : "1.2rem" ,}}href='https://www.irctc.co.in/nget/train-search' target='_blank' rel="noopener noreferrer"><strong>Book your Train to Indore Now!</strong></a> */}

                <h3 style={{marginTop : "5rem" }}>Local transport in Indore</h3>
                <p style={{fontSize : "1.3rem", marginTop : "2.5rem" , marginRight : "4rem"}}>Indore has a highly efficient public transport system and travelling within the city can be easily facilitated by buses and auto-rickshaws. Tourists can also hail cabs to cover all sightseeing spots together comfortably.</p>

                <a className="btn btn-primary my-4" href='https://chalo.com/indore' target='_blank'
                rel="noreferrer"
                style={{  fontSize : "1.2rem" ,}} 
                role="button"><strong>Get your tickets from here!</strong></a>
                </div>
            </div>

        </>
    )
}
