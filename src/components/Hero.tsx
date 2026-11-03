import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-ink-900"
    >
      {/* signature background: a faint circuit/architecture diagram, since this is an engineer's page */}
      <div className="absolute inset-0 bg-grid-fade bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_40%,black_10%,transparent_75%)]" />

      <svg
        className="absolute inset-0 w-full h-full opacity-[0.35]"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#3B6CF6" />
            <stop offset="100%" stopColor="#8B5CF6" />
          </linearGradient>
        </defs>
        {[
          "M100,650 L340,650 L340,500 L560,500",
          "M1100,150 L860,150 L860,320 L620,320",
          "M120,120 L120,260 L300,260",
          "M1080,700 L900,700 L900,560",
        ].map((d, i) => (
          <motion.path
            key={i}
            d={d}
            stroke="url(#lineGrad)"
            strokeWidth="1.5"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, delay: 0.3 + i * 0.25, ease: "easeInOut" }}
          />
        ))}
      </svg>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 w-full grid lg:grid-cols-[1.3fr_0.7fr] gap-12 items-center">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="section-eyebrow mb-6"
          >
            Portfolio — 2026
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-5xl sm:text-6xl lg:text-7xl font-semibold leading-[1.05] tracking-tight"
          >
            Boipelo Prince Madiba
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 font-mono text-sm sm:text-base text-mist-300 flex flex-wrap gap-x-2 gap-y-1"
          >
            <span>Software Engineer</span>
            <span className="text-signal-cyan">•</span>
            <span>Quant Developer</span>
            <span className="text-signal-cyan">•</span>
            <span>DevOps</span>
            <span className="text-signal-cyan">•</span>
            <span>Entrepreneur</span>
            <span className="text-signal-cyan">•</span>
            <span>Founder of BPM Holdings</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-6 max-w-xl text-mist-300 text-base sm:text-lg"
          >
            I build software that ships, and businesses that last. Currently studying
            Computer Science & Infomatics and running BPM Holdings, a group of four technology and
            media brands.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <button
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-signal-blue to-signal-violet px-6 py-3 text-sm font-medium text-white shadow-glow transition-transform hover:scale-[1.03]"
            >
              Explore my work
              <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
            <button
              onClick={() => document.getElementById("businesses")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-medium text-mist-100 hover:bg-white/10 transition-colors"
            >
              Meet BPM Holdings
            </button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="hidden lg:flex flex-col gap-4 animate-float"
        >
          <div className="glass rounded-2xl p-5">
            <p className="font-mono text-xs text-mist-500">status.json</p>
            <p className="mt-2 font-mono text-sm text-signal-cyan">"available_for": "internships, freelance, collabs"</p>
          </div>
          <div className="glass rounded-2xl p-5">
            <p className="font-mono text-xs text-mist-500">based_in</p>
            <p className="mt-2 text-mist-100">South Africa</p>
          </div>
        </motion.div>
      </div>

      <motion.button
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
        aria-label="Scroll to About section"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-mist-500 hover:text-mist-100 transition-colors"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown size={20} />
      </motion.button>
    </section>
  );
}
