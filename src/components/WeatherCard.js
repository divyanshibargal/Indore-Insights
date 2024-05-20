import React from 'react'

export default function WeatherCard({WeatherData}) {
  return (

    <div className='container my-4'>
        <h2 className='heading text-center ' style={{marginBottom : "2.5rem"}}>Indore's Weather Info</h2>
   <div className="row row-cols-1 row-cols-md-3 mb-3 text-center" bis_skin_checked="1">
              <div className="col" bis_skin_checked="1">
                <div className="card mb-4 rounded-3 shadow-sm" bis_skin_checked="1">
                  <div className="card-header py-3" bis_skin_checked="1">
                    <h4 className="my-0 fw-normal">Temperature</h4>
                  </div>
                  <div className="card-body" bis_skin_checked="1">
                    <h1 className="card-title pricing-card-title">{WeatherData.temp}<small className="text-body fw-light"><span>&#8451;</span></small></h1>
                    <ul className="list-unstyled mt-3 mb-4">
                      <li>Minimun Temperature : {WeatherData.min_temp}&deg;C</li>
                      <li>Maximum Temperature : {WeatherData.max_temp}&deg;C</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col" bis_skin_checked="1">
                <div className="card mb-4 rounded-3 shadow-sm" bis_skin_checked="1">
                  <div className="card-header py-3" bis_skin_checked="1">
                    <h4 className="my-0 fw-normal">Humidity Info</h4>
                  </div>
                  <div className="card-body" bis_skin_checked="1">
                    <h1 className="card-title pricing-card-title">{WeatherData.humidity}<small className="text-body fw-light">%</small></h1>
                    <ul className="list-unstyled mt-3 mb-4"> 
                       <li>Humidity : {WeatherData.humidity}%</li> 
                      <li>Feels Like: {WeatherData.feels_like}&deg;C</li>
                  
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col" bis_skin_checked="1">
                <div className="card mb-4 rounded-3 shadow-sm " bis_skin_checked="1">
                  <div className="card-header py-3 " bis_skin_checked="1">
                    <h4 className="my-0 fw-normal">Wind Info</h4>
                  </div>
                  <div className="card-body" bis_skin_checked="1">
                    <h1 className="card-title pricing-card-title">{WeatherData.wind_speed}<small className="text-body fw-light">Km/hr</small></h1>
                    <ul className="list-unstyled mt-3 mb-4">
                      <li>Wind Speed : {WeatherData.wind_speed}Km/hr</li>
                      <li>Wind Degrees : {WeatherData.wind_degrees} &deg;</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            </div>
  )
}
