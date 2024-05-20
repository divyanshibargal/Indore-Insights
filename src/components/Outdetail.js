import React from 'react'
const Outdetail = ({val, flyToLocation}) => {
    const handleClick = () => {
        flyToLocation(val);
        
      };
    
  return (
    <div className='container my-2'>
           <div className="card" style={{width: "auto" , borderRadius:"0"}} onClick={handleClick}>
             <img src={val.img} className="card-img-top" alt="..."style={{borderRadius:"0"}}/>
              <div className="card-body">
              <h6  className="card-text fw-bold">{val.name}</h6>
                   <p className='card-text '><i className='fas fa-map-marker-alt'></i> {val.address}</p>
                   <p className='card-text'> Distance from Indore : {val.distance}</p>
                  </div>
        </div>
    </div>
  )
}

export default Outdetail
