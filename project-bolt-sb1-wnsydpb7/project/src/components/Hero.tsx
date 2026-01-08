import { MapPin, Phone, Mail, ChevronDown } from 'lucide-react';

export default function Hero() {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="animate-fade-in">
          <div className="mb-6">
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-500 to-teal-500 rounded-full flex items-center justify-center text-white text-5xl font-bold shadow-lg">
              WS
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4">
            WINCE S
          </h1>

          <p className="text-2xl md:text-3xl text-gray-700 mb-8">
            Entry-Level Data Analyst
          </p>

          <div className="flex flex-wrap justify-center gap-4 text-gray-600 mb-12">
            <div className="flex items-center gap-2">
              <MapPin size={18} />
              <span>Chennai, India</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={18} />
              <span>+91-8610281736</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={18} />
              <span>wincyselva2003@gmail.com</span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#contact"
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg"
            >
              Get In Touch
            </a>
            <a
              href="https://github.com/wince0727"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-white text-gray-800 rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg border border-gray-200"
            >
              View GitHub
            </a>
          </div>
        </div>

        <button
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-gray-400 hover:text-gray-600 transition"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
}
