import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { nav } from "../data/content";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = nav.map((n) => document.getElementById(n.id)).filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const goTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-glass" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-10 h-16">
        <button
          onClick={() => goTo("home")}
          className="font-display font-semibold text-lg tracking-tight text-mist-100"
        >
          Boipelo Madiba<span className="text-gradient">.</span>
        </button>

        <ul className="hidden lg:flex items-center gap-1 font-mono text-[13px]">
          {nav.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => goTo(item.id)}
                className={`relative px-3 py-2 rounded-full transition-colors ${
                  active === item.id ? "text-mist-100" : "text-mist-500 hover:text-mist-300"
                }`}
              >
                {active === item.id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-white/8 border border-white/10"
                    transition={{ type: "spring", duration: 0.5 }}
                  />
                )}
                <span className="relative">{item.label}</span>
              </button>
            </li>
          ))}
        </ul>

        <button
          onClick={() => goTo("contact")}
          className="hidden lg:inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium bg-gradient-to-r from-signal-blue to-signal-violet text-white shadow-glow hover:opacity-90 transition-opacity"
        >
          Let's talk
        </button>

        <button
          aria-label="Toggle menu"
          className="lg:hidden text-mist-100"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden glass overflow-hidden"
          >
            <ul className="flex flex-col px-6 py-4 gap-1 font-mono text-sm">
              {nav.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => goTo(item.id)}
                    className={`w-full text-left px-3 py-3 rounded-lg ${
                      active === item.id ? "bg-white/8 text-mist-100" : "text-mist-500"
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
