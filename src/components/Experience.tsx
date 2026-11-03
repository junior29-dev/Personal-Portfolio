import { motion } from "framer-motion";
import { GraduationCap, Flag, Target, Briefcase } from "lucide-react";
import { timeline } from "../data/content";

const icons = {
  education: GraduationCap,
  milestone: Flag,
  goal: Target,
  experience: Briefcase,
};

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 lg:py-36 px-6 lg:px-10">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <p className="section-eyebrow mb-4">Experience & Education</p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold">
            The journey so far
          </h2>
        </motion.div>

        <div className="relative pl-8 sm:pl-10">
          <div className="absolute left-[7px] sm:left-[9px] top-2 bottom-2 w-px bg-gradient-to-b from-signal-blue via-signal-violet to-signal-cyan/40" />

          <div className="space-y-12">
            {timeline.map((item, i) => {
              const Icon = icons[item.kind];
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative"
                >
                  <span className="absolute -left-8 sm:-left-10 top-1 w-4 h-4 rounded-full bg-ink-900 border-2 border-signal-blue flex items-center justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-signal-cyan" />
                  </span>

                  <div className="glass rounded-xl p-5 sm:p-6">
                    <div className="flex items-center gap-3 mb-2">
                      <Icon size={16} className="text-signal-cyan" />
                      <span className="font-mono text-xs text-mist-500">{item.year}</span>
                    </div>
                    <h3 className="font-display font-semibold text-lg">{item.title}</h3>
                    <p className="text-sm text-mist-300 mt-2 leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
