import React from "react";

//import image
import ContactImage from '../../assets/images/oatstraw.png';

//import css
import './contact.scss';
function Contact() {
    return(
        <div className="contact-control">
            <img src={ContactImage}></img>
            <div className="contact-info">
                <h1>Contact</h1>
                <p>Raia Kogan NFT</p>
                <p><strong>T</strong>: 510-698-9642</p>
                <p><strong>E</strong>: raia@embodiedtherapies.com</p>

                <p><strong>Questions</strong> ? Want to schedule a free 30-minute consultation? Contact form at bottom of page.</p>
            </div>
        </div>
    );
}

export default Contact;