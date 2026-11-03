import { motion } from "framer-motion";
import { skillGroups } from "../data/content";

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 lg:py-36 px-6 lg:px-10 bg-ink-800/40">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-14"
        >
          <p className="section-eyebrow mb-4">Skills</p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold">
            The stack behind the work
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: gi * 0.06 }}
              className="glass rounded-2xl p-6 hover:shadow-glow transition-shadow"
            >
              <h3 className="font-display font-semibold text-lg">{group.title}</h3>
              <p className="text-xs text-mist-500 mt-1 mb-5 font-mono">{group.blurb}</p>

              <div className="space-y-4">
                {group.skills.map((skill, si) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="text-mist-100">{skill.name}</span>
                      <span className="font-mono text-mist-500 text-xs">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, delay: 0.1 + si * 0.06, ease: "easeOut" }}
                        className="h-full rounded-full bg-gradient-to-r from-signal-blue to-signal-violet"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
