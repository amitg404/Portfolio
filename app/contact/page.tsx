'use client';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';

export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20 min-h-[70vh] flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-8">
          Get in <span className="gradient-text">Touch</span>
        </h1>
        <p className="text-xl text-gray-400 mb-12">
          I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
        </p>

        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {/* Email */}
          <a href="mailto:amitgururaj2003@gmail.com" className="glass-card p-6 rounded-2xl flex items-center gap-4 hover:bg-white/5 transition-colors group">
            <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-400 text-xl group-hover:scale-110 transition-transform">
              <FaEnvelope />
            </div>
            <div className="text-left">
              <p className="text-sm text-gray-500">Email</p>
              <p className="font-semibold break-all">amitgururaj2003@gmail.com</p>
            </div>
          </a>

          {/* Phone/WhatsApp */}
           <a href="https://wa.me/917975628257" target="_blank" rel="noopener noreferrer" className="glass-card p-6 rounded-2xl flex items-center gap-4 hover:bg-white/5 transition-colors group">
            <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center text-green-400 text-xl group-hover:scale-110 transition-transform">
              <FaWhatsapp />
            </div>
            <div className="text-left">
              <p className="text-sm text-gray-500">Phone / WhatsApp</p>
              <p className="font-semibold">(+91) 7975628257</p>
            </div>
          </a>

          {/* LinkedIn */}
           <a href="https://www.linkedin.com/in/amit-g-79b29024a/" target="_blank" rel="noopener noreferrer" className="glass-card p-6 rounded-2xl flex items-center gap-4 hover:bg-white/5 transition-colors group">
            <div className="w-12 h-12 bg-blue-700/20 rounded-full flex items-center justify-center text-blue-500 text-xl group-hover:scale-110 transition-transform">
              <FaLinkedin />
            </div>
            <div className="text-left">
              <p className="text-sm text-gray-500">LinkedIn</p>
              <p className="font-semibold">Amit G</p>
            </div>
          </a>

           {/* GitHub */}
           <a href="https://github.com/amitg404" target="_blank" rel="noopener noreferrer" className="glass-card p-6 rounded-2xl flex items-center gap-4 hover:bg-white/5 transition-colors group">
            <div className="w-12 h-12 bg-gray-700/20 rounded-full flex items-center justify-center text-gray-300 text-xl group-hover:scale-110 transition-transform">
              <FaGithub />
            </div>
            <div className="text-left">
              <p className="text-sm text-gray-500">GitHub</p>
              <p className="font-semibold">amitg404</p>
            </div>
          </a>
        </div>
      </motion.div>
    </div>
  );
}
