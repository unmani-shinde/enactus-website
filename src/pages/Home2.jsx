import React, { useEffect } from "react";
import "../stylesheets/HomeStyle.css";
import EnactusTeam2 from "../assets/EnactusTeam.jpg";
import { motion, useAnimation} from "framer-motion";
import { useInView } from "react-intersection-observer";
import Projects from "../components/Projects";
import Introduction from "../components/Introduction";
import Teams from "../components/Teams";
import EnactusNavBar from "../components/NavigationBar";
// import Navbar from "../components/NavigationBar";


function EnactusHome2() {


  const {inView,  ref} = useInView();
  // const {scrollY} = useScroll();


  const revealControl = useAnimation();
  const revealControl2 = useAnimation();
  const nestedrevealControl1 = useAnimation();
  const nestedrevealControl2 = useAnimation();

//   const changeBackground = ()=>{
//     console.log("Scroll Progress: ",window.scrollY);
// }
// window.addEventListener("scroll",changeBackground);
  
  useEffect(() => {
    if (inView) {
      revealControl.start({
        opacity: 1,
        transition: {
          delay: 1.3,
        },
      });
    }
  }, [inView,revealControl]);

  if (inView) {
    nestedrevealControl1.start({
      opacity: 1,
      transition: {
        delay: 2,
      },
    });
  }

  if (inView) {
    revealControl2.start({
      opacity: 1,
      pathLength:'80vw',
      transition: {
        delay: 2,
      },
    });
  }

  if (inView) {
    nestedrevealControl2.start({
      opacity: 1,
      transition: {
        delay: 3,
      },
    });
  }


  
  



  return (

    <div style={{height:'100%',overflowX:'hidden',overflowY:'scroll',alignSelf:'center',alignItems:'center',}}>
      <EnactusNavBar/>
      
    

            <div style={{height:'100%',border:'solid 0px transparent',display:"flex",flexDirection:'column',backgroundImage: `url(${EnactusTeam2})`,backgroundSize: 'cover',backgroundPosition: 'center top -10vh',backgroundAttachment:"fixed"}}>

            <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01]
            }}
            >      
            <p className="enactus-home-heading">Enactus VJTI</p></motion.div> 

            </div>

            <div className='introduction' style={{ height: "100%", width: '100%', border: 'solid 1px transparent', paddingTop: "2vw", display: 'flex', justifyContent: 'center', flexDirection: 'column', textAlign: 'center', alignSelf: 'center', alignItems: 'center'}}>

  <div ref={ref} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', width: '100%',  alignSelf: 'center' }}>
    <motion.div
      initial={{ opacity: 0 }}
      animate={revealControl}
      style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', width: '100%', }}
    >
      <p style={{ fontWeight: "700", fontSize: '3vw', marginBottom: "-2vh", lineHeight: "4vw", maxWidth: '70%', textAlign: 'center',letterSpacing:'0.5vh'}}>Tackling the problems of today, whilst creating the leaders of tomorrow.</p>
      <p style={{ fontWeight: "400", fontSize: '1.5vw', marginBottom: "0vh", maxWidth: '50%', textAlign: 'center' }}>Join us to engage the next generation of Entrepreneurial Leaders to use Innovation and Business to improve the world. </p>
      
      <motion.div
      initial={{ opacity: 0,pathLength:0 }}
      animate={nestedrevealControl1}
      style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', width: '100%', }}
      >

      <hr style={{ width: "80%", backgroundColor: "#FFF6F6", height: '1vh', borderRadius: '0px', border: 'none' }} />

      </motion.div>

      <motion.div
      initial={{ opacity: 0 }}
      animate={nestedrevealControl2}
      style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', width: '100%', }}
      >

<p className="introduction-paragraph" style={{ textAlign: 'center' }}>Enactus is the world’s largest experiential learning platform dedicated to creating a better world while developing the next generation of entrepreneurial leaders and social innovators. The Enactus network of global business, academic, and student leaders is unified by our vision- to create a better, more sustainable world. </p>

<button className="introduction-know-more-button" 
  onClick={(e)=>{e.preventDefault();
    console.log("Scroll Progress: ",window.scrollY);

}}>KNOW MORE</button>

      </motion.div>
      
      
    </motion.div>
  </div>

  

  
</div>

<Introduction/>
<Projects/>
<Teams/>








      


    </div>



    
  );
}




export default EnactusHome2;
