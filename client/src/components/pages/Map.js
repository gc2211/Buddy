import React, { useState, useEffect } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import * as golfDate from "./data/golf-courses.json";//Need to be found

export default function App() {
  const [viewport, setViewport] = useState({
    latitude: 40.7639, 
    longitude: -73.9794, 
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
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        mapStyle="mapbox://styles/gc2211/ckyub746v001o16ofu0zy8s1b"
        onViewportChange={viewport => {
          setViewport(viewport);
        }}
      >
        {golfDate.features.map(golf => (
          <Marker
            key={golf.properties.GOLF_ID}
            latitude={golf.geometry.coordinates[1]}
            longitude={golf.geometry.coordinates[0]}
          >
            <button
              className="marker-btn"
              onClick={e => {
                e.preventDefault();
                setSelectedGolf(golf);
              }}
            >
            <img src="./golf.svg" alt="Golf Icon" /> 
            </button>
          </Marker>
        ))}

        {selectedGolf ? (
          <Popup
            latitude={selectedGolf.geometry.coordinates[1]}
            longitude={selectedGolf.geometry.coordinates[0]}
            onClose={() => {
              setSelectedGolf(null);
            }}
          >
            <div>
              <h2>{selectedGolf.properties.NAME}</h2>
              <p>{selectedGolf.properties.DESCRIPTIO}</p>
            </div>
          </Popup>
        ) : null}
      </ReactMapGL>
    </div>
  );
}
