// import React from "react";
// import GoogleMapReact from "google-map-react";

// const AnyReactComponent = ({ text }) => <div>{text}</div>;

// export default function SimpleMap() {
//   // const defaultProps = {
//   //   center: {
//   //     lat: 47.9261946144243,
//   //     lng: 106.92838117276803
//   //   },
//   //   zoom: 11
//   // };
//   // Initialize a map centered at (53, 12) at zoom level 5
//   var map = L.map("map").setView([53, 12], 5);

//   var gl = L.maplibreGL({
//     style: "https://tiles.stadiamaps.com/styles/alidade_satellite.json",
//   }).addTo(map);

//   return (
//     // Important! Always set the container height explicitly
//     <div style={{ height: "100vh", width: "100%" }}>
//       <GoogleMapReact
//         bootstrapURLKeys={{ key: "" }}
//         defaultCenter={defaultProps.center}
//         defaultZoom={defaultProps.zoom}
//       >
//         <AnyReactComponent
//           lat={47.9180357482141}
//           lng={106.98307491341228}
//           text="sharavaagiinh"
//         />
//         <AnyReactComponent
//           lat={47.922492376252094}
//           lng={106.98255874543082}
//           text="namkagiinh"
//         />

//         {/* 47.9180357482141, 106.98307491341228 */}
//         {/* <Marker position={{lat:,  long:}}/> */}
//       </GoogleMapReact>
//     </div>
//   );
// }
