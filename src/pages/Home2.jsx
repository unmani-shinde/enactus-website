import React, { useEffect } from "react";
import "../stylesheets/HomeStyle.css";
import EnactusTeam2 from "../assets/EnactusTeam.jpg";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Projects from "../components/Projects";
import Introduction from "../components/Introduction";
import Teams from "../components/Teams";
import EnactusNavBar from "../components/NavigationBar";
import { SecondDivider,SecondHero,SecondSubHeading } from "../components/landing-page/page-layout-section-two";
import { FirstHero } from "../components/landing-page/page-layout-section-one";
// import Navbar from "../components/NavigationBar";

function EnactusHome2() {
  const { inView, ref } = useInView();
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
  }, [inView, revealControl]);

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
      pathLength: "80vw",
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
    <div className="h-screen">
      <EnactusNavBar />

      <div
      className="h-screen flex flex-col justify-center"
        style={{ backgroundImage: `url(${EnactusTeam2})`,
          backgroundSize: "cover",
          backgroundPosition: "center top -10vh",
          backgroundAttachment: "fixed",
          backgroundRepeat:'no-repeat',
          backgroundColor:"#111827"
        }}
      >
        
       
          <FirstHero/>
          
        
      </div>

      <div
        className="h-screen flex flex-col justify-center introduction"
        style={{
         
          paddingTop: "2vw",

          textAlign: "center",
          alignSelf: "center",
          alignItems: "center",
        }}
      > 
            <SecondHero/>
            <SecondDivider/>
            <SecondSubHeading/>
        
      </div>

      
      <Projects />
    </div>
  );
}

export default EnactusHome2;
