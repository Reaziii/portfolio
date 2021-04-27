import React from 'react';
import Reveal from 'react-reveal/Reveal';
import Bounce from 'react-reveal/Bounce'
import Fade from 'react-reveal/Fade'
import Zoom from 'react-reveal/Zoom'
import mongo from './imgs/mongo.png'
import expressjs from './imgs/express.png'
import nodejs from './imgs/nodejs.png'
import reactjs from './imgs/react.svg'
import './about.scss'
import profilepic from './imgs/profilepic.jpg'
const About = () => {
    return (
        <section id="about" style={{height:'auto'}} className="About">

            <h1 className="upper-text">
                <Zoom left cascade>
                    <h1>About</h1>
                </Zoom>

            </h1>
            <div className="atxx_yy">
                <div className="aboutXX">
                    <div style={{
                        display : 'flex',
                        justifyContent : 'center',
                        marginBottom : '20px'
                    }}>
                        <img src={profilepic}/>
                    </div>
                        <p>
                            <Zoom right cascade>

                                    I am currently pursing my B.Sc in computer Science and Engineering from Institute of Science and Technology, Bangladesh.
                                    <br/><br/>
                                    I have a passion for problem-solving and like to solve challenges that help evolve analytical and programming skills.
                                    <br/><br/>
                                    My profiles on various Competitive coding platforms are :<br/>
                                    Codechef: https://www.codechef.com/users/reaziii<br/>
                                    Codeforces: https://codeforces.com/profile/ReCRuS<br/>
                                    HackerRank: hackerrank.com/reaziiii<br/>
                                    <br/><br/>
                                    
                                    maximum contest rating on various Competitive coding platforms are :<br/>
                                    Codeforces : 1619<br/>
                                    Codechef : 1938<br/>
                            </Zoom>

                        </p>
                
                </div>
                
            </div>

            <h1 className="about-text">
                <Bounce>
                    <p>FRONT END FOCUSED</p>
                    <p>WITH FULL STACK EXPERIENCE</p>
                </Bounce>

            </h1>

            <div className="about-sec">
                <div className="oop">
                    <Fade left>
                        <div>
                            <h1>
                                MOTIVATED TO PRODUCE RESULTS
                            </h1>
                            <p>
                                As a tenacious self-taught programmer,
                                I use continuous iteration to produce results
                                quickly and continuously improve products.
                            
                            </p>
                            <h1>
                                AN AGILE COLLABORATOR
                            </h1>
                            <p>
                                I have contributed to open source projects, 
                                worked on engineering teams, and always stay 
                                attuned to the newest frameworks.
                                
                            </p>
                            
                        
                        </div>
                        
                    
                    </Fade>
                </div>


                <div className="oop">
                    <Zoom>
                        <div className="img-about">
                            <div>
                                <div className="imgggg">
                                    <img src={mongo}/>
                                    <img src={expressjs}/>
                                </div>
                                <div className="imgggg">
                                
                                    <img src={reactjs}/>
                                    <img src={nodejs}/>
                                </div>
                            </div>
                            
                        </div>
                    
                    
                    </Zoom>
                
                
                </div>
            
            
            </div>
        </section>
    );
};

export default About;