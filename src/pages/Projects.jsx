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
    <div className="h-screen" style={{backgroundColor:"#eab308"}}>
      <div className="h-screen breeze"style={{ backgroundAttachment: 'fixed',marginTop:'-8vh' }}>
        <NavigationBar style={{ position: 'static', width: '100%', zIndex: '100' }} />
        <div style={{ justifyContent: 'center' }} className="flex flex-col justify-center container home-container">
  <video style={{ height: '100%', width: "100vw" }} autoPlay muted playsInline >
    <source src={BackgroundVideo} type="video/mp4"></source>
  </video>
  <div className="overlay"></div>
  <div className="w-full home-content flex flex-col items-center justify-center h-full">
    <ProjectsHero />
    <p className='text-center homepage-fade-in-animation lg:text-2xl md:text-2xl sm:text-2xl max-sm:text-md' style={{ zIndex: '400', color: 'white', marginTop: "-8vh", fontWeight: '400', maxWidth: "70%" }}>
      A preview of the projects undertaken with <b>Enactus India</b>'s Support and Business Advisory from <b>SPIT</b>.
    </p>
  </div>
</div>

<div id="project-nirmal"><ProjectNirmal showArrows={true} /></div>
      <div id="project-tatpar"><ProjectTatpar showArrows={true} /></div>
      <div id="project-eklavya"><ProjectEklavya showArrows={true} /></div>
      </div>
    </div>
  );
}

export default Projects;
