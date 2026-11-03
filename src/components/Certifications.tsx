import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { certifications } from "../data/content";

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-28 lg:py-36 px-6 lg:px-10 bg-ink-800/40">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-14"
        >
          <p className="section-eyebrow mb-4">Certifications</p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold">
            Verified knowledge
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass rounded-2xl p-6 flex items-start gap-4 hover:bg-white/8 transition-colors"
            >
              <div className="w-11 h-11 shrink-0 rounded-lg bg-white/5 flex items-center justify-center">
                <Award size={20} className="text-signal-cyan" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-base leading-snug">{cert.name}</h3>
                <p className="text-sm text-mist-300 mt-1">{cert.issuer}</p>
                <p className="font-mono text-xs text-mist-500 mt-1">{cert.date}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
