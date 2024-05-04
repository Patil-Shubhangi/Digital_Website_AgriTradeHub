import React from 'react';
import './contact.css';
import img from "../images/food.png";
import Back from "../common/Back";

const Contact = () => {
    return (
        <div className="NewContact-container">
            <section className="new-contact-form">
                <Back name='Contact Us' title='Get Helps & Friendly Support' cover={img} />
                <h1 className="new-heading">Get In Touch!</h1>
                <p className="new-para">Welcome to the contact page of AgriTrade Hub, your gateway to the world of agricultural trade and commerce.</p>

                <div className="new-contactForm">
                    <form action="#">
                        <h1 className="new-sub-heading">Need Support!</h1>
                        <p className="new-para new-para2">Contact us for a quote, help to join the them.</p>
                        <input type="text" className="new-input" placeholder="Your Name" />
                        <input type="text" className="new-input" placeholder="Your Email" />

                        <textarea className="new-input" cols="30" rows="8" placeholder="Type Your Message..."></textarea>

                        <input type="submit" className="new-input new-submit" value="Send Message" />
                    </form>

                    <div className="new-map-container">
                        <div className="new-mapBg"></div>
                        <div className="new-map">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9914410252845!2d2.291906375932066!3d48.85837360070842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sEiffel%20Tower!5e0!3m2!1sen!2set!4v1695627657575!5m2!1sen!2set" width="600" height="450" style={{ border: '0' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            </section>

            <div className="new-contactMethod">
                <div className="new-method">
                    <i className="fa-solid fa-location-dot new-contactIcon"></i>
                    <article className="new-text">
                        <h1 className="new-sub-heading">Location</h1>
                        <p className="new-para">AgriTradeHub 123 Main Street, Humnabad India</p>
                    </article>
                </div>

                <div className="new-method">
                    <i className="fa-solid fa-envelope new-contactIcon"></i>
                    <article className="new-text">
                        <h1 className="new-sub-heading">Email</h1>
                        <p className="new-para">Agritradehub.info@gmail.com</p>
                    </article>
                </div>

                <div className="new-method">
                    <i className="fa-solid fa-phone new-contactIcon"></i>
                    <article className="new-text">
                        <h1 className="new-sub-heading">Phone</h1>
                        <p className="new-para">Phone: +1(123) 456-7890</p>
                    </article>
                </div>
            </div>
        </div>
    );
}

export default Contact;
