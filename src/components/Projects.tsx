import { motion } from "framer-motion";
import { GithubIcon } from "./icons/BrandIcons";
import { projects } from "../data/content";

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 lg:py-36 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-14"
        >
          <p className="section-eyebrow mb-4">Featured Projects</p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold">
            Things I've shipped
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group glass rounded-2xl p-6 hover:-translate-y-1.5 hover:shadow-glow transition-all duration-300"
            >
              <h3 className="font-display font-semibold text-lg">
                {project.title}
              </h3>

              <p className="mt-3 text-sm text-mist-300 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-5">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-[11px] px-2 py-1 rounded-md bg-white/5 text-signal-cyan border border-white/5"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 mt-6 pt-5 border-t border-white/5">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-mist-300 hover:text-mist-100 transition-colors"
                >
                  <GithubIcon size={16} /> Code
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}