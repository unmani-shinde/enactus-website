import React from "react";

import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import core1 from "../assets/core1.jpg";
import core2 from "../assets/core2.jpg";
import core3 from "../assets/core3.jpg";
import core4 from "../assets/core4.jpg";
import linkedIn from "../assets/linkedin.png";
import markHead1 from "../assets/markhead1.jpg";
import markHead2 from "../assets/markhead2.jpg";
import markHead3 from "../assets/markhead3.jpg";
import markManager from "../assets/markmanager.jpg";
import president from "../assets/president.jpg";
import projectHead1 from "../assets/projecthead1.jpg";
import projectHead2 from "../assets/projecthead2.jpg";
import projectManager from "../assets/projectmanager.jpg";
import techHead1 from "../assets/techhead1.jpg";
import techHead2 from "../assets/techhead2.jpg";
import techHead3 from "../assets/techhead3.jpg";
import vicePresidentImage from "../assets/vicepresident.jpg";
import "../stylesheets/teams.css";
import EnactusNavBar from "./NavigationBar";

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

    <div>
     <div
      style={{
        height: "100%",
        overflowX: "hidden",
        overflowY: "scroll",
        alignSelf: "center",
        alignItems: "center",
        backgroundColor:"black"
      }}
    >
      <EnactusNavBar />

     
      </div>

    

      
        <div className="teams" ref={ref}style={{ height: "100%", width: '100%', border: 'solid 1px transparent', paddingTop: "2vw", display: 'flex',flexDirection: 'column',  alignSelf: 'center', alignItems: 'center',}}>

      
        <p style={{ fontWeight: "700", fontSize: '3vw', marginBottom: "2vh", lineHeight: "4vw", textAlign: 'center',letterSpacing:'0.5vw',marginTop:"12vh"}}>Our Team</p>
        
        
        <div className="responsive-container-block container">
        
 
  <div className="responsive-container-block">
    <div className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 card-container">
      <div className="card">
        <div className="team-image-wrapper">
          <div className="team-member-image" ><img src={president} alt="vice"/></div>
        </div>  
        <p className="text-blk name">
          Yash Rajput
        </p>
        <p className="text-blk position">
          President
        </p>
        
        <div className="social-icons">
        <a href="https://www.linkedin.com/in/yashrajput9232/">
        <img className="linkedin-icon" src={linkedIn} alt="LinkedIn" style={{height:"40px",width:"40px"}}/>
         </a>
        </div>
      </div>
    </div>
    <div className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 card-container">
      <div className="card">
        <div className="team-image-wrapper">
          <img src={vicePresidentImage} alt="vice"/>
        </div>
        <p className="text-blk name">
          Mahesh Thakare
        </p>
        <p className="text-blk position">
          Vice President
        </p>
        
        <div className="social-icons">
       
        <a href="https://www.linkedin.com/in/mahesh-thakare-574386226/">
        <img className="linkedin-icon" src={linkedIn} alt="LinkedIn" style={{height:"40px",width:"40px"}}/>
         </a>
        </div>
      </div>
    </div>
    </div>
   
 
    <div className="responsive-container-block">
    <div className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 card-container">
      <div className="card">
        <div className="team-image-wrapper">
        <img className="team-member-image" src={markHead1} alt="vice"/>
        </div>
        <p className="text-blk name">
          Sejal Barai
        </p>
        <p className="text-blk position">
          Marketing Head
        </p>
        <p className="text-blk feature-text">
          
        </p>
        <div className="social-icons">
        <a href="https://www.linkedin.com/in/sejal-barai-123323261/">
        <img className="linkedin-icon" src={linkedIn} alt="LinkedIn" style={{height:"40px",width:"40px"}}/>
         </a>
        </div>
      </div>
    </div>
    <div className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 card-container">
      <div className="card">
        <div className="team-image-wrapper">
        <img className="team-member-image" src={markHead2} alt="vice"/>
        </div>
        <p className="text-blk name">
          Akshada Pathak
        </p>
        <p className="text-blk position">
          Marketing Head
        </p>
        
        <div className="social-icons">
        <a href="https://www.linkedin.com/in/akshada-pathak-605390252/">
        <img className="linkedin-icon" src={linkedIn} alt="LinkedIn" style={{height:"40px",width:"40px"}}/>
         </a>
        </div>
      </div>
    </div>
    <div className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 card-container">
      <div className="card">
        <div className="team-image-wrapper">
        <img className="team-member-image" src={markHead3} alt="vice"/>
        </div>
        <p className="text-blk name">
         Shashank Dhurwey
        </p>
        <p className="text-blk position">
          Marketing Head
        </p>
        
        <div className="social-icons">
        <a href="https://www.linkedin.com/in/shashankdhurwey/">
        <img className="linkedin-icon" src={linkedIn} alt="LinkedIn" style={{height:"40px",width:"40px"}}/>
         </a>
        </div>
      </div>
    </div>
    <div className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 card-container">
      <div className="card">
        <div className="team-image-wrapper">
        <img className="team-member-image" src={markManager} alt="vice"/>
        </div>
        <p className="text-blk name">
          Vishwesh Chauhan
        </p>
        <p className="text-blk position">
          Marketing Manager
        </p>
        
        <div className="social-icons">
        <a href="https://www.linkedin.com/in/vishwesh-chauhan-b5a403287/">
        <img className="linkedin-icon" src={linkedIn} alt="LinkedIn" style={{height:"40px",width:"40px"}}/>
         </a>
        </div>
      </div>
    </div>
    <div className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 card-container">
      <div className="card">
        <div className="team-image-wrapper">
        <img className="team-member-image" src={projectHead1} alt="vice"/>
        </div>
        <p className="text-blk name">
          Vedant Shimpi
        </p>
        <p className="text-blk position">
          Project Head
        </p>
        
        <div className="social-icons">
        <a href="https://www.linkedin.com/in/vedant-shimpi-7a3755274/">
        <img className="linkedin-icon" src={linkedIn} alt="LinkedIn" style={{height:"40px",width:"40px"}}/>
         </a>
        </div>
      </div>
    </div>
    <div className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 card-container">
      <div className="card">
        <div className="team-image-wrapper">
        <img className="team-member-image" src={projectHead2} alt="vice"/>
        </div>
        <p className="text-blk name">
          Zaid Shaikh
        </p>
        <p className="text-blk position">
          Project Head
        </p>
        
        <div className="social-icons">
        <a href="https://www.linkedin.com/in/zaid-shaikh-a4239624b/">
        <img className="linkedin-icon" src={linkedIn} alt="LinkedIn" style={{height:"40px",width:"40px"}}/>
         </a>
        </div>
      </div>
    </div>
    <div className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 card-container">
      <div className="card">
        <div className="team-image-wrapper">
        <img className="team-member-image" src={projectManager} alt="vice"/>
        </div>
        <p className="text-blk name">
          Rajvardhan Sawant
        </p>
        <p className="text-blk position">
          Project Manager
        </p>
        
        <div className="social-icons">
        <a href="https://www.linkedin.com/in/rajvardhan-sawant-497a96238/">
        <img className="linkedin-icon" src={linkedIn} alt="LinkedIn" style={{height:"40px",width:"40px"}}/>
         </a>
        </div>
      </div>
    </div>
    <div className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 card-container">
      <div className="card">
        <div className="team-image-wrapper">
        <img className="team-member-image" src={techHead1} alt="vice"/>
        </div>
        <p className="text-blk name">
          Unmani Shinde
        </p>
        <p className="text-blk position">
          Tech Head
        </p>
        
        <div className="social-icons">
        <a href="https://www.linkedin.com/in/unmani-shinde/">
        <img className="linkedin-icon" src={linkedIn} alt="LinkedIn" style={{height:"40px",width:"40px"}}/>
         </a>
        </div>
      </div>
    </div>
    <div className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 card-container">
      <div className="card">
        <div className="team-image-wrapper">
        <img className="team-member-image" src={techHead2} alt="vice"/>
        </div>
        <p className="text-blk name">
          Dhruvisha Anghan
        </p>
        <p className="text-blk position">
          Tech Head
        </p>
        
        <div className="social-icons">
        <a href="https://www.linkedin.com/in/dhruvisha-anghan-298951243/">
        <img className="linkedin-icon" src={linkedIn} alt="LinkedIn" style={{height:"40px",width:"40px"}}/>
         </a>
        </div>
      </div>
    </div>
    <div className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 card-container">
      <div className="card">
        <div className="team-image-wrapper">
        <img className="team-member-image" src={techHead3} alt="vice"/>
        </div>
        <p className="text-blk name">
          Dhruv Tiwari
        </p>
        <p className="text-blk position">
          Tech Head
        </p>
        
        <div className="social-icons">
        <a href="https://www.linkedin.com/in/tiwaridhruv/">
        <img className="linkedin-icon" src={linkedIn} alt="LinkedIn" style={{height:"40px",width:"40px"}}/>
         </a>
        </div>
      </div>
    </div>
    <div className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 card-container">
      <div className="card">
        <div className="team-image-wrapper">
        <img className="team-member-image" src={core1} alt="vice"/>
        </div>
        <p className="text-blk name">
          Atharva Bagwe
        </p>
        <p className="text-blk position">
          Core Support Member
        </p>
        <p className="text-blk feature-text">
          
        </p>
        <div className="social-icons">
        <a href="https://www.linkedin.com/in/atharva-bagwe-968a7a241/">
        <img className="linkedin-icon" src={linkedIn} alt="LinkedIn" style={{height:"40px",width:"40px"}}/>
         </a>
        </div>
      </div>
    </div>
    <div className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 card-container">
      <div className="card">
        <div className="team-image-wrapper">
        <img className="team-member-image" src={core2} alt="vice"/>
        </div>
        <p className="text-blk name">
          Shruti Pawar
        </p>
        <p className="text-blk position">
          Core Support Member
        </p>
       
        <div className="social-icons">
        <a href="https://www.linkedin.com/in/shruti2407/">
        <img className="linkedin-icon" src={linkedIn} alt="LinkedIn" style={{height:"40px",width:"40px"}}/>
         </a>
        </div>
      </div>
    </div>
    <div className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 card-container">
      <div className="card">
        <div className="team-image-wrapper">
        <img className="team-member-image" src={core3} alt="vice"/>
        </div>
        <p className="text-blk name">
          Rahul barbude
        </p>
        <p className="text-blk position">
        Core Support Member
        </p>
        
        <div className="social-icons">
        <a href="https://www.linkedin.com/in/rahul-barbude-8127b622a/">
        <img className="linkedin-icon" src={linkedIn} alt="LinkedIn" style={{height:"40px",width:"40px"}}/>
         </a>
        </div>
      </div>
    </div>
    <div className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 card-container">
      <div className="card">
        <div className="team-image-wrapper">
        <img className="team-member-image" src={core4} alt="vice"/>
        </div>
        <p className="text-blk name">
          Manav Yadav
        </p>
        <p className="text-blk position">
        Core Support Member
        </p>
        
        <div className="social-icons">
        <a href="https://www.linkedin.com/in/manav-yadav-659b98226/">
        <img className="linkedin-icon" src={linkedIn} alt="LinkedIn" style={{height:"40px",width:"40px"}}/>
         </a>
        </div>
      </div>
    </div>


 
</div>
</div>
        
        
        
        
        
        
        </div>

        </div>
        

    )
    
}

export default Teams;