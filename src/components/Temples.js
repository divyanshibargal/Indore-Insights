import React, { useState } from "react";
import Navbar1 from "./Navbar/Navbar1";
import Temple from "../data/Temple";
import TempleDetail from "../components/TempleDetail";
import "./PlaceDetail.css"

export default function Temples() {
  const [temp, setTemp] = useState(Temple);
  const [active , setactive] = useState(false);

  const filterdata = (ele)=>{
    let result = Temple.filter((curdata)=>{
    return curdata.cat===ele
    })
    setTemp(result)
   }
   const handleclick = (index)=>{
    setactive(index);
   }
  return (
    <>
      <Navbar1 />
      <div className="container">
        <h1
          className="text-center my-6"
          style={{ marginTop: "10rem", marginBottom: "3rem" }}
        >
          Exploring the Spiritual Heritage of Indore
        </h1>
        <p
          className="text-center my-5"
          style={{ marginTop: "3rem", marginBottom: "3rem" }}
        >
          {" "}
          Discover the divine charm of Indore as we take you on a journey
          through its sacred treasures. The temples of Indore are not just
          architectural marvels but also repositories of history, culture, and
          spirituality.
        </p> 
        </div>
      <div>
        <div className="sidebar " style={{top : "24rem"}}>
          <h3 className="text-center ">Categories</h3>
          <div className="items" style={{height : "25rem"}}>
            <ul>
              <li
                style={{
                  marginLeft: "2rem",
                  marginTop: "1rem",
                  marginBottom: "2rem",
                  cursor: "pointer",
                }}
                onClick={() => {
                  setTemp(Temple);
                  handleclick("All");
                }}
                className={active === "All" ? "activee" : ""}
              >
                All
              </li>
              <li
                style={{
                  marginLeft: "2rem",
                  marginTop: "1rem",
                  marginBottom: "2rem",
                  cursor: "pointer",
                }}
                onClick={() => {
                  filterdata("hindu");
                  handleclick("hindu");
                }}
                className={active === "hindu" ? "activee" : ""}
              >
                Hindu Temples
              </li>
              <li
                style={{
                  marginLeft: "2rem",
                  marginTop: "1rem",
                  marginBottom: "2rem",
                  cursor: "pointer",
                }}
                onClick={() => {
                  filterdata("jain");
                  handleclick("jain");
                }}
                className={active === "jain" ? "activee" : ""}
              >
                Jain Temples
              </li>
              <li
                style={{
                  marginLeft: "2rem",
                  marginTop: "1rem",
                  marginBottom: "2rem",
                  cursor: "pointer",
                }}
                onClick={() => {
                  filterdata("mosque");
                  handleclick("mosque");
                }}
                className={active === "mosque" ? "activee" : ""}
              >
                Mosques
              </li>
              <li
                style={{
                  marginLeft: "2rem",
                  marginTop: "1rem",
                  marginBottom: "2rem",
                  cursor: "pointer",
                }}
                onClick={() => {
                  filterdata("chruch");
                  handleclick("chruch");
                }}
                className={active === "chruch" ? "activee" : ""}
              >
                Chruch
              </li>
              <li
                style={{
                  marginLeft: "2rem",
                  marginTop: "1rem",
                  marginBottom: "2rem",
                  cursor: "pointer",
                }}
                onClick={() => {
                  filterdata("gurudwara");
                  handleclick("gurudwara");
                }}
                className={active === "gurudwara" ? "activee" : ""}
              >
                Gurudwara
              </li>
            </ul>
          </div>
        </div>
</div>
       <div className="container">
          <div className="row justify-content-end">
            {temp.map((val) => {
              return (
                <div className="col-md-9">
                  <TempleDetail key={val.id} val={val} />
                </div>
              );
            })}
          </div>
        </div>
     
    </>
  );
}
