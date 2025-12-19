import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/10 mt-auto">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h2 className="text-3xl font-bold mb-6">Let&apos;s Build Something <span className="gradient-text">Amazing</span></h2>
        <div className="flex justify-center gap-6 mb-8">
          <a href="mailto:amitgururaj2003@gmail.com" className="text-2xl hover:text-blue-400 transition-colors transform hover:scale-110"><FaEnvelope /></a>
          <a href="https://www.linkedin.com/in/amit-g-79b29024a/" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-400 transition-colors transform hover:scale-110"><FaLinkedin /></a>
          <a href="https://github.com/amitg404" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-400 transition-colors transform hover:scale-110"><FaGithub /></a>
        </div>
        <p className="text-gray-600 text-sm">© 2025 Amit G. Crafted with intelligence.</p>
      </div>
    </footer>
  );
}
