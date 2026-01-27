import { motion } from "framer-motion";
import { Users, Target, Flag, ArrowRight } from "lucide-react";

const steps = [
  {
    id: 1,
    icon: Users,
    title: "Form a Team",
    description: "Connect with 2-3 other eligible students and register your team.",
  },
  {
    id: 2,
    icon: Target,
    title: "Solve a Problem",
    description: "Develop a for-profit, for-good business idea targeting at least one sustainable development goal.",
  },
  {
    id: 3,
    icon: Flag,
    title: "Compete",
    description: "Build your business plan, submit your application and start pitching!",
  },
];

const GettingStarted = () => {
  return (
    <section id="getting-started" className="py-24 px-10 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Getting Started
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Whether you're building a business from scratch or growing an early-stage venture, you're welcome in our community. All you need to start, is a team and an idea.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 lg:gap-16">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.id} className="flex items-center w-full md:w-auto">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="flex flex-col items-center text-center max-w-xs"
                >
                  <div className="w-20 h-20 md:w-24 md:h-24 mb-6 flex items-center justify-center">
                    <Icon className="w-full h-full text-primary stroke-[1.5]" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-base md:text-lg">
                    {step.description}
                  </p>
                </motion.div>
                
                {index < steps.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
                    className="hidden md:flex items-center mx-4 lg:mx-8"
                  >
                    <ArrowRight className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default GettingStarted;

