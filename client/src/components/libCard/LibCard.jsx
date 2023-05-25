import React from "react";
import "../libCard/LibCard.css";
function LibCard() {
  return <div className="main-container">
   <span className="map-dis">📍200m</span> 
     <div className="inner-container">
        <img className="card-img" src="https://imgmedia.lbb.in/media/2023/04/6436aa5d27ecb545869f4f91_1681304157591.jpg" height={"100vw"} width={"100vh"}></img>
        <div className="inner-text-container">
            <h1 className="card-title">Name of library</h1>
            <p className="card-description">little description</p>
            <h3>Rs.25/hr</h3>
            <span className="card-rating">*****</span>
           
        </div>
     </div>
     <div className="button-container">
        <><button className="card-button">Book Now</button></>
        <><button className="card-button">View Library</button></>
     </div>
    
    </div>;
}

export default LibCard;
