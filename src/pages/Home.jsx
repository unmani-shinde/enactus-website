import React from "react";
import "../stylesheets/HomeStyle.css";
import EnactusTeam2 from "../assets/EnactusTeam.jpg";
import EnactusTeamClipart from "../assets/EnactusTeamClipart.png";
import EnactusUniversityClipart from "../assets/EnactusUniversityClipart.png";
import EnactusTrophyClipart from "../assets/EnactusTrophyClipart.png";
import EnactusNavBar from "../components/NavBar";

function Banner() {

    return(
        <div style={{height:'100%',border:'solid 1px transparent',display:"flex",flexDirection:'column',backgroundImage: `url(${EnactusTeam2})`,backgroundSize: 'cover',backgroundPosition: 'center top -100px'}}>
            
            <p className="enactus-home-heading">Enactus VJTI</p>
            <p style={{color:"white",fontSize:'2vw',marginTop:'-95vh',fontWeight:'700'}}>ENtrepreneurial ACtion for Others creates a better World for US all </p>
            </div>
        
    )
    
}

function AboutSection() {

    return(
        <div style={{
            height: '120%',
            backgroundColor: 'white',
            borderTop: 'solid 5px white',
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf:'center'
        }}>

    <p style={{fontWeight:"700",fontSize:'3vw',marginLeft:'3vw',marginBottom:"-2vh",}}>What is Enactus VJTI?</p>

    <p style={{fontWeight:"400",fontSize:'1.5vw',marginRight:"3vw",marginLeft:'3vw',marginBottom:"-1vh"}}>Enactus is the world’s largest experiential learning platform dedicated to creating a better world while developing the next generation of entrepreneurial leaders and social innovators.</p>

<p style={{fontWeight:"400",fontSize:'1.5vw',marginLeft:'3vw',marginRight:"3vw",marginBottom:"-1vh"}}>Enactus VJTI was started in <b style={{color:'#ffd500'}}>August 2019</b> which works for the sustainable development of the underprivileged people.To bring about serious changes in the society, we try to facilitate our capabilities and knowledge to the people in need, guide and inspire the deprived through our dexterity and expertise that we develop over time. </p>

<p style={{fontWeight:"400",fontSize:'1.5vw',marginLeft:'3vw',marginRight:"3vw"}}>We are effectively using the entrepreneurial action to empower people, to improve their livelihoods, and to bring quantifiable change in the society.</p>

<div style={{width:"90%",display:'flex',flexDirection:"row",marginBottom:"-5vh",marginTop:'-8vh'}}>
    <div className="What-is-Enactus" style={{width:'33%',display:"flex",flexDirection:"column"}}><img  style={{transform:"scale(0.75)"}}src={EnactusUniversityClipart} alt="EnactusUniversity"/><p>With the support of coaches, mentors and academics, we work together to find innovative solutions to social issues within their local communities using the framework of the sustainable development goals. </p></div>
    <div className="What-is-Enactus" style={{width:'33%',display:"flex",flexDirection:"column"}}><img  style={{transform:"scale(0.75)"}}src={EnactusTeamClipart} alt="EnactusTeam"/><p>Our team works together with community based organisations and social enterprises, as well as getting expert advice from industry specialists to develop their projects into social enterprises using the framework of the Enactus criterion. </p></div>
    <div className="What-is-Enactus" style={{width:'33%',display:"flex",flexDirection:"column"}}><img  style={{transform:"scale(0.75)"}}src={EnactusTrophyClipart} alt="EnactusTrophy"/><p>With the support of coaches, mentors and academics, we work together to find innovative solutions to social issues within their local communities using the framework of the sustainable development goals. </p></div>
</div>

<button style={{width: 'auto',fontSize: '1.5vw',textAlign: 'center',backgroundColor: 'transparent',border: 'none',textDecoration: "underline",fontWeight: '700',color: "#FEC415",textTransform: 'uppercase',alignSelf: "center",marginLeft:'3vw',marginTop:"4vh"// Add margin to the top for spacing
    }}>View Enactus India</button>
    
</div>
    )
    
}



function EnactusHome() {

    const metrics = [{count:'2',detail:"Lives Impacted",detailIcon:""},{count:'2',detail:"Projects Developed",detailIcon:""},{count:'2',detail:"Hard Workers",detailIcon:""}]

    
   

    return(
        <div style={{height:'100%',overflowY:'scroll'}}>
            {/* <EnactusNavBar/> */}
            <Banner/>
            <AboutSection/>          
            
            
<div style={{
    height: '100%',
    backgroundColor: 'black',
    borderTop: 'solid 5px white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
}}>
    
</div>




        </div>
        
    )
    
}

export default EnactusHome;