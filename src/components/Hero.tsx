import { motion } from "framer-motion";
import { Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen hero-gradient flex items-center justify-center pt-20">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="section-badge mx-auto mb-8"
        >
          <Trophy className="w-4 h-4" />
          <span>NIT Hamirpur</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight"
        >
          Transform Your Ideas Into{" "}
          <span className="text-primary">Global Impact</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
        >
          Join the world's largest student social entrepreneurship competition and turn
          your vision into reality.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Button size="lg" className="text-lg px-10 py-6 rounded-full">
            Register Now
          </Button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-6 text-sm text-muted-foreground"
        >
          Limited spots available • Early bird registration open
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;
