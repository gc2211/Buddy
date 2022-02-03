import React, { useState } from "react";
import ReactMapGL from "react-map-gl";
export default function App() {
  const [viewport, setViewport] = useState({
    latitude: 45.4211,
    longitude: -75.6903,
    width: "100vw",
    height: "100vh",
    zoom: 10
  });
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