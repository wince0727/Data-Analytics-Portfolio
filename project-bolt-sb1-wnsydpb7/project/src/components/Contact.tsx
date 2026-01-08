import { Mail, Phone, Linkedin, Github, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center mb-12">
          <Send className="text-blue-600 mr-3" size={32} />
          <h2 className="text-4xl font-bold text-gray-900">Get In Touch</h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <a
              href="mailto:wincyselva2003@gmail.com"
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:scale-105 flex items-center gap-4"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Email</h3>
                <p className="text-gray-600">wincyselva2003@gmail.com</p>
              </div>
            </a>

            <a
              href="tel:+918610281736"
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:scale-105 flex items-center gap-4"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Phone</h3>
                <p className="text-gray-600">+91-8610281736</p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/wince-s-a7826528b/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:scale-105 flex items-center gap-4"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <Linkedin className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">LinkedIn</h3>
                <p className="text-gray-600">Connect with me</p>
              </div>
            </a>

            <a
              href="https://github.com/wince0727"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:scale-105 flex items-center gap-4"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg flex items-center justify-center flex-shrink-0">
                <Github className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">GitHub</h3>
                <p className="text-gray-600">View my projects</p>
              </div>
            </a>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <MapPin className="text-blue-600 mx-auto mb-3" size={32} />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Location</h3>
            <p className="text-gray-600">Chennai, India</p>
          </div>
        </div>
      </div>

      <footer className="mt-16 pt-8 border-t border-gray-200 text-center text-gray-600">
        <p className="mb-2">Built with React, TypeScript, and Tailwind CSS</p>
        <p>2025 Wince S. All rights reserved.</p>
      </footer>
    </section>
  );
}
