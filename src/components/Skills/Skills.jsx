import React from 'react';
import Bounce from 'react-reveal/Bounce'
import Zoom from 'react-reveal/Zoom'
import Fade from 'react-reveal/Fade'
import './Skills.scss'
const Skills = () => {
    return (
        <section id="skills" className="skills">
            <div className="abcdefxxx"></div>
            <h1 className="upper-text">
                <Zoom left cascade>
                    <h1>Skills</h1>
                </Zoom>

            </h1>

            <div className="skill-dev">
    
                <div className="atsx_uu">
                    <Zoom >
                    <div className="skilss-box">
                        <div className="icon">
                            <i class="fas fa-crop-alt"></i>
                        </div>
                        <h2>Frontend</h2>
                        <div className="elements">
                            <h1>html 5</h1>
                            <h1> CSS3 | SCSS</h1>
                            <h1>Javascript</h1>
                            <h1>React JS</h1>
                        </div>
                    </div>
                    <div className="skilss-box">
                        <div className="icon">
                            <i class="fas fa-server"></i>
                        </div>
                        <h2>Server</h2>
                        <div className="elements">
                            <h1>Node JS</h1>
                            <h1>Express JS</h1>
                            <h1>Python</h1>
                        </div>
                    </div>
                    <div className="skilss-box">
                        <div className="icon">
                            <i class="fas fa-database"></i>
                        </div>
                        <h2>Database</h2>
                        <div className="elements">
                            <h1>MongoDB</h1>
                            <h1> mySQL</h1>
                        
                        </div>
                    </div>
                    <div className="skilss-box">
                        <div className="icon">
                            <i class="fas fa-tv"></i>
                        </div>
                        <h2>Programming Language</h2>
                        <div className="elements">
                            <h1>C/C++</h1>
                            <h1>python</h1>
                            <h1>Javascript</h1>
                        </div>
                    </div>
                    
                    </Zoom>
                </div>
            </div>
        </section>
    );
};

export default Skills;