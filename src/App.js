import React,{useState,useEffect} from 'react';
import About from './components/About/About';
import GoToTop from './components/GoToTop/GoToTop';
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import Loding from './components/Loading/Loding'
import Skills from './components/Skills/Skills';
import Certifications from './components/Certifications/Certifications';
import './App.scss'
import Contact from './components/Contact/Contact';
import Helmet from 'react-helmet'
const App = () => {
  const [loading,setloading] = useState(1);
  useEffect(()=>{
    setloading(0);

  },[])
  if(loading){
    return(
      <Loding/>
    )
  }
  return (
    <div>
      <Helmet>
          <title>Reaz Ahammed</title>
      </Helmet>
      <NavBar/>
      <GoToTop/>
      <Home/>
      <About/>
      <Skills/>
      <Certifications/>
      <Contact/>


      <div className="copyright">
        <p> © Copyright 2020</p> <h1> Reaz Ahammed.</h1><p> All Rights Reserved </p>
      
      </div>







    </div>
  );
};

export default App;