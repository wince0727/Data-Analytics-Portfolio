import { Briefcase, CheckCircle2 } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center mb-12">
          <Briefcase className="text-blue-600 mr-3" size={32} />
          <h2 className="text-4xl font-bold text-gray-900">Experience</h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-start justify-between flex-wrap gap-4 mb-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Web Development Intern
                </h3>
                <p className="text-lg text-blue-600 font-semibold">
                  Focus Logic IT Services
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {[
                'Worked with structured data and performed data cleaning using JavaScript',
                'Assisted in analyzing application data and validating outputs for accuracy',
                'Used logical thinking and debugging techniques to improve application performance',
                'Collaborated with team members to understand business requirements and data flow',
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="text-teal-500 flex-shrink-0 mt-1" size={20} />
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {['JavaScript', 'Data Cleaning', 'Data Analysis', 'Debugging', 'Collaboration'].map(
                (skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
