import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MessageCircle, MapPin, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon, XIcon, InstagramIcon } from "./icons/BrandIcons";
import { contactLinks } from "../data/content";

const iconMap = {
  Mail,
  Phone,
  MessageCircle,
  Github: GithubIcon,
  Linkedin: LinkedinIcon,
  Twitter: XIcon,
  Instagram: InstagramIcon,
};

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="relative py-28 lg:py-36 px-6 lg:px-10 bg-ink-800/40">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-14"
        >
          <p className="section-eyebrow mb-4">Contact</p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold">
            Let's build something
          </h2>
          <p className="mt-4 text-mist-300 text-lg">
            Open to internships, freelance projects, collaborations, and software
            engineering & devOps opportunities.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-8">
          <div className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-3">
              {contactLinks.map((link, i) => {
                const Icon = iconMap[link.icon as keyof typeof iconMap];
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="glass rounded-xl p-4 flex items-center gap-3 hover:bg-white/8 transition-colors group"
                  >
                    <span className="w-9 h-9 shrink-0 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-signal-blue/20 transition-colors">
                      <Icon size={16} className="text-signal-cyan" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs text-mist-500">{link.label}</span>
                      <span className="block text-sm text-mist-100 truncate">{link.value}</span>
                    </span>
                  </motion.a>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="glass rounded-xl p-5 flex items-center gap-4"
            >
              <MapPin size={20} className="text-signal-cyan shrink-0" />
              <div>
                <p className="text-sm text-mist-100">Based in South Africa - Pretoria</p>
                <p className="text-xs text-mist-500 mt-0.5">Available for remote and on-site work</p>
              </div>
            </motion.div>
          </div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass rounded-2xl p-6 sm:p-8 space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-xs text-mist-500 mb-1.5">Name</label>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder="Your name"
                  className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-2.5 text-sm text-mist-100 placeholder:text-mist-500 focus:border-signal-blue outline-none transition-colors"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs text-mist-500 mb-1.5">Email</label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-2.5 text-sm text-mist-100 placeholder:text-mist-500 focus:border-signal-blue outline-none transition-colors"
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-xs text-mist-500 mb-1.5">Subject</label>
              <input
                id="subject"
                type="text"
                placeholder="What's this about?"
                className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-2.5 text-sm text-mist-100 placeholder:text-mist-500 focus:border-signal-blue outline-none transition-colors"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-xs text-mist-500 mb-1.5">Message</label>
              <textarea
                id="message"
                required
                rows={4}
                placeholder="Tell me a bit about the opportunity or project."
                className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-2.5 text-sm text-mist-100 placeholder:text-mist-500 focus:border-signal-blue outline-none transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-signal-blue to-signal-violet px-6 py-3 text-sm font-medium text-white shadow-glow hover:opacity-90 transition-opacity"
            >
              <Send size={16} /> {sent ? "Message sent" : "Send message"}
            </button>
            {sent && (
              <p className="text-xs text-signal-cyan text-center">
                Thanks — this demo form doesn't send yet, but your message layout works.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
