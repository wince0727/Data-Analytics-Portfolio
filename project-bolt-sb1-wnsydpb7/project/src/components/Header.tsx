import { Mail, Phone, Linkedin, Github, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-4">
            <h1 className="text-xl font-bold text-gray-900">WINCE S</h1>
            <span className="hidden sm:block text-sm text-gray-600">Data Analyst</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-blue-600 transition">About</button>
            <button onClick={() => scrollToSection('experience')} className="text-gray-700 hover:text-blue-600 transition">Experience</button>
            <button onClick={() => scrollToSection('projects')} className="text-gray-700 hover:text-blue-600 transition">Projects</button>
            <button onClick={() => scrollToSection('skills')} className="text-gray-700 hover:text-blue-600 transition">Skills</button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-blue-600 transition">Contact</button>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a href="mailto:wincyselva2003@gmail.com" className="text-gray-600 hover:text-blue-600 transition">
              <Mail size={20} />
            </a>
            <a href="https://www.linkedin.com/in/wince-s-a7826528b/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition">
              <Linkedin size={20} />
            </a>
            <a href="https://github.com/wince0727" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition">
              <Github size={20} />
            </a>
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-gray-700">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-blue-600 transition text-left">About</button>
              <button onClick={() => scrollToSection('experience')} className="text-gray-700 hover:text-blue-600 transition text-left">Experience</button>
              <button onClick={() => scrollToSection('projects')} className="text-gray-700 hover:text-blue-600 transition text-left">Projects</button>
              <button onClick={() => scrollToSection('skills')} className="text-gray-700 hover:text-blue-600 transition text-left">Skills</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-blue-600 transition text-left">Contact</button>
            </nav>
            <div className="flex items-center space-x-4 mt-4 pt-4 border-t">
              <a href="mailto:wincyselva2003@gmail.com" className="text-gray-600 hover:text-blue-600 transition">
                <Mail size={20} />
              </a>
              <a href="https://www.linkedin.com/in/wince-s-a7826528b/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition">
                <Linkedin size={20} />
              </a>
              <a href="https://github.com/wince0727" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition">
                <Github size={20} />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
