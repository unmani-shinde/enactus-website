import React from "react";
import { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import Eklavya from "../assets/2.png";
import Nirmal from "../assets/3.png";
import Tatpar from "../assets/1.png";
import { useNavigate } from "react-router-dom";
import "../stylesheets/HomeStyle.css";

function Card({ children, childNumber, projectDescription, image, url }) {
  const nav = useNavigate();
  const { inView, ref } = useInView();
  const revealCard = useAnimation();
  const [imageScale, setImageScale] = useState(0.8);
  const [underline, setUnderline] = useState(-1);

  if (inView) {
    revealCard.start({
      opacity: 1,
      transition: {
        delay: 1.3 + childNumber / 5,
      },
    });
  }

  return (
    <div
      className="cookie"
      ref={ref}
      style={{
        height: "100%",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        alignSelf: "center",
        cursor: "pointer",
      }}
    >
      <motion.div
        whileHover={{ scale: 1.1, color: "#FFC436" }}
        onHoverStart={() => {
          setImageScale(1.3);
          setUnderline(childNumber);
        }}
        onHoverEnd={() => {
          setImageScale(0.8);
          setUnderline(-1);
        }}
        onClick={() => nav(url)}
        whileTap={{ scale: 0.8 }}
        className="project-card"
        style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: "30px",
          border: "solid 2px white",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          width: "86%",
          marginTop: "-4vh",
          zIndex: 1,
          boxShadow:
            "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.1)",
        }}
        initial={{ opacity: 0 }}
        animate={revealCard}
      >
        <p className="p-8 text-gray-900 text-left uppercase font-bold lg:text-2xl">
          PROJECT {children}
        </p>
        <p className="pl-8 text-left lg:text-xl md:text-sm sm:text-sm">
          {projectDescription}
        </p>
        <div
          style={{
            width: "100%",
            height: "20vh",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <button
            style={{
              width: "50%",
              textAlign: "left",
              marginLeft: "2vw",
              backgroundColor: "transparent",
              border: "none",
              zIndex: "4",
              textDecoration: childNumber === underline ? "underline" : "none",
              cursor: "pointer",
            }}
            onClick={() => nav(url)}
          >
            <span className="flex flex-row ml-4">
              <p>READ MORE</p>
              <FaArrowRight
                style={{
                  transform: "scale(1.2)",
                  marginLeft: "0.5vw",
                  marginTop: "1vh",
                }}
              />
            </span>
          </button>
        </div>
        <div className="hover-effect"></div>
      </motion.div>
    </div>
  );
}

function Projects() {
  const { inView, ref } = useInView();
  const revealProjects = useAnimation();
  const [openIndex, setOpenIndex] = useState(null);
  const navigate = useNavigate();

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const projects = [
    {
      childNumber: 1,
      projectName: "tatpar",
      projectURL: "/projects#project-tatpar",
      description:
        "The Mumbai Dabbawalas, who renowned for unique service, uplifted through Project Tatpar, prospering with identity skill and generating admirable revenue.",
      imageComponent: Tatpar,
    },
    {
      childNumber: 2,
      projectName: "nirmal",
      projectURL: "/projects#project-nirmal",
      description:
        " In response to the pandemic, Nirmal introduces foot-operated toilet doors, promoting contactless interaction amid social distancing, fostering a safer environment.",
      imageComponent: Nirmal,
    },
    {
      childNumber: 3,
      projectName: "eklavya",
      projectURL: "/projects#project-eklavya",
      description:
        "Eklavya addresses teens' school-related stress, offering exposure beyond academics, fostering well-being, & creating opportunities for the underprivileged.",
      imageComponent: Eklavya,
    },
  ];

  if (inView) {
    revealProjects.start({
      opacity: 1,
      transition: {
        delay: 1.3,
      },
    });
  }

  return (
    <div
      ref={ref}
      style={{
        height: "100%",
        width: "100%",
        border: "solid 1px transparent",
        paddingTop: "0.5vw",
        display: "flex",
        flexDirection: "column",
        alignSelf: "center",
        alignItems: "center",
        marginTop: "-4.5vh",
        background: "linear-gradient(315deg, #f7d4d4 0%, #f6ecc4 74%)",
        margin: 0,
      }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={revealProjects}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          width: "100%",
        }}
      >
        <p
          className="lg:text-5xl md:text-5xl sm:text-3xl max-sm:text-3xl font-bold mb-2 text-center tracking-wide mt-12"
          style={{ lineHeight: "4vw" }}
        >
          PROJECTS
        </p>
        <p
          className="lg:text-2xl mb-10 mt-2 text-center"
          style={{ maxWidth: "93%" }}
        >
          With{" "}
          <a className="font-bold text-black" href="https://enactusindia.com/">
            Enactus India
          </a>
          's support and business advisory from SPIT, we've undertaken three
          impactful projects to date.
        </p>
      </motion.div>
      <div
        className="meow"
        style={{
          height: "60%",
          width: "100%",
          justifyContent: "center",
          alignSelf: "center",
          alignItems: "center",
        }}
      >
        {projects.map((project, index) => (
          <Card
            key={index}
            childNumber={project.childNumber}
            projectDescription={project.description}
            image={project.imageComponent}
            url={project.projectURL}
          >
            {project.projectName}
          </Card>
        ))}
      </div>

      <div
        style={{ marginTop: "-5vh" }}
        className="accordion w-full"
        id="accordion-collapse"
        data-accordion="collapse"
      >
        {projects.map((project, index) => (
          <div className="mb-4 p-3" key={index}>
            <h2 id={`accordion-collapse-heading-${index}`}>
              <button
                type="button"
                className="rounded-e flex bg-white items-center justify-between w-full p-5 font-medium text-gray-900 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
                onClick={() => toggleAccordion(index)}
                aria-expanded={openIndex === index}
                aria-controls={`accordion-collapse-body-${index}`}
              >
                <span className="uppercase font-bold">
                  PROJECT {project.projectName}
                </span>
                <svg
                  data-accordion-icon
                  className={`w-3 h-3 transform ${
                    openIndex === index ? "rotate-180" : ""
                  } shrink-0`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </button>
            </h2>

            <div
              id={`accordion-collapse-body-${index}`}
              className={`p-5 bg-white text-black border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900 ${
                openIndex === index ? "" : "hidden"
              }`}
              aria-labelledby={`accordion-collapse-heading-${index}`}
            >
              <p className="mb-2 text-left text-black dark:text-gray-400">
                {project.description}
              </p>
              <button
                onClick={() => navigate(project.projectURL)}
                style={{
                  textAlign: "left",
                  marginLeft: "2vw",
                  backgroundColor: "transparent",
                  border: "none",
                  zIndex: "4",
                  cursor: "pointer",
                }}
              >
                <span className="flex flex-row">
                  <p>READ MORE</p>
                  <FaArrowRight
                    style={{
                      transform: "scale(1.2)",
                      marginLeft: "0.5vw",
                      marginTop: "1vh",
                    }}
                    whileHover={{ marginLeft: "1.5vw" }}
                  />
                </span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
