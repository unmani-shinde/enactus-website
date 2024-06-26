import React from "react";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "../stylesheets/HomeStyle.css";

function Introduction() {

    const {inView, ref} = useInView();
    const revealIntroduction = useAnimation();


    if (inView) {
        revealIntroduction.start({
            opacity: 1,
            transition: {
            delay: 1.3,
          },
        });
      }

    return(
        <div style={{ height: "100%", width: '100%', border: 'solid 1px transparent', paddingTop: "2vw", display: 'flex',flexDirection: 'column',  alignSelf: 'center', alignItems: 'center',backgroundColor:"#FFF6F6"}}>

        
        <p className="transition-opacity ease-in duration-700 opacity-100" style={{ fontWeight: "700", fontSize: '3vw',marginTop:'15vh', marginBottom: "-2vh", lineHeight: "4vw", maxWidth: '50%',marginLeft:'3vw', textAlign: 'left',letterSpacing:'0.25vh',color:'#FFC436'}}>Entrepreneurial action & business innovation that creates social impact.</p>
        
       
          
        
        
        
        
        
        
        </div>
        

    )
    
}

export default Introduction;