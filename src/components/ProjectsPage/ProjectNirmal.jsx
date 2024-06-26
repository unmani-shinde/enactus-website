import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Carousel from "./Carousel";
import "../../stylesheets/HomeStyle.css";

const items = [
  {
    id: 1,
    title: "About",
    img: "https://github.com/enactusvjti/EnactusVJTI_Website/blob/main/assets/images/Nirmal.png?raw=true",
    desc: "The Foot Operated Door Opener (FODO) presents a comprehensive solution to mitigate the spread of the coronavirus while addressing various socio-economic and environmental challenges. By allowing individuals to open doors with their feet, FODO significantly reduces the risk of virus transmission, particularly in high-traffic areas. Moreover, its implementation helps in curbing waste by eliminating the need for disposable paper towels and contributes to environmental sustainability by minimizing carbon footprint. In regions like India, where sanitation-related diseases incur substantial expenses and affect marginalized communities disproportionately, FODO offers a cost-effective measure to alleviate financial burdens and promote public health. Furthermore, through the production and distribution of FODO units, it creates employment opportunities, particularly benefiting daily wage workers impacted by the economic ramifications of the COVID-19 pandemic.",
  pdf:"https://drive.google.com/file/d/1ORkfgKj6ZW2HJP7hYD9glNmPjNf1YDGN/view?usp=sharing",
  },
  {
    id: 2,
    img: "https://github.com/enactusvjti/EnactusVJTI_Website/blob/main/assets/images/download.png?raw=true",
    title: "Purpose",
    desc: "In the ongoing battle against infectious diseases, particularly in densely populated areas such as public toilets, schools, and colleges, the ubiquitous presence of door handles poses a significant challenge. The relentless transmission of viruses through frequent contact necessitates a paradigm shift in hygiene practices. Enter the Foot Operated Door Opener (FODO), a revolutionary solution designed to mitigate the spread of pathogens. By enabling hands-free operation of doors, FODO empowers individuals to navigate shared spaces safely without compromising convenience or affordability. Its ingenious design not only safeguards public health but also heralds a transformative approach to communal hygiene. FODO stands as a beacon of innovation, ushering in a new era where proactive measures against infectious diseases are seamlessly integrated into everyday life, ensuring the well-being of communities worldwide.",
    pdf:"https://drive.google.com/file/d/1ORkfgKj6ZW2HJP7hYD9glNmPjNf1YDGN/view?usp=sharing",
  },
 
    {
      id: 3,
      img:"https://github.com/enactusvjti/EnactusVJTI_Website/blob/main/assets/images/product%20diagram.jpeg?raw=true",
      title: "Product Specification",
      desc: "Model name: Foot Operated Door Opener (FODO) Install- Door mounted at bottom Corner Waterproof, no Electronic component involved Easy to install Material- Steel Color-Dark powder coat (Black/Brown/Silver) Safe and reliable Spring locking and unlocking system. Operation- Foot operated locking and unlocking, no hand contact involved Designed By- Enactus VJTI ; Dhaval Diwani ; Sumit Patil",
      pdf:"https://drive.google.com/file/d/1ORkfgKj6ZW2HJP7hYD9glNmPjNf1YDGN/view?usp=sharing",
    },
  {
    id: 4,
    img:"https://github.com/enactusvjti/EnactusVJTI_Website/blob/main/assets/images/Kolhapur%20Product.png?raw=true",
    title: "Impact of FODO.",
    desc: "The introduction of the Foot Operated Door Opener heralds a significant advancement in public health practices. By circumventing traditional modes of contact, this innovation effectively eliminates the primary vector for germ transmission. Through the simple act of using one's foot, individuals can now navigate shared spaces with heightened confidence, knowing that they are minimizing their exposure to harmful pathogens. This groundbreaking solution not only addresses immediate concerns regarding viral spread but also underscores the importance of proactive measures in safeguarding public health. It sets a new standard for hygiene protocols in communal settings, emphasizing the value of innovation in mitigating public health risks. In essence, the Foot Operated Door Opener represents a pivotal step towards creating safer and more resilient environments for all.",
    pdf:"https://drive.google.com/file/d/1ORkfgKj6ZW2HJP7hYD9glNmPjNf1YDGN/view?usp=sharing",
  },
   {
    id: 5,
    img:"https://github.com/enactusvjti/EnactusVJTI_Website/blob/main/assets/images/painted+logo.png?raw=true",
    title: "Employment",
    desc: "Amidst the COVID-19 fallout, where millions of daily wage workers face prolonged joblessness, a visionary partnership between government and industry emerges. This groundbreaking initiative aims to establish a new enterprise, offering employment to the urban informal sector. With an estimated 40 million individuals languishing in vulnerable occupations, this endeavor represents a beacon of hope, providing sustainable livelihoods and averting deeper poverty. Through strategic collaboration and innovative solutions, it seeks to transform adversity into opportunity, ensuring the resilience and prosperity of those most affected by the crisis.",
    pdf:"https://drive.google.com/file/d/1ORkfgKj6ZW2HJP7hYD9glNmPjNf1YDGN/view?usp=sharing",
  },
];

const ProjectNirmal = ({ showArrows }) => {
  const { ref, inView } = useInView();
  const animationControls = useAnimation();

  // Animation trigger when inView changes
  React.useEffect(() => {
    if (inView) {
      animationControls.start({
        opacity: 1,
        scale: 1,
        transition: {
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01]
        }
      });
    }
  }, [inView, animationControls]);

  return (
    <div className="portfolioNirmal">
      <div ref={ref}>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1.1,
            delay: 0.8,
            ease: [0, 0.71, 0.2, 1.01]
          }}
        >
          <br></br>
          <p className="enactus-projects-heading uppercase tracking-wider">Project Nirmal</p>
        </motion.div>
      </div>
      
      <div className="fullPageSection">
        <Carousel data={items} showArrows={showArrows}/>
      </div><br/><br /><br /><br />
    </div>
  );
};

export default ProjectNirmal;
