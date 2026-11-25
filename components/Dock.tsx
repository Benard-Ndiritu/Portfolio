"use client";

import { useEffect, useState } from "react";
import { RESUME } from "@/constants";

const LINKS = [
  { id: "projects", label: "Projects" },
  { id: "stack", label: "Stack" },
  { id: "contact", label: "Contact" },
];

/** Floating navigation, kept at the bottom of the screen within thumb reach. */
export default function Dock() {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      // Only the band around the middle of the viewport decides what's active.
      { rootMargin: "-45% 0px -50% 0px" },
    );
    for (const id of ["top", ...LINKS.map((l) => l.id)]) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="Main"
      className="fixed inset-x-0 bottom-4 z-50 flex justify-center px-2 md:bottom-6 pointer-events-none"
    >
      <ul className="pointer-events-auto flex items-center gap-0.5 rounded-full bg-ink p-1.5 text-[0.8125rem] font-medium sm:text-sm text-white shadow-[0_12px_40px_-8px_rgba(16,23,42,0.55)] ring-1 ring-white/15">
        {LINKS.map(({ id, label }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              aria-current={active === id ? "true" : undefined}
              className={`block rounded-full px-2.5 py-2.5 transition-colors min-[360px]:px-3 sm:px-4 ${
                active === id ? "bg-white/15" : "hover:bg-white/10"
              }`}
            >
              {label}
            </a>
          </li>
        ))}
        <li>
          <a
            href={RESUME}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 block rounded-full bg-ochre px-3 py-2.5 font-semibold text-ink transition-colors hover:bg-white sm:px-4"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}
