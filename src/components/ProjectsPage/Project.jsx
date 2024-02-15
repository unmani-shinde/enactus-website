// Project.js



import './Projects.css'
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const items = [
  {
    id: 1,
    title: "Project Nirmal",
    img: "https://raw.githubusercontent.com/enactusvjti/EnactusVjti/master/assets/resources/Nirmal.png",
    desc: " Foot Operated Door Opener {FODO},  A Product designed to reduce possibilities of the Corona Virus outbreak."
  },
  {
    id: 2,
    title: "Purpose",
    img: "https://raw.githubusercontent.com/enactusvjti/EnactusVjti/master/assets/resources/Nirmal.png",
    desc: " One of the products in the project Nirmal is foot operated door opener.The public places like public toilets, schools, colleges are the most vulnerable places for the spread of the pandemic because thousands of people touch the same door handles leading to transmission of viruses in the community rapidly. So, the FODO has become the necessity of the human kind. It is easy to use and affordable to the people."
  },
  {
    id: 3,
    title: "Product Specification",
    img: "https://raw.githubusercontent.com/enactusvjti/EnactusVjti/master/assets/resources/Nirmal.png",
    desc: " Model name: Foot Operated Door Opener (FODO) \n Install- Door mounted at bottom Corner \n Waterproof, no Electronic component involved \n Waterproof, no Electronic component involved"
  },
  {
    id: 4,
    title: "Project Nirmal",
    img: "https://raw.githubusercontent.com/enactusvjti/EnactusVjti/master/assets/resources/Nirmal.png",
    desc: " Foot Operated Door Opener {FODO},  A Product designed to reduce possibilities of the Corona Virus outbreak."
  },
]

const Single = ({ item }) => {
  const ref = useRef();

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <div className="textContainer">
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            
          </div>
        </div>
      </div>
    </section>
  );
};

const Project = () => {
  const ref = useRef();
  const { scrollY } = useViewportScroll();
  const [scrollRange, setScrollRange] = useState(0);

  useEffect(() => {
    const updateScrollRange = () => {
      const { scrollHeight, clientHeight } = document.documentElement;
      setScrollRange(scrollHeight - clientHeight);
    };

    updateScrollRange();

    const unsubscribeScrollRange = scrollY.onChange(updateScrollRange);

    return () => {
      unsubscribeScrollRange();
    };
  }, [scrollY]);

  const progressBarWidth = useTransform(scrollY, [0, scrollRange], ["0%", "100%"]);

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ width: progressBarWidth }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Project;
