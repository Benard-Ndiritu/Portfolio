"use client";
import { PROJECTS } from "@/constants";
import { Github, Linkedin, Twitter, ExternalLink,Instagram, Mail, FileText } from "lucide-react";
import { motion } from "framer-motion"; // npm i framer-motion
import Image from "next/image";



export default function Portfolio() {
  return (
    <main className="relative min-h-screen bg-[#0a0a0a] text-white selection:bg-blue-500/30 overflow-hidden">

      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.1),_transparent_60%)]" />

      
      {/* 1. HERO SECTION */}
      <section className="max-w-5xl mx-auto px-6 pt-32 pb-20">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row items-center justify-between gap-12"
        >
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
            I build scalable systems & clean user experiences.
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mb-8 leading-relaxed">
            Backend-focused engineer building production-grade web applications using
            <span className="text-white"> React, Node.js, Django and AWS.</span>
          </p>
          
          <div className="flex gap-4">
            {/* Social Links */}
            <div className="flex gap-6 mt-8 text-gray-400">
              <a
                href="https://github.com/Benard-Ndiritu"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-all hover:scale-110"
              >
                <Github size={22} />
              </a>

              <a
                href="https://linkedin.com/in/benard-ndiritu"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-all hover:scale-110"
              >
                <Linkedin size={22} />
              </a>
              <a
                href="https://instagram.com/mirror_core"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-all hover:scale-110"
              >
                <Instagram size={22} />
              </a>


              <a
                href="https://x.com/Caspianqman"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-all hover:scale-110"
              >
                <Twitter size={22} />
              </a>
            </div>

            <a
              href="/Benard_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-medium transition-all hover:scale-105 hover:shadow-lg"
            >
              <FileText size={20} /> Resume
            </a>

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=ndiritubenard99@gmail.com&su=Portfolio Inquiry&body=Hello Benard,"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-gray-700 px-6 py-3 rounded-full font-medium transition-all hover:bg-gray-900 hover:scale-105"
          >
            <Mail size={20} /> Contact
          </a>
          </div>
        <div className="relative w-56 h-56 md:w-72 md:h-72 mx-auto mt-12 overflow-hidden rounded-2xl group">
        {/* Optional glow behind image */}
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 blur-3xl opacity-60 transition-all group-hover:opacity-80" />

        {/* Profile Image */}
        <Image
          src="/profile.jpg"
          alt="Benard Ndiritu"
          fill
          className="object-cover object-top transition-transform duration-500 ease-in-out group-hover:scale-105"
          priority
        />
        </div>

          </div>
        </motion.div>
      </section>

            {/* TECH STACK */}
      <section className="max-w-5xl mx-auto px-6 py-20 border-t border-gray-900">
        <h2 className="text-3xl font-bold mb-12">Tech Stack</h2>

        <div className="flex flex-wrap gap-4">
          {["React", "Next.js", "Node.js", "PostgreSQL", "AWS", "Docker","Django"].map(
            (tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-gray-900 border border-gray-800 rounded-full text-sm hover:border-blue-500/40 transition"
              >
                {tech}
              </span>
            )
          )}
        </div>
      </section>


      {/* 2. PROJECTS GRID */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div 
              key={index}
              className="bg-[#111] border border-gray-800 rounded-2xl overflow-hidden transition-all hover:-translate-y-1 hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]"
            >
            <div className="relative h-48">
              {project.image ? (
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-blue-900/20 to-purple-900/20 flex items-center justify-center text-gray-500 text-sm">
                  No Preview Available
                </div>
              )}
          </div>

              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map(t => (
                    <span key={t} className="text-xs font-mono bg-gray-900 text-blue-400 px-2 py-1 rounded border border-blue-500/20">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a href={project.github} className="text-gray-400 hover:text-white transition"><Github size={20} /></a>
                  <a href={project.link} className="text-gray-400 hover:text-white transition"><ExternalLink size={20} /></a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. FOOTER */}
      <footer className="max-w-5xl mx-auto px-6 py-20 border-t border-gray-900 text-center text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} Benard Ndiritu</p>
      </footer>
    </main>
  );
}