import Image from "next/image";
import { ArrowDown, Mail } from "lucide-react";
import { SOCIALS } from "@/constants";

const HEADLINE = ["I build scalable", "systems & clean", "user experiences."];

export default function Hero() {
  return (
    <section
      id="top"
      className="grid lg:min-h-svh lg:grid-cols-[minmax(0,1fr)_42%]"
    >
      <div className="flex flex-col justify-between gap-16 px-5 pb-12 pt-7 sm:px-8 lg:px-12 lg:pb-12 lg:pt-10">
        <div className="fade-up flex items-baseline justify-between gap-6">
          <p className="text-lg font-semibold tracking-tight">Benard Ndiritu</p>
          <ul className="hidden gap-6 text-sm text-muted sm:flex">
            {SOCIALS.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline hover:text-ink"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:pb-20">
          <h1 className="display text-[clamp(1.75rem,9.2vw,4.75rem)] lg:text-[clamp(3rem,5vw,6.5rem)]">
            {HEADLINE.map((line, i) => (
              <span key={line} className="line-mask">
                <span style={{ animationDelay: `${0.1 + i * 0.09}s` }}>
                  {line}{" "}
                </span>
              </span>
            ))}
          </h1>

          <p
            className="fade-up mt-8 max-w-[34rem] text-lg leading-relaxed text-muted md:text-xl"
            style={{ animationDelay: "0.45s" }}
          >
            Backend-focused engineer building production-grade web applications
            using{" "}
            <span className="font-medium text-ink">
              React, Node.js, Django and AWS.
            </span>
          </p>

          <div
            className="fade-up mt-10 flex flex-wrap gap-3"
            style={{ animationDelay: "0.55s" }}
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2.5 rounded-full bg-suit px-6 py-3.5 font-medium text-white transition-colors hover:bg-ink"
            >
              See projects
              <ArrowDown
                size={18}
                aria-hidden
                className="transition-transform group-hover:translate-y-0.5"
              />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2.5 rounded-full border border-ink/25 px-6 py-3.5 font-medium transition-colors hover:border-ink hover:bg-ink hover:text-white"
            >
              <Mail size={18} aria-hidden /> Contact
            </a>
          </div>

          <ul
            className="fade-up mt-10 flex flex-wrap gap-x-6 gap-y-2 text-muted sm:hidden"
            style={{ animationDelay: "0.65s" }}
          >
            {SOCIALS.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block py-1 underline decoration-line underline-offset-4"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="unveil relative aspect-[4/5] overflow-hidden bg-suit sm:aspect-square lg:aspect-auto">
        <div className="settle absolute inset-0">
          <Image
            src="/portrait.jpg"
            alt="Benard Ndiritu in a navy three-piece suit"
            fill
            preload
            sizes="(min-width: 1024px) 42vw, 100vw"
            className="object-cover object-[50%_18%]"
          />
        </div>
      </div>
    </section>
  );
}
