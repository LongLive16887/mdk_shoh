import React from 'react';
import "./mapSection.scss";

const MapSection = () => {
    return(
        <div className="map">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3029.131590048758!2d-75.49285368518825!3d40.60492025209744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c439862c390e25%3A0xd8a76e7325ce28ea!2sLiberty%20St%2C%20Allentown%2C%20PA%2C%20USA!5e0!3m2!1sen!2sbd!4v1580135217665!5m2!1sen!2sbd"
                height="500"
                style={{ border: 0 }}
                allowFullScreen=""
                title="Location Map"
            ></iframe>
        </div>
    );
};

export default MapSection;
