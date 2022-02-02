import React, { useState, useEffect } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
//import * as golfData from "../../data/golf-courses.json";

export default function App() {
  const [viewport, setViewport] = useState({
    latitude: 45.4211,
    longitude: -75.6903,
    width: "100vw",
    height: "100vh",
    zoom: 10
  });
  const [selectedGolf, setSelectedGolf] = useState(null);

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
  }, []);

  return (
    <div>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken="pk.eyJ1IjoiZ2MyMjExIiwiYSI6ImNreXcxc2s2aTA0YjEybm14Njc1M2JwMzQifQ.VqbFEjTIiNaweT1lK7mU6w"
        mapStyle="mapbox://styles/gc2211/ckz0gd9uf004r14nt02brjaq8"
        onViewportChange={viewport => {
          setViewport(viewport);
        }}
      >
      </ReactMapGL>
    </div>
  );
}
 
   