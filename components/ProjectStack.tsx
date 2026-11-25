"use client";

import { useRef, type FocusEvent, type RefObject } from "react";
import Image from "next/image";
import { ArrowUpRight, Code2 } from "lucide-react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionStyle,
  type MotionValue,
} from "framer-motion";
import { PROJECTS, type Project } from "@/constants";

/**
 * Each project is a full-colour panel. On large screens the panels are sticky
 * and slide over one another; on small screens they are a plain list.
 */
export default function ProjectStack() {
  // Progress is measured on the list, because sticky panels move while pinned.
  const listRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ["start start", "end start"],
  });

  return (
    <section
      id="projects"
      className="px-3 pb-24 pt-24 sm:px-5 md:pt-36 lg:px-6"
    >
      <div className="px-2 pb-10 sm:px-3 md:pb-16 lg:px-6">
        <h2 className="display text-[clamp(2.5rem,6vw,5.5rem)]">My Projects</h2>
      </div>

      <div ref={listRef} className="flex flex-col gap-4 lg:gap-[12vh]">
        {PROJECTS.map((project, i) => (
          <Panel
            key={project.title}
            project={project}
            index={i}
            progress={scrollYProgress}
            listRef={listRef}
          />
        ))}
      </div>
    </section>
  );
}

function Panel({
  project,
  index,
  progress,
  listRef,
}: {
  project: Project;
  index: number;
  progress: MotionValue<number>;
  listRef: RefObject<HTMLDivElement | null>;
}) {
  const reduceMotion = useReducedMotion();
  // Shrinks slightly while the next panel rises over it.
  const count = PROJECTS.length;
  const isLast = index === count - 1;
  const scale = useTransform(
    progress,
    [index / count, (index + 1) / count],
    [1, isLast || reduceMotion ? 1 : 0.95],
  );

  // A pinned panel can be hidden behind later ones. When keyboard focus lands
  // in it, scroll back to where it is on top.
  function revealOnFocus(event: FocusEvent<HTMLElement>) {
    const list = listRef.current;
    const panel = event.currentTarget;
    if (!list || !event.target.matches(":focus-visible")) return;
    if (getComputedStyle(panel).position !== "sticky") return;
    const gap = parseFloat(getComputedStyle(list).rowGap) || 0;
    const listTop = list.getBoundingClientRect().top + window.scrollY;
    const panelTop = listTop + index * (panel.offsetHeight + gap);
    window.scrollTo({
      top: panelTop - parseFloat(getComputedStyle(panel).top),
    });
  }

  const { tone, frame = "fill", focus } = project;
  const style = {
    "--shrink": scale, // applied on large screens only, via the class below
    backgroundColor: tone.bg,
    color: tone.fg,
    // Staggered so the edges of earlier panels stay visible on top.
    top: `${1 + index * 0.6}rem`,
  } as MotionStyle;

  return (
    <motion.article
      style={style}
      onFocus={revealOnFocus}
      className="grid origin-top gap-8 overflow-hidden rounded-[1.75rem] p-5 sm:p-8 lg:sticky lg:h-[min(44rem,calc(100svh-9.5rem))] lg:min-h-[28rem] lg:scale-(--shrink) lg:grid-cols-[minmax(0,1fr)_40%] lg:gap-12 lg:rounded-[2.25rem] lg:p-6 lg:pl-12"
    >
      <div className="order-2 flex flex-col justify-between gap-10 lg:order-1 lg:py-6">
        <div>
          <h3 className="display text-[clamp(2.1rem,5.8vw,6rem)]">
            {project.title}
          </h3>
          <p className="mt-5 max-w-[46ch] text-base leading-relaxed opacity-90 md:text-lg lg:mt-7">
            {project.description}
          </p>
        </div>

        <div>
          <ul
            aria-label="Built with"
            className="flex flex-wrap gap-x-5 gap-y-1 text-sm font-medium opacity-90 md:text-base"
          >
            {project.tech.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title}: live site`}
              className="group inline-flex items-center gap-2 rounded-full px-5 py-3 font-medium transition-opacity hover:opacity-85"
              style={{ backgroundColor: tone.fg, color: tone.bg }}
            >
              Live site
              <ArrowUpRight
                size={18}
                aria-hidden
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title}: source code on GitHub`}
              className="inline-flex items-center gap-2 rounded-full border border-current/40 px-5 py-3 font-medium transition-colors hover:border-current"
            >
              <Code2 size={18} aria-hidden /> Source
            </a>
          </div>
        </div>
      </div>

      <div className="group order-1 flex min-h-0 items-center lg:order-2">
        <div
          className={`relative w-full overflow-hidden rounded-2xl lg:rounded-3xl ${
            frame === "contain" ? "bg-white" : "bg-black/10"
          } ${
            frame === "wide"
              ? "aspect-[16/9]"
              : "aspect-[4/3] lg:aspect-auto lg:h-full"
          }`}
        >
          <Image
            src={project.image}
            alt=""
            fill
            sizes="(min-width: 1024px) 40vw, 100vw"
            style={{ objectPosition: focus }}
            className={`transition-transform duration-700 ease-out motion-reduce:transition-none ${
              frame === "contain"
                ? "object-contain p-6 group-hover:scale-105 lg:p-10"
                : "scale-[1.08] object-cover group-hover:scale-[1.13]"
            }`}
          />
        </div>
      </div>
    </motion.article>
  );
}
