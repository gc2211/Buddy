import React, { useState } from "react";
import ReactMapGL from "react-map-gl";  

export default function Map () {
  const [viewport, setViewport] = useState({
    latitude: 40.7639, 
    longitude: -73.9794, 
    width: "100vw",
    height: "100vh",
    zoom: 10
  });
 
    return (
    
    <div>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      >
       </ReactMapGL> 
     </div>   
      );
  }
 
