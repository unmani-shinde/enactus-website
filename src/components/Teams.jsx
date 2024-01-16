import React from "react";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "../stylesheets/HomeStyle.css";

function Teams() {

    const {inView, ref} = useInView();
    const revealTeams = useAnimation();


    if (inView) {
        revealTeams.start({
            opacity: 1,
            transition: {
            delay: 1.3,
          },
        });
      }

    return(
        <div className="teams" ref={ref}style={{ height: "100%", width: '100%', border: 'solid 1px transparent', paddingTop: "2vw", display: 'flex',flexDirection: 'column',  alignSelf: 'center', alignItems: 'center',}}>

        <motion.div initial={{opacity:0}} animate={revealTeams}>
        <p style={{ fontWeight: "700", fontSize: '3vw', marginBottom: "2vh", lineHeight: "4vw", textAlign: 'center',letterSpacing:'0.5vw',marginTop:"12vh"}}>TEAMS</p>
        
        </motion.div>
          
        
        
        
        
        
        
        </div>
        

    )
    
}

export default Teams;