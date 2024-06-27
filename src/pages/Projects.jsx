import React from "react";
import BackgroundVideo from '../assets/background_video.mp4';
import NavigationBar from "../components/NavigationBar";
import "../stylesheets/scroll.css";
import ProjectNirmal from "../components/ProjectsPage/ProjectNirmal";
import ProjectTatpar from "../components/ProjectsPage/ProjectTatpar";
import ProjectEklavya from "../components/ProjectsPage/ProjectEklavya";
import { ProjectsHero } from "../components/landing-page/page-layout-section-one";

function Projects() {
  return (
    <div className="h-screen" style={{backgroundColor:"#854d0e"}}>
      <NavigationBar/>
      <div className="h-screen breeze"style={{ backgroundAttachment: 'fixed',marginTop:'-8vh',backgroundColor:'#ca8a04' }}>
        
        <div style={{ justifyContent: 'center',backgroundColor:"#ca8a04" }} className="flex flex-col justify-center container home-container">
  <video style={{ height: '100%', width: "100vw",backgroundColor:'#ca8a04' }} autoPlay muted playsInline >
    <source src={BackgroundVideo} type="video/mp4"></source>
  </video>
  <div className="overlay"></div>
  <div className="w-full home-content flex flex-col items-center justify-center h-full">
    <ProjectsHero />
    <p className='text-center homepage-fade-in-animation lg:text-2xl md:text-2xl sm:text-2xl max-sm:text-md' style={{zIndex:'40',color: 'white', marginTop: "-8vh", fontWeight: '400', maxWidth: "70%" }}>
      A preview of the projects undertaken with <b>Enactus India</b>'s Support and Business Advisory from <b>SPIT</b>.
    </p>
  </div>
</div>


      </div>
      <div className="project-nirmal"id="project-nirmal"><ProjectNirmal showArrows={true} /></div>
      <div className="project-tatpar" id="project-tatpar"><ProjectTatpar showArrows={true} /></div>
      <div className="project-eklavya" id="project-eklavya"><ProjectEklavya showArrows={true} /></div>
    </div>
  );
}

export default Projects;
