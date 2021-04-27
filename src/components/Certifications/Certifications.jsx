import React from 'react';
import './Certifications.scss';
import Zoom from 'react-reveal/Zoom'
const Certifications = () => {
    return (
        <section id="certifications" className="certifications">
            <div className="abcdefxxx"></div>
            <h1 className="upper-text">
                <Zoom left cascade>
                    <h1>Certifications</h1>
                </Zoom>

            </h1>
            <div className="section">
                <div className="box">
                    <div className="dot"></div>
                    <h1>ICPC Dhaka Regional, 2019</h1>
                    <p>ACM ICPC Dhaka Regional 2019 Hosted by SEU</p>

                </div>
                <div className="box">
                    <div className="dot"></div>
                    <h1>MIST IUPC, 2020</h1>
                    <p>MIST IUPC 2020 Hosted by MIST</p>

                </div>
                <div className="box">
                    <div className="dot"></div>
                    <h1>Champion - Intra University Programming contest 2019 IST</h1>
                    <p>Intra University Programming contest 2019 hosted by IST </p>

                </div>
                <div className="box">
                    <div className="dot"></div>
                    <h1>ICPC Dhaka Regional, 2019</h1>
                    <p>ACM ICPC Dhaka Regional 2019</p>

                </div>
                
            </div>
        </section>
    );
};

export default Certifications;