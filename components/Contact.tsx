import { Mail } from "lucide-react";
import CopyEmail from "@/components/CopyEmail";
import { EMAIL, GMAIL_COMPOSE, SOCIALS } from "@/constants";

export default function Contact() {
  return (
    <footer
      id="contact"
      className="flex flex-col justify-between rounded-t-[2rem] bg-ink px-5 pb-28 pt-16 text-white lg:min-h-[88svh] sm:px-8 md:pt-24 lg:rounded-t-[3rem] lg:px-12"
    >
      <div>
        <h2 className="text-lg text-white/70 md:text-xl">Contact</h2>

        <a
          href={`mailto:${EMAIL}`}
          className="display mt-5 block w-fit text-[clamp(1.2rem,6.1vw,6rem)] transition-colors hover:text-ochre"
        >
          {EMAIL}
        </a>

        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href={GMAIL_COMPOSE}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-full bg-ochre px-6 py-3.5 font-semibold text-ink transition-colors hover:bg-white"
          >
            <Mail size={18} aria-hidden /> Write in Gmail
          </a>
          <CopyEmail />
        </div>
      </div>

      <div className="mt-20 flex flex-col gap-6 border-t border-white/15 pt-8 text-white/70 sm:flex-row sm:items-center sm:justify-between md:mt-28">
        <p>© {new Date().getFullYear()} Benard Ndiritu</p>
        <ul className="flex flex-wrap gap-x-7 gap-y-2">
          {SOCIALS.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline inline-block py-1 hover:text-white"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
