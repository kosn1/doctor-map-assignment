import './App.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import doctorsData from './data/doctors.json'

function getAge(dateString) {
  var today = new Date();
  var birthDate = new Date(dateString);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

function getPracticeYears(practiceStartDate) {
  var today = new Date();
  var birthDate = new Date(practiceStartDate);
  var practiceYears = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    practiceYears--;
  }
  return practiceYears;
}

function App() {

  return (
    <MapContainer center={[doctorsData.results[0].latitude, doctorsData.results[0].longitude]} zoom={17} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {doctorsData.results.map((item) => {
        return (
          <Marker
            key={item.id}
            position={[item.latitude, item.longitude]}>

            <Popup className="info-popup" position={[item.latitude, item.longitude]}>
              <div className="container">
                <div className="circle left">{item.first_name.charAt(0) + item.last_name.charAt(0)}</div>
                <div className="inner-container">
                  <p id="doctor-name" className="right" style={{ fontSize: "large", fontWeight: "bold" }}>{item.first_name + " " + item.last_name}</p>
                  <p id="doctor-address" className="right">{item.street_address + ", " + item.city + ", " + item.country + ", " + item.zip_code}</p>
                </div>
                <p id="years">{getAge(item.date_of_birth) + " ετών "}&ensp;{getPracticeYears(item.practice_start_date) + " χρόνια εμπειρίας "}&ensp;{item.languages}</p>
              </div>
            </Popup>

          </Marker>

        );
      })}



    </MapContainer>
  );
}

export default App;
