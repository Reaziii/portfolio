import React from 'react';
import './Contact.scss'
import Zoom from 'react-reveal/Zoom'
const Contact = () => {
    return (
        <section id="contact" className="contact">
        <div className="abcdefxxx"></div>
        <h1 className="upper-text">
            <Zoom left cascade>
                <h1>Contact With Me</h1>
            </Zoom>

        </h1>

        <div className="cont-form">
            <div className="thikana">
                <div className="box">
                    <i class="fas fa-map-marker-alt"></i>
                    <p>new T&T vobhon, Shobujnug</p>
                
                </div>
                <div className="box">
                    
                    <i class="fas fa-globe"></i>
                    <p>Khagrachari, chittagong, Bangladesh</p>
                </div>
                <div className="box">
                    <i class="fas fa-phone"></i>
                    <p>015XXXXXXXX</p>
                </div>
            </div>


            <div className="thikana">
                <div className="box">
                    <i class="fab fa-linkedin"></i>
                    <p><a href="https://www.linkedin.com/in/reaziii">Reaz Ahammed</a></p>
                
                </div>
                <div className="box">
                    <i class="fab fa-github"></i>
                    <p><a href="https://github.com/reaziii">Reaz Ahammed</a></p>
                </div>
                <div className="box">
                    <i class="fas fa-envelope"></i>
                    <p style={{textTransform : 'lowercase'}}>baphonreaz@gmail.com</p>
                </div>
            </div>

            
        
        </div>
        </section>
    );
};

export default Contact;