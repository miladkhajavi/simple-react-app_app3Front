import React, { useRef , useEffect } from "react";
// import L from 'leaflet'
import "./Map.css";

// const Maps = (props) => {

//   const mapRef = useRef();
//   const {center, zoom} = props;
//   useEffect(() => {

//     const map =  L.map(mapRef.current, {
//         center: center,
//         zoom: zoom,
//       });
    
//       L.tileLayer("https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png").addTo(map)

//   }, [center,zoom])
  

//   return (
//     <div
//       ref={mapRef}
//       className={`map ${props.className}`}
//       style={props.style}
//     ></div>
//   );
// };
// export default Maps;

const Map = props => {
    const mapRef = useRef();
    
    const { center, zoom } = props;
  
    useEffect(() => {
      new window.ol.Map({
        target: mapRef.current.id,
        layers: [
          new window.ol.layer.Tile({
            source: new window.ol.source.OSM()
          })
        ],
        view: new window.ol.View({
          center: window.ol.proj.fromLonLat([center.lng, center.lat]),
          zoom: zoom
        })
      });
    }, [center, zoom]);
  
    return (
      <div
        ref={mapRef}
        className={`map ${props.className}`}
        style={props.style}
        id="map"
      ></div>
    );
  };
  
  export default Map;
