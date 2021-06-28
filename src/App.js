import './App.css';
import Map from './components/Map';
import doctorsData from './data/doctors.json';



function App() {
  return (
    <div>
      <Map data={doctorsData.results} />
    </div>
  );

}

export default App;
