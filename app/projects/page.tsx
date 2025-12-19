'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaTimes, FaBolt, FaCode, FaLayerGroup } from 'react-icons/fa';
import Link from 'next/link';
import clsx from 'clsx';

const projects = [
  {
    title: "postershop.store",
    repo: "amitg404/poster_mysore",
    shortDesc: "Vibe-based E-Commerce Platform",
    fullDesc: "A comprehensive full-stack e-commerce engine that redefines shopping through 'Vibe-based' personalization. Features a custom-built Pinterest scraper for inventory, tiered offer logic, and a browser-based image cropper for admin workflows.",
    tech: ["Next.js 16", "PostgreSQL", "Puppeteer", "Cloudinary", "Zustand"],
    highlight: "Shop by Vibe Engine",
    color: "from-purple-500 to-blue-500"
  },
  {
    title: "Audio Classifier YAMNet",
    repo: "amitg404/Audio_Classify_YAMNet",
    shortDesc: "Real-time Audio Intelligence",
    fullDesc: "An advanced auditory perception system capable of identifying 521+ sound events in real-time. Built on the YAMNet architecture, it processes audio streams instantly to categorize environmental sounds with high precision.",
    tech: ["TensorFlow", "YAMNet", "Python", "Streamlit", "LibROSA"],
    highlight: "521+ Class Detection",
    color: "from-green-400 to-cyan-500"
  },
  {
    title: "Classroom Tracking System",
    repo: "amitg404/Classroom_Tracking_System_YoloV8n",
    shortDesc: "Automated Vision Surveillance",
    fullDesc: "A smart monitoring solution leveraging YOLOv8n to track student movement and occupancy zones within a classroom environment. Provides real-time analytics and automated logging of spatial usage.",
    tech: ["YOLOv8", "OpenCV", "Computer Vision", "Python"],
    highlight: "Zone-based Analytics",
    color: "from-teal-400 to-emerald-500"
  },
  {
    title: "Local AI Sync",
    repo: "amitg404/Photos_Sync_Local_AI",
    shortDesc: "Privacy-First Knowledge Base",
    fullDesc: "An offline-first pipeline that syncs and analyzes personal photos using local LLMs (Mistral) and Vision models (Llava). Ensures complete data privacy while providing searchable insights into your image library.",
    tech: ["Mistral-7B", "Llava", "Ollama", "Local AI"],
    highlight: "100% Offline Processing",
    color: "from-blue-400 to-indigo-600"
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 min-h-screen">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl md:text-7xl font-bold mb-20 text-center tracking-tighter"
      >
        <span className="gradient-text">System</span>logs
      </motion.h1>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="group relative"
          >
            {/* Techy Border Effect */}
            <div className={clsx("absolute -inset-0.5 rounded-2xl bg-gradient-to-r opacity-50 group-hover:opacity-100 transition duration-500 blur-sm", project.color)}></div>
            
            <div className="relative h-full bg-[#030712] rounded-2xl p-8 border border-white/10 overflow-hidden flex flex-col">
              {/* Background Grid Pattern */}
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#4f4f4f 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

              <div className="relative z-10 flex-grow">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-3xl font-bold mb-1">{project.title}</h3>
                    <p className={clsx("text-transparent bg-clip-text bg-gradient-to-r font-mono text-sm uppercase tracking-widest", project.color)}>
                      {project.shortDesc}
                    </p>
                  </div>
                  <FaCode className="text-2xl text-gray-600 group-hover:text-white transition-colors" />
                </div>

                <p className="text-gray-400 mb-8 leading-relaxed line-clamp-3">
                  {project.fullDesc}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.slice(0, 3).map(t => (
                    <span key={t} className="px-3 py-1 text-xs border border-white/10 rounded-full text-gray-300 font-mono">
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 3 && <span className="px-3 py-1 text-xs text-gray-500 font-mono">+{project.tech.length - 3}</span>}
                </div>
              </div>

              <div className="relative z-10 flex gap-4 mt-auto">
                <button 
                  onClick={() => setSelectedProject(project)}
                  className="flex-1 bg-white/5 hover:bg-white/10 border border-white/10 py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 group/btn"
                >
                  <FaBolt className={clsx("group-hover/btn:text-yellow-400 transition-colors")} />
                  Initialize
                </button>
                
                <Link 
                  href={`/skills?project=${encodeURIComponent(project.title)}`}
                  className="flex-1 bg-white/5 hover:bg-white/10 border border-white/10 py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 group/btn"
                >
                  <FaLayerGroup className="text-blue-400 group-hover/btn:scale-110 transition-transform" />
                  View Skills
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Dramatic Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(10px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 50, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 50, opacity: 0 }}
              className="w-full max-w-4xl bg-[#0a0a0a] border border-white/20 rounded-3xl overflow-hidden shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className={clsx("h-2 bg-gradient-to-r", selectedProject.color)}></div>
              
              <div className="p-8 md:p-12">
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-2">{selectedProject.title}</h2>
                    <p className="text-xl text-gray-400 font-mono">{selectedProject.shortDesc}</p>
                  </div>
                  <button onClick={() => setSelectedProject(null)} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                    <FaTimes className="text-2xl" />
                  </button>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-12">
                  <div className="md:col-span-2">
                    <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                      <FaExternalLinkAlt className="text-blue-400" />
                      System Architecture
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-lg">
                      {selectedProject.fullDesc}
                    </p>
                  </div>
                  
                  <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                    <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Core Stack</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map(t => (
                         <span key={t} className="px-3 py-1 bg-black/50 border border-white/10 rounded text-sm text-blue-300 font-mono">
                           {t}
                         </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex justify-end gap-4">
                  <a 
                    href={`https://github.com/${selectedProject.repo}`}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition-colors"
                  >
                    <FaGithub className="text-xl" />
                    Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
