import React from "react";

//import asset
import LocationImage from '../../assets/images/location.jpg';
//import css
import './location.scss';
function Location() {
    return (
        <div className="location-control">
            <div className="location-content">
                <h1>Location</h1>
                <p><strong>Teletherapy</strong> : I offer video sessions via a secure online platform to clients in California </p>
                <p>I look forward to returning to my <strong>Berkeley</strong> office in the future.</p>
                <p>I offer a complimentary 30-minute phone consultation for us to get to know each other and to answer any questions you have about starting therapy.</p>
            </div>
            <img src={LocationImage} />
        </div>
    );
}

export default Location;