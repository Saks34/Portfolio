import React, { Suspense } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { Helmet } from "react-helmet-async";
import heroLight from "../assets/herobg-light.png";
import heroDark from "../assets/herobg.png";

// Lazy-load the heavy 3D canvas so Hero doesn't hard-crash if it fails
const LazyComputersCanvas = React.lazy(() => import("./canvas/Computers"));

// Simple error boundary to isolate canvas errors from the rest of Hero
class CanvasErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    // eslint-disable-next-line no-console
    console.error("ComputersCanvas error:", error, info);
  }
  render() {
    if (this.state.hasError) return null; // fail safe: render nothing
    return this.props.children;
  }
}

  const Hero = () => {
    return (
      <>
    <Helmet>
      <title>Saksham Satnalika</title>
      <meta name="keywords" content="Saksham Satnalika, About Saksham, LPU Student, React Developer, Backend Developer, Content Creator" />
    </Helmet>

      <section className="relative w-full h-screen mx-auto bg-cover bg-center overflow-hidden">
        {/* Background images for light/dark modes */}
        <div
          className="absolute inset-0 bg-cover bg-center dark:hidden z-0"
          style={{ backgroundImage: `url(${heroLight})` }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-cover bg-center hidden dark:block z-0"
          style={{ backgroundImage: `url(${heroDark})` }}
          aria-hidden="true"
        />
        <div
          className={`absolute inset-0 top-[120px] z-10 max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
        >
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
            <div className="w-1 sm:h-80 h-40 violet-gradient" />
          </div>
          <div className="flex flex-col">
            <h1 className={`${styles.heroHeadText}`}>
              Hello, I am <span className="text-[#915EFF]">Saksham</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2`}>
              I am a 3rd Year Student <br className="sm:block hidden" />
              doing B.Tech in CSE.
            </p>
          </div>
        </div>
        
        <div className="absolute top-[60px] bottom-[60px] inset-x-0 z-[5] pointer-events-auto flex items-center justify-center">
          <div className="w-full max-w-[1600px] h-full">
            <CanvasErrorBoundary>
              <Suspense fallback={null}>
                <LazyComputersCanvas />
              </Suspense>
            </CanvasErrorBoundary>
          </div>
        </div>

        <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-10">
          <a href="#about">
            <div className="w-[35px] h-[64px] rounded-3xl border-4 border-gray-900 dark:border-white flex justify-center items-start p-2">
              <motion.div
                animate={{ y: [0, 24, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="w-3 h-3 rounded-full bg-gray-900 dark:bg-white mb-1"
              />
            </div>
          </a>
        </div>
      </section>
      </>
    )
  };

export default Hero;
