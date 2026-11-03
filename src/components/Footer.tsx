import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, XIcon, InstagramIcon } from "./icons/BrandIcons";
import { nav, contactLinks } from "../data/content";

const socialIcons = {
  Github: GithubIcon,
  Linkedin: LinkedinIcon,
  Twitter: XIcon,
  Instagram: InstagramIcon,
  Mail,
};

export default function Footer() {
  const year = new Date().getFullYear();
  const socials = contactLinks.filter((l) =>
    ["GitHub", "LinkedIn", "X (Twitter)", "Instagram", "Email"].includes(l.label)
  );

  const goTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/5 bg-ink-950 px-6 lg:px-10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-[1.2fr_1fr_1fr] gap-10">
          <div>
            <p className="font-display font-semibold text-lg">
              Boipelo Madiba<span className="text-gradient">.</span>
            </p>
            <p className="mt-3 text-sm text-mist-300 max-w-xs leading-relaxed">
              Building innovative technology that creates real-world impact
              through BPM Holdings.
            </p>
          </div>

          <div>
            <p className="font-mono text-xs text-mist-500 uppercase tracking-wider mb-4">Navigate</p>
            <ul className="space-y-2">
              {nav.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => goTo(item.id)}
                    className="text-sm text-mist-300 hover:text-mist-100 transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-xs text-mist-500 uppercase tracking-wider mb-4">Connect</p>
            <div className="flex flex-wrap gap-3">
              {socials.map((s) => {
                const Icon = socialIcons[s.icon as keyof typeof socialIcons];
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center hover:bg-signal-blue/20 hover:text-signal-cyan transition-colors"
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-mist-500">© {year} Boipelo Prince Madiba. All rights reserved.</p>
          <p className="text-xs text-mist-500 font-mono">BPM Holdings</p>
        </div>
      </div>
    </footer>
  );
}
