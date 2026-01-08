import { Target } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center mb-12">
          <Target className="text-blue-600 mr-3" size={32} />
          <h2 className="text-4xl font-bold text-gray-900">About Me</h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-8 md:p-12 shadow-lg">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Entry-level Data Analyst with hands-on experience in{' '}
              <span className="font-semibold text-blue-600">Python</span>,{' '}
              <span className="font-semibold text-blue-600">SQL</span>, and{' '}
              <span className="font-semibold text-blue-600">Power BI</span>, skilled in data
              cleaning, exploratory data analysis (EDA), and dashboard development to support
              data-driven decision-making.
            </p>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-xl transition-shadow">
                <div className="text-3xl font-bold text-blue-600 mb-2">10,000+</div>
                <div className="text-gray-600">Records Analyzed</div>
              </div>
              <div className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-xl transition-shadow">
                <div className="text-3xl font-bold text-teal-600 mb-2">2+</div>
                <div className="text-gray-600">Major Projects</div>
              </div>
              <div className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-xl transition-shadow">
                <div className="text-3xl font-bold text-blue-600 mb-2">5 Months</div>
                <div className="text-gray-600">Training Completed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
