import React from 'react'
const Mapdetail = ({val, flyToLocation}) => {
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
                   <p className='card-text '> {val.rating} <i className="fa-solid fa-star" style={{color: "#FFD43B" ,}}></i></p>
                <a href={`tel:${val.phone}`}><p className='btn btn-success'><i className="fa-solid fa-phone"></i>    {val.phone}</p></a>
                  </div>
        </div>
    </div>
  )
}

export default Mapdetail
