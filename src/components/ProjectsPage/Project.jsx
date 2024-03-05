import React, { useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import "./Projects.scss";
import { useInView } from "react-intersection-observer";
import Carousel from "./Carousel";
import "../../stylesheets/HomeStyle.css"

// Original items
const items = [
  {
    id: 1,
    title: "",
    img: "https://static.toiimg.com/thumb/imgsize-23456,msid-76984731,width-600,resizemode-4/76984731.jpg",
    desc: "Foot Operated Door Opener {FODO}, A Product designed to reduce possibilities of the Corona Virus outbreak."
  },
  {
    id: 2,
    title: "Purpose",
    desc: "One of the products in the project Nirmal is foot operated door opener.The public places like public toilets, schools, colleges are the most vulnerable places for the spread of the pandemic because thousands of people touch the same door handles leading to transmission of viruses in the community rapidly. So, the FODO has become the necessity of the human kind. It is easy to use and affordable to the people."
  },
  {
    id: 3,
    title: "Product Specification",
    desc: "Model name: Foot Operated Door Opener (FODO) \n Install- Door mounted at bottom Corner \n Waterproof, no Electronic component involved \n Waterproof, no Electronic component involved"
  },
  {
    id: 4,
    title: "Project Nirmal",
    desc: "Foot Operated Door Opener {FODO}, A Product designed to reduce possibilities of the Corona Virus outbreak."
  },
];

// Additional items for Project Tatpar
const items2 = [
  // Add your items for Project Tatpar here
];

// Additional items for Project Eklavya
const items3 = [
  // Add your items for Project Eklavya here
];

const Project = () => {
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

    <div>
    <div className="portfolio">
      <div ref={ref}>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.8,
            ease: [0, 0.71, 0.2, 1.01]
          }}
        >
          <br></br><br></br> <br></br><br></br><br></br>
          <p className="enactus-projects-heading">Project Nirmal</p>
        </motion.div>
      </div>
      <div className="fullPageSection">
        <Carousel data={items}/>
      </div>
    </div>


      <div className="portfolio">
        <div ref={ref}>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.8,
              ease: [0, 0.71, 0.2, 1.01]
            }}
          >
            <br></br><br></br> <br></br><br></br><br></br>
            <p className="enactus-projects-heading">Project Tatpar</p>
          </motion.div>
        </div>
        <div className="fullPageSection">
          <Carousel data={items2}/>
        </div>
      </div>



      <div className="portfolio">
        <div ref={ref}>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.8,
              ease: [0, 0.71, 0.2, 1.01]
            }}
          >
            <br></br><br></br> <br></br><br></br><br></br>
            <p className="enactus-projects-heading">Project Eklavya</p>
          </motion.div>
        </div>
        <div className="fullPageSection">
          <Carousel data={items3}/>
        </div>
      </div>


    </div>
  );
};

export default Project;
