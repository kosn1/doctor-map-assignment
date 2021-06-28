import { MapContainer, TileLayer, Marker  } from 'react-leaflet';
import { useState } from 'react';
import DoctorInfoBox from './DoctorInfoBox'

const Map = ({data}) => {
    //state variable for doctor's info window
    const [doctorInfoBox, setDoctorInfoBox] = useState(null);
    //parse the coordinates of the doctor with id=1
    const {latitude:centerLat,longitude:centerLng} = data.filter((item)=>item.id===1)[0];
    
    //parse the json data and create a marker for every object
    const markers = data.map((item) => {
        return (
            <Marker
                key={item.id}
                position={[item.latitude, item.longitude]}
                eventHandlers={{
                    click: () => {
                        setDoctorInfoBox(item)
                    }
                }} />

        );

    });

    return (
        <MapContainer center={[centerLat, centerLng]} zoom={15} scrollWheelZoom={true} >
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {markers}
            {doctorInfoBox && <DoctorInfoBox info={doctorInfoBox} handleClose={() => setDoctorInfoBox(null)} />}

        </MapContainer>
    );
}

export default Map;