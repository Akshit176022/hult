import { motion } from "framer-motion";
import { Mail, Phone, MapPin, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "iste.nith.ac.in",
    href: "mailto:iste.nith.ac.in",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+91 93683 05664",
    href: "tel:+919368305664",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "National Institute of Technology Hamirpur, Himachal Pradesh, India",
    href: "https://www.google.com/maps/place/National+Institute+of+Technology,+Hamirpur/@31.7084291,76.5273526,17z/data=!3m1!4b1!4m6!3m5!1s0x3904d5487e12c4a1:0x395f92d3a202a7d0!8m2!3d31.7084291!4d76.5273526!16zL20vMGNybnJ4?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D",
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
        </motion.div>


        <div className="grid place-items-center w-full mx-auto">
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
                  <h4 className="font-semibold text-foreground mb-1">
                    {item.title}
                  </h4>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-primary hover:underline"
                    >
                      {item.value}
                    </a>
                  ) : (
                      <p className="text-muted-foreground">
                        {item.value}
                      </p>
                    )}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
