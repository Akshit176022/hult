import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import useIsMobile from "../hooks/use-mobile";
import { ThemeToggle } from "./ThemeToggle";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Sponsors", href: "#sponsors" },
  { name: "Code of Conduct", href: "#conduct" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  // Close mobile menu when switching to desktop
  useEffect(() => {
    if (!isMobile) setIsOpen(false);
  }, [isMobile]);

  return (
    <>
      {/* Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-60 bg-pink-100/80 dark:bg-[hsl(280_25%_10%)]/80 backdrop-blur-md shadow-sm border-b border-border/50"
      >
        <div className="container mx-auto px-6 py-4 flex items-center justify-between relative">
          {/* LEFT: Logo */}
          <div className="flex items-center gap-3">
            {/* Mobile-only favicon */}
            <img
              src={isDark ? "/favicon-white.png" : "/favicon.png"}
              alt="Hult Logo"
              className="w-8 h-8 object-contain md:hidden scale-175"
            />

            <a
              href="#"
              className="text-2xl font-bold text-primary tracking-tight"
            >
              HULT PRIZE
            </a>
          </div>

          {/* CENTER: Logos + Divider (desktop only) */}
          <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center gap-3">
            <div className="w-10 h-10">
              <img
                 src={isDark ? "/hult/favicon-white.png" : "/hult/favicon.png"}
                alt="Hult Logo"
                className="w-full h-full pr-4 object-contain scale-400"
              />
            </div>

            <div className="h-8 w-px bg-border" />

            <div className="w-10 h-10">
              <img
                src="iste.png"
                alt="Logo 2"
                className="ml-6 w-full h-full object-contain scale-125"
              />
            </div>
          </div>

          {/* RIGHT: Desktop nav + mobile hamburger */}
          <div className="flex items-center gap-4">
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

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Hamburger / Close */}
            <button
              className="md:hidden z-70 text-foreground"
              onClick={() => setIsOpen((prev) => !prev)}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
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
              className="fixed inset-0 bg-black/40 dark:bg-black/60 z-40 md:hidden"
            />

            {/* Menu */}
            <motion.div
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="fixed top-0 left-0 right-0 bg-background z-50 md:hidden pt-24 pb-8 px-6 shadow-lg"
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

