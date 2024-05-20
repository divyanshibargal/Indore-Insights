import React from 'react'
export default function TempleDetail({ val , flyToLocation }) {
    const handleClick = ()=>{
        flyToLocation(val)
    }
    return (
       
        <div className='container my-3'>
        <div className="card" style={{width: "auto" , borderRadius:"0"}} onClick={handleClick} >
            <img src={val.img} className="card-img-top  " alt="..."  style={{borderRadius:"0"}}/>
            <div className="card-body my-3">
                <h6 className="card-text fw-bold fs-4 mx-2">{val.name}</h6>
                <p className='mx-2'><i className='fas fa-map-marker-alt'></i> {val.address}</p>
              <p className='mx-2'style={{fontWeight :"bold"}}> Rush Hours : {val.rush} <i className="fa-solid fa-clock" style={{color: "#74C0FC"}}></i></p>

            </div>
        </div>
    </div>
    )
}
