import React,{useEffect} from 'react';
import './NavBar.scss';
import {$} from 'react-jquery-plugin'
const NavBar = () => {
    useEffect(()=>{
        


    },[])
    

    const  navbar = ()=> {
        const ax = document.querySelector('.container');
        ax.classList.toggle('change');
        $('.menus').slideToggle('fast');
    }
    return (
        <div className="NavBar" id="NavBar">
            <div className="atx_yy">
                <div className="name animate__animated">
                    Reaz Ahammed
                </div>
                <div>
                    <button class="container" onClick={(e)=>navbar(e)}>
                        <div class="bar1"></div>
                        <div class="bar2"></div>
                        <div class="bar3"></div>
                    </button>
                
                </div>
            </div>


                

            <div className="menus">
                <ul>
                    <a href=""><li className="homeX menu-item menu-item-active animate__animated animate_home">Home</li></a>
                    <a className="" href="#about"><li className="aboutX menu-item animate__animated animate_aboutx">About</li></a>
                    <a href="#skills"><li className="skillsX menu-item animate__animated animate_Skills">Skills</li></a>
                    <a href="#certifications"><li className= "certificationsX menu-item animate__animated animate_achiv">Certifications</li></a>
                    <a href="#contact"><li className="contactX menu-item animate__animated animate_contucts">Contucts</li></a>

        
                
                </ul>
            </div>
        </div>
    );
};

export default NavBar;