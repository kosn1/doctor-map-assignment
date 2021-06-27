import './App.css';
import { MapContainer, TileLayer, Marker  } from 'react-leaflet';
import doctorsData from './data/doctors.json'
import { useState } from 'react';
import DoctorInfoBox from './DoctorInfoBox'


function App() {

  const [doctorInfoBox, setDoctorInfoBox] = useState(null);
  const markers = doctorsData.results.map((item) => {
    return (
      <Marker
        key={item.id}
        position={[item.latitude, item.longitude]}
        eventHandlers={{ click: () => {      
          setDoctorInfoBox(item) } }} />

    );

  });

  return (
    <MapContainer center={[doctorsData.results[0].latitude, doctorsData.results[0].longitude]} zoom={17} scrollWheelZoom={true} >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {markers}
      {doctorInfoBox && <DoctorInfoBox info={doctorInfoBox}  handleClose={()=>setDoctorInfoBox(null)}  />}

    </MapContainer>
  );
}

export default App;
