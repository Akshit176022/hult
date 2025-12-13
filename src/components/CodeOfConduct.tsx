import { motion } from "framer-motion";
import { BookOpen, CheckCircle2, XCircle } from "lucide-react";

const dos = [
  "Respect diverse backgrounds and perspectives",
  "Collaborate and support fellow participants",
  "Maintain academic and professional integrity",
  "Communicate honestly and transparently",
  "Contribute positively to the community",
  "Seek mentorship and share knowledge",
];

const donts = [
  "Plagiarism or intellectual property theft",
  "Discrimination or harassment of any kind",
  "Dishonest or fraudulent behavior",
  "Violation of rules and regulations",
  "Conflict of interest without disclosure",
  "Disrespectful conduct toward others",
];

const CodeOfConduct = () => {
  return (
    <section id="conduct" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="section-badge mx-auto mb-6">
            <BookOpen className="w-4 h-4" />
            <span>Guidelines</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Code of Conduct
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Upholding integrity, respect, and excellence in all interactions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <CheckCircle2 className="w-8 h-8 text-success" />
              <h3 className="text-2xl font-bold text-foreground">Do's</h3>
            </div>
            <ul className="space-y-4">
              {dos.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <XCircle className="w-8 h-8 text-destructive" />
              <h3 className="text-2xl font-bold text-foreground">Don'ts</h3>
            </div>
            <ul className="space-y-4">
              {donts.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-secondary rounded-3xl p-8"
        >
          <h4 className="text-xl font-bold text-foreground mb-3">Enforcement</h4>
          <p className="text-muted-foreground leading-relaxed">
            Violations of this Code of Conduct may result in disqualification from the
            competition and other appropriate actions. We are committed to ensuring a safe,
            inclusive, and professional environment for all participants.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CodeOfConduct;
