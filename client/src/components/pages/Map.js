import React, { useState } from "react";
import ReactMapGL from "react-map-gl";
export default function App() {
  const [viewport, setViewport] = useState({
    latitude: 40.730610,
    longitude: -73.935242,
    width: "100vw",
    height: "100vh",
    zoom: 8
  });
  return (
    <div>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken="pk.eyJ1IjoiZ2MyMjExIiwiYSI6ImNreXcxc2s2aTA0YjEybm14Njc1M2JwMzQifQ.VqbFEjTIiNaweT1lK7mU6w"
        mapStyle="mapbox://styles/gc2211/ckz7h3bzy005q14s5i76uhvre"
        onViewportChange={viewport => {
          setViewport(viewport);
        }}
      >
      <button>Events</button>
      </ReactMapGL>
    </div>
  );
}