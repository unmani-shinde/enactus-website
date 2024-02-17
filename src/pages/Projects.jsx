import React from "react";
// import useEffect from "react";
import BackgroundVideo from '../assets/background_video.mp4';
import NavigationBar from "../components/NavigationBar";
import "../stylesheets/scroll.css";
import Project from "../components/ProjectsPage/Project";

// import { Parallax } from 'react-parallax';
// import BackgroundImage from "../assets/meow.png";

// import { motion, useAnimation} from "framer-motion";
// import { useInView } from "react-intersection-observer";

function Projects() {
    // const {inView, ref} = useInView();
    
    // const revealControl = useAnimation();

    // useEffect(() => {
    //     if (inView) {
    //       revealControl.start({
    //         opacity: 1,
    //         transition: {
    //           delay: 1.3,
    //         },
    //       });
    //     }
    //   }, [inView,revealControl]);


  return (
    <>
    <div className="breeze" style={{backgroundAttachment:'fixed'}}>
        <NavigationBar/>
        <div className="container home-container" style={{backgroundAttachment:'fixed'}}>
      <video style={{height:'100%',width:"100vw"}} autoPlay muted playsInline >
        <source  src={BackgroundVideo} type="video/mp4"></source>
        
      </video>
      
      <div className="overlay"></div>
          
      {/* <motion.div 
      ref={ref}
        initial={{ opacity: 0, scale: 0.5 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{duration: 1,delay: 0.5,ease: [0, 0.71, 0.2, 1.01]}} 
        className="home-content">
            <p className="enactus-heading" style={{marginLeft:'-2.5vw'}}>PROJECTS</p>
            <p style={{zIndex:'400',color:'white',fontSize:'2vw',marginTop:"-8vh",fontWeight:'400'}}>A preview of the projects undertaken with <b>Enactus India</b>'s Support and Business Advisory from <b>SPIT</b>.</p>
      </motion.div> */}

      <div className="home-content">
            <p className="enactus-heading homepage-fade-in-animation" style={{marginLeft:'-2.5vw'}}>PROJECTS</p>
            <p className='homepage-fade-in-animation' style={{zIndex:'400',color:'white',fontSize:'2vw',marginTop:"-8vh",fontWeight:'400'}}>A preview of the projects undertaken with <b>Enactus India</b>'s Support and Business Advisory from <b>SPIT</b>.</p>
      </div>

      
    </div>
    

    

          
     

     

      
    
    {/* <div className="container">mewo</div> */}

    

    </div>
    <div><Project/></div>
    </>
  );
}

export default Projects;
