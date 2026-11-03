import { motion } from "framer-motion";
import { Code2, Rocket, GitBranch, TrendingUp } from "lucide-react";

const pillars = [
  { icon: GitBranch, label: "DevOps" },
  { icon: Code2, label: "Full-Stack Development" },
  { icon: TrendingUp, label: "Quant Development" },
  { icon: Rocket, label: "Business Innovation" },
];

export default function About() {
  return (
    <section id="about" className="relative py-28 lg:py-36 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[0.9fr_1.1fr] gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-eyebrow mb-4">About</p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold leading-tight">
            Engineering today, building
            <span className="text-gradient"> a company </span>
            for tomorrow.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-6"
        >
          <p className="text-mist-300 text-lg leading-relaxed">
            I'm an ambitious Computer Science student and tech geek, driven by
            what technology can do when it's pointed at a real problem. Most of my time
            goes into devOps, computer networks, full-stack development, and a small potion of quantitative development.
            The rest goes into building BPM Holdings, a company built
            around the idea that good software and good business should grow together.
          </p>
          <p className="text-mist-300 text-lg leading-relaxed">
            My goal isn't just to write code that works. It's to create digital
            products that people rely on, and a company that gives other builders a
            place to do the same.
          </p>

          <div className="grid grid-cols-2 gap-4 pt-4">
            {pillars.map((p, i) => (
              <motion.div
                key={p.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
                className="glass rounded-xl p-4 flex items-center gap-3 hover:bg-white/8 transition-colors"
              >
                <p.icon size={18} className="text-signal-cyan shrink-0" />
                <span className="text-sm text-mist-100">{p.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
