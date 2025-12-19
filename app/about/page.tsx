'use client';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaBriefcase, FaHandHoldingHeart, FaTrophy, FaRocket, FaMicroscope } from 'react-icons/fa';

export default function About() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-6xl font-bold mb-20 text-center tracking-tight"
      >
        Origin <span className="gradient-text">Story</span>
      </motion.h1>

      <div className="space-y-24">
        
        {/* Experience Section */}
        <section>
          <div className="flex items-center gap-4 mb-12">
             <div className="p-3 bg-blue-500/10 rounded-xl text-blue-400">
               <FaBriefcase className="text-2xl" />
             </div>
             <h2 className="text-3xl font-bold">Experience</h2>
          </div>

          <div className="border-l-2 border-white/10 ml-6 space-y-12">
            
            {/* Excelsoft (Latest) */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative pl-12"
            >
              <span className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-purple-500 ring-4 ring-black"></span>
              <div className="glass-card p-8 rounded-2xl hover:bg-white/5 transition-colors">
                <div className="flex flex-wrap justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white">Software Engineer Intern</h3>
                    <p className="text-purple-400 font-semibold">Excelsoft Technologies</p>
                  </div>
                  <span className="text-sm text-gray-500 font-mono">Feb 2025 – May 2025</span>
                </div>
                <div className="text-gray-400 space-y-3 leading-relaxed">
                 <ul className="list-disc pl-5 space-y-2">
                    <li>Independently prototyped end-to-end ML workflows.</li>
                    <li>Worked on audio segmentation, spectrogram visualization, and confidence scoring techniques.</li>
                 </ul>
                </div>
              </div>
            </motion.div>

             {/* MSRIT */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative pl-12"
            >
              <span className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-teal-500 ring-4 ring-black"></span>
              <div className="glass-card p-8 rounded-2xl hover:bg-white/5 transition-colors">
                <div className="flex flex-wrap justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white">Research Intern</h3>
                    <p className="text-teal-400 font-semibold">M S Ramaiah Institute of Technology</p>
                  </div>
                  <span className="text-sm text-gray-500 font-mono">April 2024 – Nov 2024</span>
                </div>
                 <div className="text-gray-400 space-y-3 leading-relaxed">
                 <ul className="list-disc pl-5 space-y-2">
                    <li>Developed AI-based breast cancer detection models (CNNs).</li>
                    <li>Gained experience in rigorous research methodology and dataset analysis.</li>
                 </ul>
                </div>
              </div>
            </motion.div>

            {/* Qikk Automations */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative pl-12"
            >
              <span className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-blue-500 ring-4 ring-black"></span>
              <div className="glass-card p-8 rounded-2xl hover:bg-white/5 transition-colors">
                <div className="flex flex-wrap justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white">Marketing Intern</h3>
                    <p className="text-blue-400 font-semibold">Qikk Automations</p>
                  </div>
                  <span className="text-sm text-gray-500 font-mono">Sept 2023 – Feb 2024</span>
                </div>
                <div className="text-gray-400 space-y-3 leading-relaxed">
                  <p><strong className="text-white">Focus:</strong> Market Intelligence, Revenue Enablement, Client Conversion</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Drove end-to-end market and competitor intelligence, identifying high-value customer segments.</li>
                    <li>Owned product demos and technical consultations, bridging engineering capabilities with client needs.</li>
                    <li>Directly contributed to closing a <span className="text-green-400 font-mono">₹1.2 crore</span> enterprise deal with Bosch.</li>
                    <li>Strengthened SEO and digital visibility, improving inbound discovery.</li>
                  </ul>
                </div>
              </div>
            </motion.div>

          </div>
        </section>

        {/* Education Section */}
        <section>
          <div className="flex items-center gap-4 mb-12">
             <div className="p-3 bg-green-500/10 rounded-xl text-green-400">
               <FaGraduationCap className="text-2xl" />
             </div>
             <h2 className="text-3xl font-bold">Education</h2>
          </div>

          <div className="border-l-2 border-white/10 ml-6 space-y-12">

             {/* Bachelor's */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative pl-12"
            >
              <span className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-green-500 ring-4 ring-black"></span>
              <div className="glass-card p-8 rounded-2xl flex flex-col gap-6">
                 <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                         <h3 className="text-2xl font-bold text-white">Bachelors in Computer Science (AI & ML)</h3>
                         <p className="text-green-400">Vidyavardhaka College of Engineering</p>
                    </div>
                    <div className="text-right">
                         <p className="text-2xl font-bold text-white">8.3 CGPA</p>
                         <p className="text-xs text-gray-500 uppercase tracking-widest">Graduated Sept 2025</p>
                    </div>
                 </div>

                 {/* Achievements Grid */}
                 <div className="grid md:grid-cols-2 gap-6 pt-6 border-t border-white/10">
                    <div className="space-y-4">
                         <div className="flex items-center gap-3 text-yellow-400">
                             <FaTrophy /> <h4 className="font-bold text-white">Recognition</h4>
                         </div>
                         <ul className="list-disc pl-5 text-sm text-gray-400 space-y-1">
                             <li>Finalist at <strong className="text-white">IIT Bombay – NEC 2023</strong> (National Level).</li>
                             <li>2nd Place in Green Talk (Sustainability Idea Presentation).</li>
                             <li>1st Place in AI & ML Debate Competition.</li>
                         </ul>
                    </div>
                    <div className="space-y-4">
                         <div className="flex items-center gap-3 text-purple-400">
                             <FaRocket /> <h4 className="font-bold text-white">Innovation & Hackathons</h4>
                         </div>
                         <ul className="list-disc pl-5 text-sm text-gray-400 space-y-1">
                             <li>Participated in 5+ National-Level Hackathons.</li>
                             <li>Developed "Smart Traffic Management System" (Hack-N-Lead 2023).</li>
                             <li>3rd Place in MoE-backed Idea Generation Competition.</li>
                         </ul>
                    </div>
                    <div className="space-y-4">
                         <div className="flex items-center gap-3 text-teal-400">
                             <FaMicroscope /> <h4 className="font-bold text-white">Research & Impact</h4>
                         </div>
                         <ul className="list-disc pl-5 text-sm text-gray-400 space-y-1">
                             <li>Interned at MSRIT (Breast Cancer Detection using AI).</li>
                             <li>Presented MedScan at AIRCRTHI 2024 Conference.</li>
                             <li>IEEE CIS Chapter Leader & ASPERA Core Team Lead.</li>
                         </ul>
                    </div>
                    <div className="space-y-4">
                         <div className="flex items-center gap-3 text-blue-400">
                             <FaHandHoldingHeart /> <h4 className="font-bold text-white">Certifications</h4>
                         </div>
                         <ul className="list-disc pl-5 text-sm text-gray-400 space-y-1">
                             <li>3-month Robotics Training (HoloWorld).</li>
                             <li>Full Stack Development Certified.</li>
                             <li>German Language Course Completed.</li>
                         </ul>
                    </div>
                 </div>
              </div>
            </motion.div>

             {/* PUC */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative pl-12"
            >
              <span className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-gray-600 ring-4 ring-black"></span>
              <div className="glass-card p-8 rounded-2xl">
                 <div className="flex justify-between items-start mb-4">
                    <div>
                        <h3 className="text-xl font-bold text-white">Pre-University Course (PCMC)</h3>
                        <p className="text-gray-400">Institute of Mathematics and Science</p>
                    </div>
                    <span className="font-mono text-gray-500">2021</span>
                 </div>
                 <p className="text-gray-400 text-sm leading-relaxed">
                   <strong>Score: 83%</strong> • Mathematics-intensive curriculum strengthening logical reasoning. 
                   Functioned as a decisive pivot point—transitioning from general academics to engineering-ready thinking.
                 </p>
             </div>
            </motion.div>

             {/* School */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative pl-12"
            >
              <span className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-gray-600 ring-4 ring-black"></span>
              <div className="glass-card p-8 rounded-2xl">
                 <div className="flex justify-between items-start mb-4">
                    <div>
                        <h3 className="text-xl font-bold text-white">Secondary Education (CBSE)</h3>
                        <p className="text-gray-400">St. Joseph’s School</p>
                    </div>
                    <span className="font-mono text-gray-500">2019</span>
                 </div>
                 <p className="text-gray-400 text-sm leading-relaxed mb-4">
                   <strong>Score: 83%</strong> • Elected Red House Captain, served as student representative for ~800 students. Recipient of the “Best Captain” Award.
                 </p>
             </div>
            </motion.div>

          </div>
        </section>

      </div>
    </div>
  );
}
