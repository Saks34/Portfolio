import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { Helmet } from "react-helmet";

const Hero = () => {
  return (
    <>
  <Helmet>
    <title>About | Saksham Satnalika</title>
    <meta name="description" content="Learn about Saksham Satnalika – a B.Tech CSE student at LPU, skilled in React and backend dev, and a content creator on YouTube." />
    <meta name="keywords" content="Saksham Satnalika, About Saksham, LPU Student, React Developer, Backend Developer, Content Creator" />
  </Helmet>

    <section className="relative w-full h-screen mx-auto bg-hero-light dark:bg-hero-dark bg-cover bg-center">
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-dark dark:text-white`}>
            Hello, I am <span className="text-[#915EFF]">Saksham</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-dark dark:text-white`}>
            I am a 3rd Year Student <br className="sm:block hidden" />
            doing B.Tech in CSE.
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
  <a href="#about">
    <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
      <motion.div
        animate={{ y: [0, 24, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "loop",
        }}
        className="w-3 h-3 rounded-full bg-secondary mb-1"
      />
    </div>
  </a>
</div>

    </section>
    </>
  );
};

export default Hero;
