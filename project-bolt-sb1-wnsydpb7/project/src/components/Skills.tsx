import { Code, Database, BarChart2, Wrench } from 'lucide-react';

const skillCategories = [
  {
    title: 'Programming',
    icon: Code,
    skills: ['Python', 'SQL'],
    color: 'from-blue-500 to-blue-600',
  },
  {
    title: 'Data Analysis',
    icon: BarChart2,
    skills: ['Excel', 'Power BI'],
    color: 'from-teal-500 to-teal-600',
  },
  {
    title: 'Libraries',
    icon: Database,
    skills: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
    color: 'from-cyan-500 to-cyan-600',
  },
  {
    title: 'Tools & Database',
    icon: Wrench,
    skills: ['MySQL', 'Git', 'GitHub'],
    color: 'from-green-500 to-green-600',
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center mb-12">
          <Code className="text-blue-600 mr-3" size={32} />
          <h2 className="text-4xl font-bold text-gray-900">Technical Skills</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
              >
                <div
                  className={`w-16 h-16 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 shadow-md`}
                >
                  <Icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{category.title}</h3>
                <div className="space-y-2">
                  {category.skills.map((skill) => (
                    <div
                      key={skill}
                      className="flex items-center justify-between py-2 px-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
                    >
                      <span className="text-gray-700 font-medium">{skill}</span>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className="w-2 h-2 rounded-full bg-blue-500"
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-8 md:p-12 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Certifications & Training
            </h3>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h4 className="text-xl font-bold text-blue-600 mb-4">
                Data Analytics Course (5 Months)
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <p className="text-gray-700 flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    Python, SQL, Power BI, Excel
                  </p>
                  <p className="text-gray-700 flex items-center gap-2">
                    <span className="w-2 h-2 bg-teal-500 rounded-full"></span>
                    Data cleaning, transformation, and EDA
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="text-gray-700 flex items-center gap-2">
                    <span className="w-2 h-2 bg-cyan-500 rounded-full"></span>
                    Interactive dashboards and visual reports
                  </p>
                  <p className="text-gray-700 flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    Business insights generation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
