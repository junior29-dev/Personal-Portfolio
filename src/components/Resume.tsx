import { motion } from "framer-motion";
import { FileText, Download, Eye } from "lucide-react";

export default function Resume() {
  return (
    <section id="resume" className="relative py-28 lg:py-36 px-6 lg:px-10">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="glass rounded-3xl p-8 sm:p-12 flex flex-col sm:flex-row items-start sm:items-center gap-8"
        >
          <div className="w-16 h-16 shrink-0 rounded-2xl bg-gradient-to-br from-signal-blue to-signal-violet flex items-center justify-center shadow-glow">
            <FileText size={28} className="text-white" />
          </div>

          <div className="flex-1">
            <p className="section-eyebrow mb-2">Resume</p>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold">
              Get the full picture
            </h2>
            <p className="mt-3 text-mist-300">
              Preview my CV in the browser or download a copy for your records —
              covers my education, projects, and experience in detail.
            </p>

            <div className="flex flex-wrap gap-4 mt-6">
              <a
                href="/resume/boipelo-junior-cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-medium hover:bg-white/10 transition-colors"
              >
                <Eye size={16} /> Preview CV
              </a>
              <a
                href="/resume/boipelo-Madiba-cv.pdf"
                download
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-signal-blue to-signal-violet px-6 py-3 text-sm font-medium text-white shadow-glow hover:opacity-90 transition-opacity"
              >
                <Download size={16} /> Download CV
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
