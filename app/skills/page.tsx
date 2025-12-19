'use client';
import { motion, useMotionValue, useSpring, useTransform, Reorder } from 'framer-motion';
import { useState, useRef, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { FaLaptopCode, FaAtom, FaBrain, FaNetworkWired } from 'react-icons/fa';

type Skill = {
  name: string;
  description: string;
};

type ProjectNode = {
  id: string;
  title: string;
  icon: any; // Using 'any' for Icon type simplicity in this context
  color: string;
  initialPosition: { x: number; y: number };
  skills: Skill[];
};

const skillData: ProjectNode[] = [
  {
    id: "postershop",
    title: "postershop.store",
    icon: FaLaptopCode,
    color: "bg-blue-600",
    initialPosition: { x: 300, y: 300 },
    skills: [
      { name: "Next.js", description: "App Router, SSR" },
      { name: "React", description: "Hooks, Context, UI" },
      { name: "Node.js", description: "API, Scripts" },
      { name: "Puppeteer", description: "Scraping Automation" },
      { name: "Cloudinary", description: "Image Engine" },
    ]
  },
  {
    id: "yamnet",
    title: "Audio YAMNet",
    icon: FaAtom,
    color: "bg-green-600",
    initialPosition: { x: 800, y: 300 },
    skills: [
      { name: "Python", description: "Core Logic" },
      { name: "TensorFlow", description: "Model Inference" },
      { name: "Streamlit", description: "UI Framework" },
      { name: "LibROSA", description: "Audio Processing" }
    ]
  },
  {
    id: "classroom",
    title: "Classroom Tracking",
    icon: FaNetworkWired,
    color: "bg-orange-600",
    initialPosition: { x: 300, y: 600 },
    skills: [
      { name: "YOLOv8", description: "Object Detection" },
      { name: "OpenCV", description: "Frame Processing" },
      { name: "Computer Vision", description: "Analytics" },
    ]
  },
  {
    id: "localai",
    title: "Local AI Sync",
    icon: FaBrain,
    color: "bg-purple-600",
    initialPosition: { x: 800, y: 600 },
    skills: [
      { name: "Mistral-7B", description: "Local LLM" },
      { name: "Llava", description: "Vision Model" },
      { name: "Ollama", description: "Model Serving" },
    ]
  }
];

// Component for a single Project Hub and its orbiting Skills
function ProjectSystem({ project, isOpen, toggleOpen, isMobile }: { project: ProjectNode, isOpen: boolean, toggleOpen: (id: string) => void, isMobile: boolean }) {
  const hubRef = useRef<HTMLDivElement>(null);
  const [hubPos, setHubPos] = useState({ x: 0, y: 0 }); // Relative to parent usually, but we need screen coords for lines? simplify: local coords

  // Dragging the Hub triggers a "Bounce" animation on effect
  const [isBouncing, setIsBouncing] = useState(false);

  const triggerBounce = () => {
    setIsBouncing(true);
    setTimeout(() => setIsBouncing(false), 300);
  };

  return (
    <motion.div
      initial={project.initialPosition}
      drag
      dragMomentum={false}
      className="absolute"
      style={{ zIndex: isOpen ? 50 : 10 }}
    >
      {/* Central Hub */}
      <motion.div
        onClick={() => toggleOpen(project.id)}
        animate={isBouncing ? { scale: [1, 1.2, 0.9, 1.1, 1] } : {}}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className={`relative w-24 h-24 rounded-2xl ${project.color} border-4 border-white/20 shadow-[0_0_50px_rgba(0,0,0,0.5)] flex items-center justify-center cursor-grab active:cursor-grabbing group z-20`}
      >
        <project.icon className="text-4xl text-white drop-shadow-lg pointer-events-none" />
        <div className="absolute top-full mt-4 text-center w-40 bg-black/50 backdrop-blur-md px-2 py-1 rounded text-sm font-mono text-white/80 pointer-events-none select-none">
           {project.title}
        </div>
      </motion.div>

      {/* Skills (Rubber Band Effect) */}
      {isOpen && project.skills.map((skill, i) => {
         return (
            <SkillNode 
                key={skill.name} 
                skill={skill} 
                index={i} 
                total={project.skills.length} 
                onRelease={triggerBounce}
                isMobile={isMobile}
            />
         )
      })}
    </motion.div>
  );
}

// Individual Skill Node with Spring Physics
function SkillNode({ skill, index, total, onRelease, isMobile }: { skill: Skill, index: number, total: number, onRelease: () => void, isMobile: boolean }) {
    const angle = (index / total) * 2 * Math.PI;
    const radius = isMobile ? 100 : 160;
    const initialX = Math.cos(angle) * radius;
    const initialY = Math.sin(angle) * radius;

    // We use motion values for the spring physics
    const x = useMotionValue(0); 
    const y = useMotionValue(0);

    // Spring logic: The 'node' tries to stay at (initialX, initialY) relative to the hub
    // When dragged, we update x/y. When released, it springs back.
    
    return (
        <motion.div
            initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
            animate={{ x: initialX, y: initialY, opacity: 1, scale: 1 }}
            transition={{ 
                type: "spring", stiffness: 200, damping: 20, delay: index * 0.05 
            }}
            drag
            dragConstraints={{ left: initialX, right: initialX, top: initialY, bottom: initialY }} // Constraint to 0 size rect forces snap back? No, use dragSnapToOrigin?
            dragSnapToOrigin={true}
            dragElastic={0.2} // Rubber band feel
            onDragEnd={onRelease}
            className="absolute top-1/2 left-1/2 -ml-[60px] -mt-[25px]" // Center offset based on approx size
            style={{ x, y }} // This might conflict with the `animate` prop if not careful. 
                             // Better approach: Separate the drag wrapper from the positioning wrapper.
        >
           {/* Visual Rubber Band Line (simplified: just a line pointing to center? Hard to do strictly in CSS without SVG context) */}
           {/* For now, we omit the visible line during drag as it implies complex SVG recalc. 
               We focus on the "Pull and Bounce" physics feeling. */}
           
           <div className="w-[120px] bg-[#1e293b] border border-white/20 p-2 rounded-lg shadow-xl cursor-grab active:cursor-grabbing flex flex-col items-center select-none hover:border-blue-400 transition-colors">
              <span className="font-bold text-blue-300 text-xs whitespace-nowrap">{skill.name}</span>
              <span className="text-[9px] text-gray-400 text-center leading-tight mt-1">{skill.description}</span>
           </div>
        </motion.div>
    );
}


function SkillsCanvas() {
  const searchParams = useSearchParams();
  const highlightProject = searchParams.get('project');
  const [openProjects, setOpenProjects] = useState<string[]>([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (highlightProject) {
        const target = skillData.find(p => p.title === highlightProject);
        if (target) {
            setOpenProjects([target.id]);
        }
    } else {
        setOpenProjects(['postershop']);
    }
  }, [highlightProject]);

  const toggleProject = (id: string) => {
    setOpenProjects(prev => 
      prev.includes(id) ? prev.filter(p => p !== id) : [...prev, id]
    );
  };

  return (
    <div className="w-full h-screen overflow-hidden bg-[#0a0a0a] relative touch-none">
      {/* Blueprint Grid Background */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none" 
        style={{ 
          backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', 
          backgroundSize: '40px 40px' 
        }}
      ></div>

      <div className="absolute top-8 left-0 w-full text-center pointer-events-none z-10">
        <h1 className="text-3xl font-bold text-white/50 uppercase tracking-[1em]">Schematics</h1>
        <p className="text-xs text-gray-500 mt-2 font-mono">DRAG NODES • OBSERVE ELASTICITY</p>
      </div>

      {skillData.map((project, index) => {
        // dynamic positioning for mobile
        const mobileY = 150 + (index * 180); // Stacking vertically
        const initialPos = isMobile ? { x: window.innerWidth / 2 - 50, y: mobileY } : project.initialPosition;

        return (
            <ProjectSystem 
                key={project.id} 
                project={{...project, initialPosition: initialPos}} 
                isOpen={openProjects.includes(project.id)} 
                toggleOpen={toggleProject}
                isMobile={isMobile}
            />
        );
      })}
    </div>
  );
}

export default function Skills() {
    return (
        <Suspense fallback={<div className="text-center pt-20">Loading Schematics...</div>}>
            <SkillsCanvas />
        </Suspense>
    )
}
