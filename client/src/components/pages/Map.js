import React, { useState ,useEffect } from "react";
import ReactMapGL,{Marker , Popup} from "react-map-gl"; 
//import * as golfDate from "./golf-courses.js";

 
export default function App() {
  const [viewport, setViewport] = useState({
    latitude: 45.4211,
    longitude: -75.6903,
    width: "100vw",
    height: "100vh",
    zoom: 10
  });
 /* const [selectedGolf, setSelectedGolf] = useState(null);

  useEffect(() => {
    const listener = e => {
      if (e.key === "Escape") {
        setSelectedGolf(null);
      }
    };
    window.addEventListener("keydown", listener);

    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, []);*/

  return (
    <div>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        mapStyle="mapbox://styles/gc2211/ckz0gd9uf004r14nt02brjaq8"
       >
        hello world
      </ReactMapGL>
    </div>
  );
} 
 
   