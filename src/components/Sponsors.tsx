import { motion } from "framer-motion";
import { Users, Mail } from "lucide-react";

const sponsors = [
  {
    id: 1,
    name: "Hitbullseye",
    logo: "./sponsor/hitbullseye.webp",
    website: "https://www.hitbullseye.com",
  },
];

const Sponsors = () => {
  return (
    <section id="sponsors" className="py-24 bg-background overflow-x-hidden">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {sponsors.map((sponsor, index) => (
            <motion.a
              key={sponsor.id}
              href={sponsor.website}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-white border border-border rounded-2xl p-6 flex flex-col items-center justify-center hover:shadow-lg transition-shadow cursor-pointer"
            >
              <div className="w-32 h-32 flex items-center justify-center">
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="max-w-full max-h-full object-contain scale-200"
                  onError={(e) => {
                    // Fallback if image fails to load
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = `<div class="w-16 h-16 rounded-2xl bg-primary-light flex items-center justify-center text-primary font-bold text-xl">${sponsor.name.charAt(0)}</div>`;
                    }
                  }}
                />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
