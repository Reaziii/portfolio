import React, { useState,useEffect } from 'react';
import Typed from'typed.js';

const TextSpinner = () => {
    useEffect(()=>{
        var typed = new Typed('.typers',{
            strings : [
                "Web Designer",
                "Web Developer",
                "Frontend Developer",
                "Competitve Programmer"
    
            ],
            typeSpeed : 60,
            backSpeed : 40,
            loop : true,
            smartBackspace : true,
    
    
    
        })
    },[])


    return (
        <span className="typers">
            
        
        </span>
    );
};

export default TextSpinner;