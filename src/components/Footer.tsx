import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const quickLinks = [
  { name: "About", href: "#about" },
  { name: "Sponsors", href: "#sponsors" },
  { name: "Code of Conduct", href: "#conduct" },
  { name: "Contact", href: "#contact" },
];

const socialLinks = [
  { name: "Facebook", href: "#" },
  { name: "Instagram", href: "#" },
  { name: "LinkedIn", href: "#" },
  { name: "Twitter", href: "#" },
];

const Footer = () => {
  return (
    <footer className="bg-footer text-footer-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-xl font-bold text-primary mb-4">Hult Prize</h3>
            <p className="text-sm leading-relaxed">
              Empowering student entrepreneurs to solve global challenges through social
              innovation.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-background mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-background transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-background mb-4">Social</h4>
            <ul className="space-y-3">
              {socialLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-background transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-background mb-4">Newsletter</h4>
            <p className="text-sm mb-4">Stay updated with latest news and updates.</p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-transparent border-footer-foreground/30 text-footer-foreground placeholder:text-footer-foreground/50 rounded-lg"
              />
              <Button size="sm" className="rounded-lg shrink-0">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-footer-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm">
            © 2024 Hult Prize at NIT Hamirpur. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm hover:text-background transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm hover:text-background transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
