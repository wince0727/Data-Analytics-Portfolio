import { GraduationCap, Calendar, MapPin } from 'lucide-react';

export default function Education() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center mb-12">
          <GraduationCap className="text-blue-600 mr-3" size={32} />
          <h2 className="text-4xl font-bold text-gray-900">Education</h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-8 md:p-12 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-start gap-6">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-teal-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                <GraduationCap className="text-white" size={40} />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  B.Tech – Information Technology
                </h3>
                <p className="text-lg text-blue-600 font-semibold mb-4">
                  Kingston Engineering College
                </p>
                <div className="flex flex-wrap gap-4 text-gray-600">
                  <div className="flex items-center gap-2">
                    <MapPin size={18} />
                    <span>Vellore, Tamil Nadu</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={18} />
                    <span>Completed: 2025</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
