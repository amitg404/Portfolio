'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-4">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="order-2 md:order-1 space-y-6"
        >
          <div className="inline-block glass-card px-4 py-1 rounded-full text-blue-300 text-sm font-mono mb-2">
            ✨ AI & Machine Learning Engineer
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Hello, I&apos;m <br />
            <span className="gradient-text">Amit G</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-lg leading-relaxed">
            A passionate developer orchestrating intelligence through code. 
            Specializing in **Deep Learning**, **Computer Vision**, and **Autonomous Agents**.
          </p>
          <div className="flex gap-4 pt-4">
            <Link href="/projects" className="glass-card px-8 py-3 rounded-full hover:bg-blue-600/20 transition-all border border-blue-500/50 text-blue-400 font-semibold">
              View Work
            </Link>
            <a href="https://github.com/amitg404" target="_blank" rel="noopener noreferrer" className="glass-card px-8 py-3 rounded-full hover:bg-white/5 transition-all">
              GitHub
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="order-1 md:order-2 flex justify-center relative"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white/10 glass-card">
             <Image 
               src="/Amit.jpg" 
               alt="Amit G" 
               fill
               className="object-cover hover:scale-110 transition-transform duration-700"
               priority
             />
          </div>
        </motion.div>

      </div>
    </div>
  );
}
