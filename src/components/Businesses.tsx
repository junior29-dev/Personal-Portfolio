import { motion } from "framer-motion";
import { ArrowUpRight, Building2, Globe, Layers } from "lucide-react";

export default function Businesses() {
  return (
    <section id="businesses" className="relative py-28 lg:py-36 px-6 lg:px-10 bg-ink-800/40 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-12"
        >
          <p className="section-eyebrow mb-4">BPM Holdings</p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold">
            One company, multiple brands
          </h2>
          <p className="mt-4 text-mist-300 text-lg leading-relaxed">
            BPM Holdings is a technology holding company built on the belief
            that great software and great business grow together. We operate
            across multiple verticals under a single engineering standard —
            shipping products that are reliable, purposeful, and built to last.
          </p>
        </motion.div>

        {/* BPM Holdings showcase block */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="glass rounded-2xl p-8 lg:p-12 flex flex-col lg:flex-row items-start lg:items-center gap-8 border border-white/5 hover:-translate-y-1 transition-transform duration-300"
          style={{ boxShadow: "0 0 0 1px #3B6CF622, 0 24px 60px -12px #3B6CF614" }}
        >
          {/* Logo mark */}
          <div className="shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center"
            style={{ background: "linear-gradient(135deg, #3B6CF622, #8B5CF622)", border: "1px solid #3B6CF633" }}>
            <Building2 size={28} className="text-signal-cyan" />
          </div>

          {/* Body */}
          <div className="flex-1 space-y-4">
            <div>
              <h3 className="font-display font-semibold text-2xl">BPM Holdings</h3>
              <p className="font-mono text-xs mt-1 text-signal-cyan tracking-wide">Technology Holding Company · Est. 2025</p>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              <div className="flex items-start gap-3">
                <Layers size={15} className="text-signal-cyan mt-0.5 shrink-0" />
                <p className="text-sm text-mist-300 leading-relaxed">
                  Multiple brands. One engineering standard. Every product we ship is built to be reliable, purposeful, and scalable.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Globe size={15} className="text-signal-cyan mt-0.5 shrink-0" />
                <p className="text-sm text-mist-300 leading-relaxed">
                  Operating across web, fintech, education, and career tech — solving real problems for real people.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <a
            href="https://bpmholdings.co.za"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium text-white transition-all duration-200 hover:brightness-110 hover:shadow-glow"
            style={{ background: "linear-gradient(135deg, #3B6CF6, #8B5CF6)" }}
          >
            Visit BPM Holdings <ArrowUpRight size={15} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
