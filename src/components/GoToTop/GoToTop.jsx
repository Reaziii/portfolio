import React,{useEffect} from 'react';
import './GoToTop.scss'
import {$} from 'react-jquery-plugin'
const GoToTop = () => {
    useEffect(()=>{
        window.onscroll = function(){
            console.log()
            if(document.body.scrollTop>80 || document.documentElement.scrollTop>80){
                $('.gototop').addClass('assshowpp'); 
                
            }
            else $('.gototop').removeClass('assshowpp');
        }
    },[]);
    const ontop = () =>{
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    return (
        <button onClick={ontop} className="gototop">
            <i class="fas fa-chevron-up"></i>
        </button>
    );
};

export default GoToTop;