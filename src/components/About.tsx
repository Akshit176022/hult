import { motion } from "framer-motion";
import { Heart, Trophy, Users, BookOpen } from "lucide-react";

const features = [
  {
    icon: Trophy,
    title: "Global Competition",
    description:
    "Compete with 200,000+ students across 150+ countries to showcase your innovative social impact solutions.",
  },
  {
    icon: Users,
    title: "Build Your Team",
    description:
    "Form teams, network with peers, and collaborate with mentors from leading organizations worldwide.",
  },
  {
    icon: BookOpen,
    title: "Win Big Prizes",
    description:
    "Win up to $1 million in funding, accelerator spots, and global recognition for your social enterprise.",
  },
];

const benefits = [
  "Access to industry experts and mentors",
  "Networking with innovators worldwide",
  "Funding and investment opportunities",
  "Media exposure and brand building",
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="section-badge mx-auto mb-6">
            <Heart className="w-4 h-4" />
            <span>Learn More</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            About Hult Prize
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The Hult Prize is the world's largest student startup competition focused on social entrepreneurship, aimed at creating measurable social and environmental impact. It brings together young innovators from over 130 countries, with tens of thousands of participants annually, offering not only funding but also access to mentorship, investor networks, global visibility, and a lifelong community of changemakers. The final winning team is awarded a $1 million prize to launch their social venture.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="feature-card"
            >
              <div className="icon-badge mb-4">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-primary rounded-3xl p-8 md:p-12 text-primary-foreground"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Why Join Hult Prize at NIT Hamirpur?
          </h3>
          <p className="text-primary-foreground/90 md:text-lg mb-6 max-w-3xl">
            Be part of a prestigious competition that has launched numerous successful social
            enterprises. Get mentorship, exposure, and the opportunity to turn your ideas into
            real-world impact.
          </p>
          <ul className="grid md:grid-cols-2 gap-3">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-primary-foreground" />
                <span className="text-primary-foreground/90 md:text-lg">{benefit}</span>
              </li>
            ))}
          </ul>

        </motion.div
        >

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
              mt-8 mx-auto w-fit rounded-3xl bg-primary px-8 py-5 text-center text-primary-foreground shadow-lg shadow-primary/30"
        > 
          <span className="block text-base md:text-lg font-medium opacity-90">
            Prizes Worth
          </span>

          <span className="block text-2xl md:text-4xl font-extrabold tracking-tight">
            ₹30K+
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
