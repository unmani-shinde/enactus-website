import React from "react";
import { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import Eklavya from "../assets/2.png";
import Nirmal from "../assets/3.png";
import Tatpar from "../assets/1.png";
import { useNavigate } from "react-router-dom";
import "../stylesheets/HomeStyle.css";

function Card({children,childNumber,projectDescription,image,url}) {

  const nav = useNavigate();

    const {inView,ref} = useInView();
    const revealCard = useAnimation();
    const [imageScale,setImageScale] = useState(0.8);
    const [underline,setUnderline] = useState(-1);

    if (inView) {
        revealCard.start({
            opacity: 1,
            transition: {
            delay: 1.3+(childNumber/5),
          },
        });
      }
    
    return(
        <div ref={ref} style={{height:'100%',width:'100%',alignItems:'center',justifyContent:'center',display:'flex',alignSelf:'center',cursor:'pointer'}}>
         <motion.div
  whileHover={{ scale: 1.1, color: '#FFC436' }}
  onHoverStart={()=>{setImageScale(1.3);setUnderline(childNumber)}}
  onHoverEnd={()=>{setImageScale(0.8);setUnderline(-1)}}
  onClick={() => nav(url)}
  whileTap={{ scale: 0.8 }}
  className="project-card"
  style={{
    position: 'relative',
    overflow: 'hidden',
    borderRadius: '30px',
    border: 'solid 2px white',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    width: '86%',
    marginTop: '-4vh',
    
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.1)',
  }}
  initial={{ opacity: 0 }}
  animate={revealCard}
>
  <p style={{ fontWeight: '700', fontSize: '1.5vw', textTransform: 'uppercase', textAlign: 'left', padding: '2vw', zIndex: '4' }}>
    PROJECT {children}
  </p>
  <p style={{ fontSize: '1.25vw',textAlign: 'left', padding: '2vw', zIndex: '4',marginTop:'-10vh' }}>
    {projectDescription}
  </p>
  <div style={{ width: '100%', height: '20vh', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
  <button
  style={{
    width: '50%',
    textAlign: 'left',
    marginLeft: '2vw',
    fontSize: '1.25vw',
    backgroundColor: 'transparent',
    border: 'none',
    zIndex: '4',
    textDecoration: childNumber === underline ? 'underline' : 'none',
    cursor: 'pointer',
  }}
  onClick={() => nav(url)}
>
  READ MORE
  <FaArrowRight style={{ transform: 'scale(1.2)', marginLeft: '0.5vw', marginTop: '1vh' }} whileHover={{ marginLeft: '1.5vw' }} />
</button>

  <div className='image-container'style={{ width: '30vh', height: '25vh', marginTop: '-10vh', border: 'solid 1px transparent', borderRadius: '50%', marginRight: '4vw',zIndex:'4',transform:`scale(${imageScale})` }}>
      <img alt="meow" className="image" src={image} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%', }} />
    </div>

 
</div>

  
  <div className="hover-effect"></div>
</motion.div>





        </div>
        
    )
    
}




function Projects() {

    const {inView, ref} = useInView();
    const revealProjects = useAnimation();

    const projects=[
        {childNumber:1,projectName:'tatpar',projectURL:'/tatpar',description:"The Mumbai Dabbawalas, who renowned for unique service, uplifted through Project Tatpar, prospering with identity skill and generating admirable revenue.",imageComponent:Tatpar},

        {childNumber:2,projectName:'nirmal',projectURL:'/nirmal',description:" In response to the pandemic, Nirmal introduces foot-operated toilet doors, promoting contactless interaction amid social distancing, fostering a safer environment.",imageComponent:Nirmal},

        {childNumber:3,projectName:'eklavya',projectURL:'/eklavya',description:"Eklavya addresses teens' school-related stress, offering exposure beyond academics, fostering well-being, & creating opportunities for the underprivileged.",imageComponent:Eklavya},
    ]


    if (inView) {
        revealProjects.start({
            opacity: 1,
            transition: {
            delay: 1.3,
          },
        });
      }

    return(
        <div ref={ref}style={{ height: "100%", width: '100%', border: 'solid 1px transparent', paddingTop: "0.5vw", display: 'flex', flexDirection: 'column',  alignSelf: 'center', alignItems: 'center',marginTop:"-4.5vh",background: 'linear-gradient(315deg, #f7d4d4 0%, #f6ecc4 74%)'}}>

            <motion.div initial={{opacity:0}} animate={revealProjects} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', width: '100%', }}>
            <p style={{ fontWeight: "700", fontSize: '3vw', marginBottom: "2vh", lineHeight: "4vw", textAlign: 'center',letterSpacing:'0.5vw',marginTop:"12vh"}}>PROJECTS</p>  
            <p style={{ fontWeight: "400", fontSize: '1.5vw', marginBottom: "7vh", maxWidth: '90%', textAlign: 'center',marginTop:"-2vh" }}>With <a href="https://enactusindia.com/" style={{color:'inherit',textDecoration:'none',fontWeight:'700'}}>Enactus India</a>'s support and business advisory from SPIT, we've undertaken three impactful projects to date.</p>
                </motion.div>
            <div style={{display:'flex',flexDirection:'row',height:'60%',width:'100%',justifyContent:'center',alignSelf:'center',alignItems:'center'}}>
                {projects.map((project,index)=>{
                    return(<Card childNumber={project.childNumber} projectDescription={project.description} image={project.imageComponent} url={project.projectURL}>{project.projectName} </Card> )
                })}
                
            </div>
            

        </div>

    )
    
}

export default Projects;