import React from "react";
import BackgroundVideo from '../assets/background_video.mp4';
import NavigationBar from "../components/NavigationBar";
import "../stylesheets/scroll.css";
import Project from "../components/ProjectsPage/Project";

function Projects() {
  return (
    <>
      <div className="breeze" style={{ backgroundAttachment: 'fixed' }}>
        <NavigationBar style={{ position: 'static', width: '100%', zIndex: '100' }} />
        <div className="container home-container">
          <video style={{ height: '100%', width: "100vw" }} autoPlay muted playsInline >
            <source src={BackgroundVideo} type="video/mp4"></source>
          </video>
          <div className="overlay"></div>
          <div className="home-content" style={{marigin:0}}>
            <p className="enactus-heading homepage-fade-in-animation" style={{ marginLeft: '-2.5vw' }}>PROJECTS</p>
            <p className='homepage-fade-in-animation' style={{ zIndex: '400', color: 'white', fontSize: '2vw', marginTop: "-8vh", fontWeight: '400' }}>A preview of the projects undertaken with <b>Enactus India</b>'s Support and Business Advisory from <b>SPIT</b>.</p>
          </div>
        </div>
        <div style={{marigin:0}}><Project /></div>
      </div>
    </>
  );
}

export default Projects;
