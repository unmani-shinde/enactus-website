import React, { useRef } from "react";
import { motion, useScroll, useSpring, useViewportScroll, useTransform } from "framer-motion";
import "./Projects.scss";
import Carousel from "./Carousel";

const items = [
  {
    id: 1,
    title: "Project Nirmal",
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

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useSpring(scrollYProgress, {
    range: [0, 1],
    output: [-300, 300]
  });

  return (
    <section ref={ref} className="fullPageSection">
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer">
            <img src={item.img} alt="" />
          </div>

          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>View Report</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Project = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"]
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 80,
    output: [0, 1]
  });

  const leftWidth = useTransform(scaleX, [0, 0.5], [0, 100]);
  const rightWidth = useTransform(scaleX, [0.5, 1], [0, 100]);

  return (
    <div className="portfolio" ref={ref}>
      <motion.div className="progress">
        <h1>Projects By Enactus</h1>
        <div className="progressBarContainer">
          <motion.div style={{ width: leftWidth }} className="progressBarLeft" />
          <motion.div style={{ width: rightWidth }} className="progressBarRight" />
        </div>
      </motion.div>
      <Carousel data={items}/>
      
    </div>
  );
};

export default Project;
