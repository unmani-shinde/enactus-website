import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export function AnimatedComponents() {
  const { ref, inView } = useInView();
  const revealControl = useAnimation();

  useEffect(() => {
    if (inView) {
      revealControl.start({
        opacity: 1,
        transition: {
          duration: 1.5,
        },
      }).then(() => {
        revealControl.start({
          opacity: 1,
          transition: {
            duration: 1.5,
          },
        }).then(() => {
          revealControl.start({
            opacity: 1,
            transition: {
              duration: 1.5,
            },
          });
        });
      });
    }
  }, [inView, revealControl]);

  return (
    <motion.div ref={ref}>
      <motion.div animate={revealControl} initial={{ opacity: 0 }}>
        <SecondHero />
      </motion.div>
      <motion.div animate={revealControl} initial={{ opacity: 0 }}>
        <SecondDivider />
      </motion.div>
      <motion.div animate={revealControl} initial={{ opacity: 0 }}>
        <SecondSubHeading />
      </motion.div>
    </motion.div>
  );
}

function SecondHero() {
  return (
    <div className="flex flex-col justify-center items-center">
      <p
        className="second-hero mb-4 tracking-wider font-bold lg:text-5xl md:text-4xl sm:text-3xl"
        style={{
          maxWidth: "70%",
          textAlign: "center",
        }}
      >
        Tackling the problems of today, whilst creating the leaders of
        tomorrow.
      </p>
      <p
        className="second-subheading mb-4 lg:text-2xl"
        style={{
          textAlign: "center",
          marginBottom: "0vh",
        }}
      >
        Join us to engage the next generation of Entrepreneurial Leaders to use
        Innovation and Business to improve the world.
      </p>
    </div>
  );
}

function SecondDivider() {
  return (
    <div className="flex flex-col justify-center items-center">
      <hr
        className="mt-4"
        style={{
          width: "80%",
          backgroundColor: "#FFF6F6",
          height: "1vh",
          borderRadius: "0px",
          border: "none",
        }}
      />
    </div>
  );
}

function SecondSubHeading() {
  return (
    <div className="flex flex-col justify-center items-center">
      <p
        className="second-subheading mt-4 mb-2 lg:text-2xl"
        style={{ textAlign: "center", maxWidth: "80%" }}
      >
        Enactus is the world’s largest experiential learning platform dedicated
        to creating a better world while developing the next generation of
        entrepreneurial leaders and social innovators. The Enactus network of
        global business, academic, and student leaders is unified by our vision-
        to create a better, more sustainable world.
      </p>

      <div className="mt-10 w-5/12 flex items-center justify-center gap-x-6">
        <a
          href="#"
          className="w-full rounded-md border-2 border-white bg-transparent px-3.5 py-2.5 text-lg font-semibold text-white shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
        >
          Know More
        </a>
      </div>
    </div>
  );
}
