// Lightweight inline brand marks (lucide-react no longer ships these).
// Same 24x24 viewBox / stroke conventions as lucide-react for visual consistency.
import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

const base = (size = 16) => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "currentColor",
});

export function GithubIcon({ size, ...props }: IconProps) {
  return (
    <svg {...base(size)} {...props}>
      <path d="M12 .5C5.65.5.5 5.66.5 12.02c0 5.09 3.29 9.4 7.86 10.93.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.52-1.34-1.28-1.7-1.28-1.7-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.77.12 3.06.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.4-5.27 5.69.42.36.78 1.07.78 2.16 0 1.56-.02 2.82-.02 3.2 0 .31.21.67.8.56A10.53 10.53 0 0 0 23.5 12c0-6.35-5.15-11.5-11.5-11.5Z" />
    </svg>
  );
}

export function LinkedinIcon({ size, ...props }: IconProps) {
  return (
    <svg {...base(size)} {...props}>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.11 20.45H3.56V9h3.55v11.45ZM22.22 0H1.77C.8 0 0 .78 0 1.75v20.5C0 23.22.8 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.75V1.75C24 .78 23.2 0 22.22 0Z" />
    </svg>
  );
}

export function XIcon({ size, ...props }: IconProps) {
  return (
    <svg {...base(size)} {...props}>
      <path d="M18.24 2.25h3.3l-7.2 8.23 8.47 11.27h-6.63l-5.2-6.8-5.94 6.8H1.73l7.7-8.8L1.35 2.25h6.8l4.7 6.22 5.4-6.22Zm-1.16 17.52h1.83L7.02 4.14H5.05l12.03 15.63Z" />
    </svg>
  );
}

export function InstagramIcon({ size, ...props }: IconProps) {
  return (
    <svg {...base(size)} {...props} fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="2.5" y="2.5" width="19" height="19" rx="5" />
      <circle cx="12" cy="12" r="4.3" />
      <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function WhatsappIcon({ size, ...props }: IconProps) {
  return (
    <svg {...base(size)} {...props}>
      <path d="M12.02 2C6.5 2 2 6.48 2 12c0 1.85.5 3.58 1.36 5.08L2 22l5.06-1.33A9.96 9.96 0 0 0 12.02 22C17.53 22 22 17.52 22 12S17.53 2 12.02 2Zm5.8 14.16c-.24.68-1.4 1.3-1.93 1.36-.5.06-1.06.28-3.5-.73-2.94-1.22-4.83-4.17-4.98-4.37-.14-.2-1.19-1.58-1.19-3.02s.75-2.14 1.02-2.43c.26-.29.57-.36.76-.36h.55c.18 0 .42-.03.64.49.24.56.8 1.94.87 2.08.07.14.12.31.02.5-.1.2-.15.31-.3.48-.14.17-.3.37-.43.5-.14.14-.29.29-.13.57.17.28.75 1.24 1.61 2.01 1.11 1 2.05 1.31 2.33 1.45.28.14.44.12.6-.07.17-.2.72-.83.91-1.12.19-.28.38-.23.64-.14.26.1 1.65.78 1.94.92.28.14.47.2.54.32.07.11.07.65-.17 1.33Z" />
    </svg>
  );
}
