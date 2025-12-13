import { motion } from "framer-motion";
import { Mail, Phone, MapPin, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "info@hultprize-nith.com",
    href: "mailto:info@hultprize-nith.com",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+91 98765 43210",
    href: "tel:+919876543210",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "National Institute of Technology Hamirpur, Himachal Pradesh, India",
    href: null,
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-24 hero-gradient">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="section-badge mx-auto mb-6">
            <MessageSquare className="w-4 h-4" />
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Contact Us</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions? Reach out to us or register your team below
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {contactInfo.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="icon-badge shrink-0">
                  <item.icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                  {item.href ? (
                    <a href={item.href} className="text-primary hover:underline">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-muted-foreground">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card rounded-3xl p-8 shadow-lg border border-border"
          >
            <h3 className="text-2xl font-bold text-foreground mb-6">Quick Registration</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <Input
                  type="email"
                  placeholder="your@email.com"
                  className="rounded-xl h-12"
                />
              </div>
              <Button className="w-full rounded-xl h-12 text-base">Register Now</Button>
              <p className="text-xs text-muted-foreground text-center">
                By registering, you agree to our Code of Conduct and terms of participation.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
