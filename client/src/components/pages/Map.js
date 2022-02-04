import React, { useState, useEffect } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import golfData from "data/golfData";
import image from "images/collin.png";
import UserProfile from "components/organisms/UserProfile";


export default function App() {
  const [viewport, setViewport] = useState({
    latitude: 25.7616798,
    longitude: -80.1917902,
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
        mapStyle="mapbox://styles/gc2211/ckz7h3bzy005q14s5i76uhvre"
        onViewportChange={viewport => {
          setViewport(viewport);
        }}
      >
        {golfData.features.map(golf => (
          <Marker
            key={golf.attributes.OBJECTID}
            latitude={golf.geometry.y}
            longitude={golf.geometry.x}
          >
            <button
              className="marker-btn"
              onClick={e => {
                e.preventDefault();
                setSelectedGolf(golf);
              }}
            >
              <img src="/golf.svg" alt="Golf icon" />
            </button>
          </Marker>
        ))}
        {selectedGolf ? (
          <Popup
            latitude={selectedGolf.geometry.y}
            longitude={selectedGolf.geometry.x}
            onClose={() => {
              setSelectedGolf(null);
            }}
          >
            <div>
              <h2>{selectedGolf.attributes.NAME}</h2>
              <p>{selectedGolf.attributes.WEBSITE}</p>
              <p>Upcoming events:</p>
              <p>05/04/2022</p>
              <p>Organised by:</p>
              <UserProfile
            username="Collin Morikawa"
            iconSize="medium"
             image={image}
        />
            </div>
          </Popup>
        ) : null}
      </ReactMapGL>
    </div>
  );
}