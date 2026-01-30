import { motion } from "framer-motion";
import { Trophy } from "lucide-react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { useEffect } from "react";
import { useRef } from "react";
import heroImage from "/hero.png";

import { Button } from "@/components/ui/button";
import AnimatedSVG from "./AnimatedSVG";
import { BentoTilt } from "./BentoTilt";

import { RollingText } from "./RollingText";
import { Meteors } from "@/components/ui/meteors";

const Hero = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!headingRef.current || !SplitText) return;
    const split = new SplitText(headingRef.current, {
      type: "words,chars",
      charsClass: "inline-block",
    });
    gsap.from(split.chars, {
      x: 150,
      opacity: 0,
      duration: 1.5,
      ease: "power4.out",
      stagger: 0.04,
      onComplete: () => {
        split.revert();
      },
    });
    // Cleanup on unmount
    return () => split.revert();
  }, []);
  return (
    <section className="min-h-screen hero-gradient flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Meteors background */}
      <Meteors />
      <div className="container mx-auto pr-10 pl-10 pb-10 lg:pr-45 lg:pl-45 lg:pb-25 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20  lg:gap-44 items-center">
          <div className="text-center lg:text-left">
            <motion.div
              ref={headingRef}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="section-badge mb-8 lg:mx-0"
            >
              <Trophy className="w-4 h-4" />
              <span className="text-black dark:text-white">NIT Hamirpur</span>
            </motion.div>

            <motion.h1
              ref={headingRef}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight"
            >
              <span className="whitespace-nowrap">
                <span className="text-6xl md:text-6xl lg:text-8xl text-transparent bg-linear-to-r from-[#ff5589] to-gray-400 dark:from-[#ff66cc] dark:to-white bg-clip-text font-rubik">
                  ISTE
                </span>
                <AnimatedSVG className="ml-2 -mb-1 md:ml-3 lg:ml-8 text-black/70 dark:text-white/80" />
              </span>{" "}
              <br /> <span className="whitespace-nowrap">Brings To You The</span> <br />
              <span className="inline-flex items-center gap-3 md:gap-4 text-4xl md:text-5xl lg:text-8xl">
                <span className="text-transparent bg-clip-text font-montserrat">
                  <RollingText
                    text="HULT"
                    fontSize="text-4xl md:text-5xl lg:text-7xl"
                    textColor="text-pink-600 dark:text-pink-400"
                    hoverColor="text-black/70 dark:text-white/70"
                    className="font-bold font-montserrat"
                  />
                </span>

                <span className="text-transparent bg-clip-text bg-linear-to-r from-[#F55589] to-black/70 dark:from-[#ff66cc] dark:to-white/70 font-montserrat">
                  <RollingText
                    text="PRIZE"
                    fontSize="text-4xl md:text-5xl lg:text-7xl"
                    textColor="text-pink-600 dark:text-pink-400"
                    hoverColor="text-black/70 dark:text-white/70"
                    className="font-bold font-montserrat"
                  />
                </span>
              </span>
            </motion.h1>

            <motion.p
              ref={headingRef}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              id="animation"
              className="text-xl md:text-2xl text-muted-foreground max-w-2xl lg:text-3xl mb-10 lg:whitespace-nowrap"
            >
              Stand a chance to win $ 1 Million
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Button
                size="lg"
                className="text-lg lg:text-md px-10 py-6 lg:px-8 lg:py-4 rounded-full text-white hover:text-black"
              >
                <a href="https://share.google/GUkDgJO6HBOzxUYLb">
                  Register Now
                </a>
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative flex items-center justify-center lg:justify-end"
          >
            {/* Hero Image in foreground */}
            <div className="relative z-10">
              <BentoTilt>
                <img
                  src={heroImage}
                  alt="Hult Prize"
                  className="w-full max-w-lg lg:max-w-full lg:ml-10 h-auto object-contain rounded-4xl scale-125 lg:scale-125 shadow-2xl"
                />
              </BentoTilt>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
