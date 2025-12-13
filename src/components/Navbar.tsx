import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useIsMobile from "../hooks/use-mobile";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Sponsors", href: "#sponsors" },
  { name: "Code of Conduct", href: "#conduct" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();

  // Close mobile menu when switching to desktop
  useEffect(() => {
    if (!isMobile) {
      setIsOpen(false);
    }
  }, [isMobile]);

  return (
    <>
      {/* Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={"fixed top-0 left-0 right-0 z-[60] transition-all duration-300 bg-background/95 backdrop-blur-md shadow-sm"}
      >
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">

<div className="flex items-center gap-5">
  {/* Text */}
  <a href="#" className="text-2xl font-bold text-primary tracking-tight">
    HULT PRIZE
  </a>

  {/* Images + Divider */}
  <div className="flex items-center gap-3">
    {/* Image 1 */}
    <div className="w-8 h-8 md:w-10 md:h-10">
      <img
        src="favicon.webp"
        alt="Logo 1"
        className="w-full h-full object-contain"
      />
    </div>

    {/* Divider */}
    <div className="h-8 w-px bg-border" />

    {/* Image 2 */}
    <div className="w-8 h-8 md:w-10 md:h-10">
      <img
        src="iste.webp"
        alt="Logo 2"
        className="w-full h-full object-contain"
      />
    </div>
  </div>
</div>
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-foreground/80 hover:text-foreground font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Hamburger / Close Button */}
          <button
            className={`md:hidden z-[70] ${
              scrolled ? "text-foreground" : "text-black dark:text-white"
            }`}
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 transition-transform duration-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                // ✕ Close icon
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                // ☰ Hamburger icon
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black z-[40] md:hidden"
            />

            {/* Slide-down Menu */}
            <motion.div
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="fixed top-0 left-0 right-0 bg-background z-[50] md:hidden pt-24 pb-8 px-6 shadow-lg"
            >
              <div className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-medium text-foreground/90 hover:text-foreground"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

