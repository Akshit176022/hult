import { motion } from "framer-motion";
import { Trophy } from "lucide-react";

import { Button } from "@/components/ui/button";
import AnimatedSVG from "./AnimatedSVG";
import { BentoTilt } from "./BentoTilt";

import { RollingText } from "./RollingText";

const Hero = () => {
  return (
    <section className="min-h-screen hero-gradient flex items-center justify-center pt-20">
      <div className="container mx-auto ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20  lg:gap-44 items-center">
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="section-badge mb-8 lg:mx-0"
            >
              <Trophy className="w-4 h-4" />
              <span className="text-black dark:text-white">NIT Hamirpur</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl md:text-4xl lg:text-7xl font-bold text-foreground mb-6 leading-tight"
            >
              <span className="font-zentry text-6xl md:text-8xl lg:text-9xl text-transparent bg-gradient-to-r from-[#ff5589] to-gray-400 dark:from-[#ff66cc] dark:to-white bg-clip-text">
                ISTE
              </span>
              <AnimatedSVG className="ml-2 -mb-1 md:ml-3 lg:ml-8" />{" "}
              <br /> Brings To You The <br />
              <span className="inline-flex items-center gap-3 md:gap-4 text-4xl md:text-5xl lg:text-8xl">
                <span className="text-transparent bg-clip-text">
                  <RollingText
                    text="HULT"
                    fontSize="text-4xl md:text-5xl lg:text-8xl"
                    textColor="text-pink-600 dark:text-pink-400"
                    hoverColor="text-black/70 dark:text-white/70"
                    className="font-grotesk font-bold"
                  />
                </span>
                <img
                  src="/hult.webp"
                  alt="Hult Prize"
                  className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20"
                />
                <span className=" font-grotesk text-transparent bg-clip-text bg-gradient-to-r from-[#F55589] to-black/70 dark:from-[#ff66cc] dark:to-white/70">
                  <RollingText
                    text="PRIZE"
                    fontSize="text-4xl md:text-5xl lg:text-8xl"
                    textColor="text-pink-600 dark:text-pink-400"
                    hoverColor="text-black/70 dark:text-white/70"
                    className="font-grotesk font-bold"
                  />
                </span>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg md:text-2xl text-muted-foreground max-w-2xl lg:max-w-none mb-10"
            >
              Join the world's largest student social entrepreneurship
              competition and turn your vision into reality.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Button size="lg" className="text-lg px-10 py-6 rounded-full text-white hover:text-black">
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
                  src="/hero.png"
                  alt="Hult Prize"
                  className="w-full max-w-lg lg:max-w-full h-auto object-contain rounded-4xl lg-scale-125"
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
