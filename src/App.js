import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, Rectangle, CircleMarker } from 'react-leaflet';
import './App.css';
import { Icon } from "leaflet";


function App() {
  const position = [-14.891276646303886, -40.847198021347];
  const position2 = [-14.889927212743657, -40.84724814581687];
  const position3 = [-14.89138044853541, -40.84950374696126];
  const position4 = [-14.888598531443149, -40.8494965863227];
  const position5 = [-14.888429134481129, -40.84728593728698];
  const position6 = [-14.887096493507238, -40.84721370758917];
  const position7 = [-14.890777100869647, -40.8447119341224];
  const position8 = [-14.889381015835088, -40.844665969781815];
  const position9 = [-14.888004124483537, -40.844640086796126];
  const position10 = [-14.889722716981778, -40.85130594023105];
  const position11 = [-14.892644232519322, -40.84720565039864];

  const rectangle = [
    [-14.89138044853541, -40.84950374696126],
    [-14.889722716981778, -40.85130594023105],
    [-14.888598531443149, -40.8494965863227],
  ]

  const rectangle2 = [
    [-14.891276646303886, -40.847198021347],
    [-14.890777100869647, -40.8447119341224],
    [-14.889927212743657, -40.84724814581687],
    [-14.889381015835088, -40.844665969781815],
    [-14.888429134481129, -40.84728593728698],
    [-14.888004124483537, -40.844640086796126],
    [-14.887096493507238, -40.84721370758917],
    [-14.892644232519322, -40.84720565039864],
  ]

  const blackOptions = { color: 'blue' }
  const blackOptions2 = { color: 'black' }
  const redOptions = { color: 'lime' }

  const icon = new Icon({
    iconUrl: "./icon.svg",
    iconSize: [40, 40]
  });


  return (
    <MapContainer
      className="main"
      center={position2}
      zoom={17}
      scrollWheelZoom={true}
    >
      <Rectangle bounds={rectangle} pathOptions={blackOptions2} />
      <Rectangle bounds={rectangle2} pathOptions={blackOptions} />
      <CircleMarker
        center={[-14.889927212743657, -40.84724814581687]}
        pathOptions={redOptions}
        radius={390}>
      </CircleMarker>

      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />

      <Marker position={position} icon={icon}>
        <Popup>
          Sensor <br /> 1
        </Popup>
      </Marker>

      <Marker position={position2} icon={icon}>
        <Popup>
        Sensor <br /> 2
        </Popup>
      </Marker>

      <Marker position={position3} icon={icon}>
        <Popup>
        Sensor <br /> 3
        </Popup>
      </Marker>

      <Marker position={position4} icon={icon}>
        <Popup>
        Sensor <br /> 4
        </Popup>
      </Marker>

      <Marker position={position5} icon={icon}>
        <Popup>
        Sensor <br /> 5
        </Popup>
      </Marker>

      <Marker position={position6} icon={icon}>
        <Popup>
        Sensor <br /> 6
        </Popup>
      </Marker>

      <Marker position={position7} icon={icon}>
        <Popup>
        Sensor <br /> 7
        </Popup>
      </Marker>

      <Marker position={position8} icon={icon}>
        <Popup>
        Sensor <br /> 8
        </Popup>
      </Marker>

      <Marker position={position9} icon={icon}>
        <Popup>
        Sensor <br /> 9
        </Popup>
      </Marker>

      <Marker position={position10} icon={icon}>
        <Popup>
        Sensor <br /> 10
        </Popup>
      </Marker>

      <Marker position={position11} icon={icon}>
        <Popup>
        Sensor <br /> 11
        </Popup>
      </Marker>
    </MapContainer>    
  );
}

export default App;