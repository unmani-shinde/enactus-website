import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Carousel from "./Carousel";
import "../../stylesheets/HomeStyle.css";

const items = [
  {
    id: 1,
    title: "About",
    
    img: "https://logowik.com/content/uploads/images/552_enactus.jpg",
    desc: "Lack of adequate career guidance and mentorship among students poses a significant challenge, leading to uncertainty and confusion about their future trajectories. Without proper guidance, students often find themselves directionless, hindering their ability to make informed decisions about their academic and professional pursuits. In a country like India, where millions of students enter secondary education each year, addressing this issue becomes imperative to ensure that the youth are equipped with the necessary tools and resources to navigate the complexities of the modern world and pursue paths that align with their aspirations and potential.",
    pdf:"https://drive.google.com/file/d/1ApDn83iGYumes7iunU0OkNUVuEP26ntn/view?usp=sharing",
  },
  {
    id: 2,
    img:"https://png.pngtree.com/thumb_back/fh260/background/20230714/pngtree-d-rendering-of-a-smartphone-with-educational-tools-promoting-online-learning-image_3860137.jpg",
    title: "Solution",
    desc: "We aim to revolutionize the landscape of career guidance and mentorship by establishing a dynamic community-based platform that bridges the gap between students and professionals across industries. Through this innovative platform, professionals will seamlessly share valuable insights, resources, and expertise through engaging mediums such as blogs and videos, empowering students with the knowledge and guidance needed to navigate their academic and professional journeys. By leveraging technology to showcase the most relevant and impactful content on users' feeds, we ensure that individuals have access to the most valuable resources tailored to their needs, fostering a supportive and enriching environment for personal and professional growth.",
    pdf:"https://drive.google.com/file/d/1ApDn83iGYumes7iunU0OkNUVuEP26ntn/view?usp=sharing",
  },
  {
    id: 3,
    img:"https://i.pinimg.com/originals/f7/d0/5e/f7d05ee06b104789d841027e1f5a63e4.png",
    title: "Product Specification",
    desc: "Experience a registration process and profile-building capabilities on our innovative app. Seamlessly select your interests and dive into a curated collection of career-related videos tailored to your preferences. Our advanced content filtering algorithms ensure that you receive only the most relevant and engaging material, including insightful blogs and captivating videos. Stay ahead of the curve with content sorted based on upvotes, downvotes, and comments, guaranteeing access to the most impactful resources. Engage in dynamic Q&A sessions where creators and students alike provide expert answers and valuable insights, fostering a collaborative learning environment.",
    pdf:"https://drive.google.com/file/d/1ApDn83iGYumes7iunU0OkNUVuEP26ntn/view?usp=sharing",
  },
  {
    id: 4,
    img:"https://github.com/enactusvjti/EnactusVJTI_Website/blob/main/assets/images/photo-1561414927-6d86591d0c4f.jpg?raw=true",
    title: "Revenue Model",
    desc: "Native Advertisement paid advertisements in which the ads match the look, feel and function of the content. Charging comissions in case of successful purchase of a course on redirecting through our platform Special Memberships with access to special members",
    pdf:"https://drive.google.com/file/d/1ApDn83iGYumes7iunU0OkNUVuEP26ntn/view?usp=sharing",
  },
];

const ProjectEklavya = ({ showArrows }) => {
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
    <div className="portfolioEklavya">
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
          <p className="enactus-projects-heading uppercase tracking-wider">Project Eklavya</p>
        </motion.div>
      </div>
      
      <div className="fullPageSection">
        <Carousel data={items} showArrows={showArrows}/>
      </div><br/><br /><br /><br />
    </div>
  );
};

export default ProjectEklavya;
