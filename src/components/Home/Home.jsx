import React from 'react';
import './Home.scss'
import pic from './joker.jpg'
import TextSpinner from './TextSpinner/TextSpinner';
import Zoom from 'react-reveal/Zoom'
const Home = () => {
    return (
        <section id="home" className="home">
            <div className="imgsec">
                <img src={pic}/>
            </div>
            <div style={{height:'80px'}}/>

            <div className="atxtt">
                <div className="fixvalues">
                    <p style={{display : 'flex'}} className="name">
                        <Zoom left cascade>Hi, I am Re</Zoom><Zoom right cascade>az Ahammed</Zoom>
                    </p>
                    <div className="textspinner">
                        <TextSpinner/>
                    </div>    

                    <div className="learnmore">
                        <a href="#about"><button className="funk">
                            Learn More <i  class="fas fa-chevron-down downanimat"></i>
                        </button></a>
                    </div>
                        
                
                
                </div>    
            


            </div>
        </section>
    );
};

export default Home;