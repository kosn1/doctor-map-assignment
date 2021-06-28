import { Popup } from 'react-leaflet';

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

const DoctorInfoBox = ({ info , handleClose:handlePopupClose}) => {
    return (
        <Popup
            className="info-popup"
            position={[info.latitude, info.longitude]}
            onClose={()=>handlePopupClose()}
            >
            <div className="container">
                <h2>Doctor Info</h2>
                <hr />
                <div className="circle left">{info.first_name.charAt(0) + info.last_name.charAt(0)}</div>
                <div className="inner-container">
                    <p id="doctor-name" className="right" style={{ fontSize: "large", fontWeight: "bold" }}>{info.first_name + " " + info.last_name}</p>
                    <p id="doctor-address" className="right">{info.street_address + ", " + info.city + ", " + info.country + ", " + info.zip_code}</p>
                </div>
                <ul>
                    <li>Age: <strong>{getAge(info.date_of_birth)}</strong></li>
                    <li>Years of working experience: <strong>{getPracticeYears(info.practice_start_date)}</strong></li>
                    <li>Languages: <strong>{info.languages}</strong></li>
                </ul>

            </div>
        </Popup>

    )
}

export default DoctorInfoBox;