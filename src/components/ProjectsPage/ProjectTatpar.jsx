import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Carousel from "./Carousel";
import "../../stylesheets/HomeStyle.css";
import "../../assets/1.png"
const items = [
  {
    id: 1,
    title: "About",
    img: 'https://github.com/enactusvjti/EnactusVJTI_Website/blob/main/assets/images/Tatpar.png?raw=true',
    desc: "In a groundbreaking move to revolutionize express delivery services, we're leveraging Mumbai's iconic Dabbawala network. Inspired by their legendary efficiency, we're extending their logistics prowess to offer cost-effective delivery solutions. Recognizing the exorbitant rates prevalent in the market, our mission is to democratize access to swift deliveries. By harnessing the existing infrastructure and workforce of the Dabbawalas, we're drastically reducing transportation and manpower costs. This innovative approach not only ensures affordability for customers but also enables Dabbawalas to generate sustainable income. Through this strategic alliance, we're not just redefining the delivery landscape but also empowering local communities with economic opportunities.",
  pdf:"https://drive.google.com/file/d/18NSkg3tHA6GTEi6KN3JH9WXhgiUUIXUj/view?usp=sharing",
  },
  {
    id: 2,
    img:"https://img.redbull.com/images/q_auto,f_auto/redbullcom/2022/8/4/xdrte2pjyp2b0bzciked/dabbawalas-mumbai",
    title: "Purpose",
    desc: "Our purpose is to transform express delivery services by harnessing Mumbai's renowned Dabbawala network. Inspired by their unparalleled efficiency, we aim to provide affordable delivery solutions to all. By leveraging the Dabbawalas' infrastructure and workforce, we minimize costs while maximizing accessibility. Our mission is clear: democratize swift deliveries and empower communities. Together, we're not just redefining the delivery landscape; we're creating economic opportunities and making a meaningful impact on society.",
    pdf:"https://drive.google.com/file/d/18NSkg3tHA6GTEi6KN3JH9WXhgiUUIXUj/view?usp=sharing",
  },
  {
    id: 3,
    img:"https://img.redbull.com/images/q_auto,f_auto/redbullcom/2022/8/4/ikl4kaca6ieuy7q7kb4w/dabbawalas-mumbai",
    title: "Impact",
    desc: "Our vision is to empower over 5000 Dabbawalas, granting them additional income and newfound independence. Through this initiative, we're not only bolstering their financial security but also preserving their traditional business model. With our support, they'll rise stronger, standing tall as pillars of their communities. Together, we're not just transforming lives; we're safeguarding legacies and fostering resilience in the face of change.",
    pdf:"https://drive.google.com/file/d/18NSkg3tHA6GTEi6KN3JH9WXhgiUUIXUj/view?usp=sharing",
  },
  {
    id: 4,
    img:"https://img.redbull.com/images/q_auto,f_auto/redbullcom/2022/8/4/rmvucvp6roxdictft2zc/dabbawalas-mumbai",
    title: "Employment",
    desc: "By integrating new faces from rural areas into our chain, we're not just expanding our workforce, but also fostering inclusivity and empowering local communities. Our mission is to drive down the exorbitant costs of express delivery in Mumbai, making it accessible to all. This initiative not only enhances efficiency but also uplifts the standard of living for countless individuals. Embracing the traditional Dabbawala transport system, powered by bicycles and local electric trains, we're not just delivering packages; we're preserving our environment and paving the way for sustainable logistics solutions. Together, we're revolutionizing the delivery landscape, one eco-friendly mile at a time.",
    pdf:"https://drive.google.com/file/d/18NSkg3tHA6GTEi6KN3JH9WXhgiUUIXUj/view?usp=sharing",
  },{
    id: 5,
    img:"https://github.com/enactusvjti/EnactusVJTI_Website/blob/main/assets/images/IMG_20191019_182634.jpg?raw=true",
    title: "Our Work",
    desc: "Our Meet With Mumbai Dabbawala",
    pdf:"https://drive.google.com/file/d/18NSkg3tHA6GTEi6KN3JH9WXhgiUUIXUj/view?usp=sharing",
  },
];

const ProjectTatpar = ({ showArrows }) => {
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
    <div className="portfolioTatpar">
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
          <p className="enactus-projects-heading uppercase tracking-wider">Project Tatpar</p>
        </motion.div>
      </div>
      
      <div className="fullPageSection">
        <Carousel data={items} showArrows={showArrows}/>
      </div><br/><br /><br /><br />
    </div>
  );
};

export default ProjectTatpar;
