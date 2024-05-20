import React from 'react'
import { useState , useEffect} from 'react'
import Navbar1 from './Navbar/Navbar1'
import LaalBagh from './images/Laalbagh.jpg'
import WeatherCard from './WeatherCard';

export default function Time() {
  const[data , setData] = useState([]);
    const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'd3691571c8msh6442b0b5e277e38p199764jsn7fb44f099b0a',
                'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
            }
        };

useEffect(()=>{
    const fetchData = async() =>{
   await  fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Indore', options)
        .then(response => response.json())
        .then(response => {
            setData(response);
            console.log(response)})
        }
        fetchData();
}, [])
  return (
    <>
     <Navbar1 />
            <div className='container my-5'>
                <div className='secondplace'>
                    <div className='fimage'>
                        <img src={LaalBagh} className='img' alt='...' />
                    </div>
                    <div className='secondtext '> <h2 className='heading '>Best Time To Visit Indore </h2>
                        <h3> <i className='fas fa-map-marker-alt'></i> Indore , Madhya Pradesh , India </h3>
                        <p style={{marginTop : "2.5rem"}}>October to March are the best months to visit Indore. July to September is also a good time to visit as the temperature cools down due to showers, but rains could hamper your sightseeing and travel plans. Summers must be avoided due to the scorching heat.</p>

                    </div>
                </div>
            </div>
           <WeatherCard WeatherData={data}/> 
            <div className='container '>
                <h2 style={{marginTop : "5rem"}}> Monthly Weather in Indore</h2>
                <table className= "table table-hover my-5">
                    <thead>
                        <tr>
                            <th scope="col">Month</th>
                            <th scope="col">High / Low &deg; C</th>
                            <th scope="col">Rain</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th > January</th>
                            <td>22 &deg; / 10 &deg;</td>
                            <td>0 days</td>
                        </tr>
                        <tr>
                           
                            <th> Feburary</th>
                            <td>29 &deg; / 13 &deg;</td>
                            <td>0 days</td>
                        </tr>
                        <tr>
                            <th>March</th>
                            <td >32 &deg; / 16 &deg;</td>
                            <td>0 days</td>
                        </tr>
                        <tr>
                            <th>April</th>
                            <td >37 &deg; / 22 &deg;</td>
                            <td>1-2 days</td>
                        </tr>
                        <tr>
                            <th>May</th>
                            <td >46 &deg; / 29 &deg;</td>
                            <td>3-4 days</td>
                        </tr>
                        <tr>
                            <th>June</th>
                            <td >40 &deg; / 28 &deg;</td>
                            <td>13-14 days</td>
                        </tr>
                        <tr>
                            <th>July</th>
                            <td >38 &deg; / 27 &deg;</td>
                            <td>30 days</td>
                        </tr>
                        <tr>
                            <th>August</th>
                            <td >30 &deg; / 22 &deg;</td>
                            <td>27-28 days</td>
                        </tr>
                        <tr>
                            <th>September</th>
                            <td >28 &deg; / 21 &deg;</td>
                            <td>27-29 days</td>
                        </tr>
                        <tr>
                            <th>October</th>
                            <td >25 &deg; / 19 &deg;</td>
                            <td>12-14 days</td>
                        </tr>
                        <tr>
                            <th>November</th>
                            <td >25 &deg; / 16 &deg;</td>
                            <td>5-6 days</td>
                        </tr>
                        <tr>
                            <th>December</th>
                            <td >23 &deg; / 12 &deg;</td>
                            <td>0 days</td>
                        </tr>

                    </tbody>
                </table>


                <h2 className='heading'>
                    More about Best Time to Travel to Indore
                </h2>
                <div className="accordion my-4" id="accordionExample" >
                <div className="accordion-item" >
                    <h2 className="accordion-header" id="headingOne" >
                        <button className='accordion-button' type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <strong>Indore in Winter (October - Feburary)</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" >
                        This is an ideal season for a visit to Indore, with pleasant climate and royal ambience waiting for your arrival. November onwards, the travel influx increases steadily as this is the peak season of travel. Although the fog drops down in December, in reality, the temperatures rarely go below zero.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" >
                    <h2 className="accordion-header" id="headingTwo" >
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" >
                            <strong>Indore in Monsoon (July - September)</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body"  >
                        The monsoon season lasts till September. This is not exactly the best time to visit Indore, as the heavy rainfall might dampen your travel plans. However being an offseason, there is a chance that you can avail great deals on hotel tariffs.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" >
                    <h2 className="accordion-header" id="headingThree" >
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" >
                           <strong>Indore in Summer (March - June)</strong> 
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                        The summers are the least advisable time for a visit, owing to the scorching heat. The days are very hot; the temperatures going as high as the only 45&deg;C and the nights are also warm. 
                        </div>
                    </div>
                </div>
                </div>
                </div>
    </>
  )
  }
