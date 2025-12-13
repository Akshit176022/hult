import { motion } from "framer-motion";
import { Users, Mail } from "lucide-react";

const sponsors = [
  { id: 1, name: "Sponsor 1" },
  { id: 2, name: "Sponsor 2" },
  { id: 3, name: "Sponsor 3" },
  { id: 4, name: "Sponsor 4" },
  { id: 5, name: "Sponsor 5" },
  { id: 6, name: "Sponsor 6" },
  { id: 7, name: "Sponsor 7" },
  { id: 8, name: "Sponsor 8" },
];

const Sponsors = () => {
  return (
    <section id="sponsors" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="section-badge mx-auto mb-6">
            <Users className="w-4 h-4" />
            <span>Partners</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Our Sponsors
          </h2>
        </motion.div>

        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"> */}
        {/*   {sponsors.map((sponsor, index) => ( */}
        {/*     <motion.div */}
        {/*       key={sponsor.id} */}
        {/*       initial={{ opacity: 0, y: 20 }} */}
        {/*       whileInView={{ opacity: 1, y: 0 }} */}
        {/*       viewport={{ once: true }} */}
        {/*       transition={{ duration: 0.4, delay: index * 0.05 }} */}
        {/*       className="bg-card border border-border rounded-2xl p-6 flex flex-col items-center justify-center hover:shadow-lg transition-shadow" */}
        {/*     > */}
        {/*       <div className="w-16 h-16 rounded-2xl bg-primary-light flex items-center justify-center text-primary font-bold text-xl mb-3"> */}
        {/*         S{sponsor.id} */}
        {/*       </div> */}
        {/*       <span className="text-muted-foreground text-sm">{sponsor.name}</span> */}
        {/*     </motion.div> */}
        {/*   ))} */}
        {/*   <h1 className="text-4xl font-bold w-full text-center">Coming Soon</h1> */}
        {/* </div> */}
        {/**/}
        <h1 className="text-2xl md:text-4xl font-bold w-full mb-15 text-neutral-700 text-center">Coming Soon...</h1>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-accent border-l-4 border-primary rounded-xl p-6"
        >
          <h4 className="text-xl font-bold text-foreground mb-2">
            Interested in Sponsoring?
          </h4>
          <p className="text-muted-foreground">
            Contact us at{" "}
            <a
              href="mailto:iste.nith.ac.in"
              className="text-primary hover:underline font-medium"
            >
              iste.nith.ac.in
            </a>{" "}
            to explore partnership opportunities.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Sponsors;
